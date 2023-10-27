chrome.runtime.onInstalled.addListener( () => {
    chrome.storage.sync.set({ color: '#808080' }, () => {
        console.log('Extension Working!!');
      });
})