// when focustube is clicked
browser.browserAction.onClicked.addListener(function () {
    browser.storage.local.get("focustube")
        .then(function (oldSettings) { // if has existing settings in storage
            let newSettings = { focus: !(oldSettings.focustube.focus) }; // just toggle the value
            save(newSettings);
        }, function (error) {
            var newSettings = { focus: true }; // initial is true
            save(newSettings);
        });
});

function save(newSettings) {
    console.debug('Saving new settings: ' + JSON.stringify(newSettings));
    browser.storage.local.set({ focustube: newSettings }).then(function (value) {
        browser.tabs.executeScript(null, { file: "focus.js" }); // refresh tabs
    });
}
