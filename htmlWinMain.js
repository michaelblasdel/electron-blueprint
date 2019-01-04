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
function toggleWindowMax() {
    if (remote.getCurrentWindow().isMaximized()) {
        remote.getCurrentWindow().unmaximize();
        $(".navbar-max").empty().html(`<i class="far fa-window-maximize"></i>`);
    } else {
        remote.getCurrentWindow().maximize();
        $(".navbar-max").empty().html(`<i class="fas fa-window-restore"></i>`);
    }
}
$( document ).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
