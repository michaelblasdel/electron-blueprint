const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron');

/*
Application States
------------------
Various event triggers that manage the application and its state.
*/
app.on('ready', startup);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (win === null) {
        createMainWindow();
    }
});

/*
Application Startup
-------------------
Code to run before showing the application window.
*/
function startup () {

    createMainWindow();
}

/*
Main window
-----------
Code that handles the creation of the main application window.
*/
let winMain;
function createMainWindow() {

    // Create Window
    winMain = new BrowserWindow({
        frame: false,
        autoHideMenuBar: true,
        width: 800,
        height: 700,
    });
    winMain.loadFile('htmlWinMain.html');

    // Handle window close button
    winMain.on('closed', () => {
        winMain = null;
        app.quit();
    });

}
