browser.browserAction.onClicked.addListener(function() {
    browser.tabs.executeScript(null, {file: "extract.js"});
});
