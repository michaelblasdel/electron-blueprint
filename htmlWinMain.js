var {
    remote,
    ipcRenderer
} = require('electron');

// Calculate Window body// Keep that up to date
refreshWindowBody();
$( window ).resize(function() {
    refreshWindowBody();
});
function refreshWindowBody () {
    var navHeight = $(".navbar-title").outerHeight(true);
    var statusHeight = $(".navbar-status").outerHeight(true);
    var windowHeight = $(window).height();
    var actualHeight = windowHeight - (navHeight + statusHeight);
    $(".window-body").height(actualHeight).css('margin-top',navHeight);
    $(".window-sidebar").css('min-height', actualHeight);
}
