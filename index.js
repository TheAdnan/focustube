// when focustube is clicked
browser.browserAction.onClicked.addListener(function () {
    browser.storage.local.get("focustube")
        .then(function (oldSettings) { // if has existing settings in storage
            let newSettings;
            if(oldSettings && oldSettings.focustube) {
                newSettings = { focus: !(oldSettings.focustube.focus) }; // just toggle the value
            } else {
                newSettings = { focus: true }; // initial is true
            }
            save(newSettings);
        }, function (error) {
            console.debug('error: ' + JSON.stringify(error));
        });
});

function save(newSettings) {
    console.debug('Saving new settings: ' + JSON.stringify(newSettings));
    browser.storage.local.set({ focustube: newSettings }).then(function (value) {
        browser.tabs.executeScript(null, { file: "focus.js" }); // refresh tabs
    });
}
