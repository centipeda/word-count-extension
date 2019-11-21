chrome.runtime.onInstalled.addListener(function() {

    chrome.contextMenus.create({
        "id": "countMenu",
        "title": "Word Count Menu",
        "contexts": ["selection"]
    });

});

chrome.runtime.onMessage.addListener((message, sender) => {
    if(message.title == "select") {
        var wordCount = message.body.split(' ').length;
        // console.log(wordCount);
        chrome.contextMenus.update("countMenu", {
            title: "Words: " + wordCount
        });
    }
    return true;
});
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if(changeInfo.status == "complete") {
        // console.log("finished loading");
        chrome.tabs.executeScript({
            file: 'content_script.js'
        });
    }
});
