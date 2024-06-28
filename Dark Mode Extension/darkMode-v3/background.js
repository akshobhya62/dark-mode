// background.js

chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.get(['num'], function(result) {
    let num = result.num || 0;
    num++;
    chrome.storage.local.set({num: num}, function() {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      } else {
        chrome.scripting.executeScript({
          target: {tabId: tab.id},
          files: ['content.js']
        });
      }
    });
  });
});
