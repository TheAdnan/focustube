$ = (queryString) => document.querySelector(queryString);

refresh();

function refresh() {
    browser.storage.local.get("focustube")
        .then(function (settings) {
            console.debug('existing: ' + JSON.stringify(settings));
            if (settings.focustube.focus) {
                focus();
            } else {
                reset();
            }
        }, function (error) {
            console.debug('error: ' + JSON.stringify(error));
        });
}

function focus() {
    // fix player itself
    const playerElem = $('.html5-video-player');
    playerElem.style.position = 'fixed';
    playerElem.style.height = '52vh'; // 3:2
    playerElem.style.width = '78vh';
    playerElem.style.left = '15px';
    playerElem.style.top = '75px';
    playerElem.style.zIndex = '999';
    // update background also
    const playerContainerElem = $('#player-container-outer');
    playerContainerElem.style.height = playerElem.style.height;
    playerContainerElem.style.width = playerElem.style.width;
    playerContainerElem.style.setProperty('background-color', 'black');
}

function reset() {
    const playerElem = $('.html5-video-player');
    playerElem.style.position = 'relative';
    playerElem.style.height = '100%';
    playerElem.style.width = '100%';
    playerElem.style.left = '0px';
    playerElem.style.top = '0px';
    playerElem.style.zIndex = 'auto';
    const playerContainerElem = $('#player-container-outer');
    playerContainerElem.style.height = playerElem.style.height;
    playerContainerElem.style.width = playerElem.style.width;
    playerContainerElem.style.setProperty('background-color', 'white');
}
