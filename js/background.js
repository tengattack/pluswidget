// Copyright (c) 2013 tengattack. All rights reserved.

//var URL_GPLUS = new RegExp('^http(s)?://plus.google.com/');
var STORAGE_NAME = 'googlepluswidget';
var storage = localStorage[STORAGE_NAME];
var ex = chrome.extension;

if (storage === undefined) {
  storage = {};
}

function setVal(key, value, sync) {
  storage[key] = value;
  saveStorage();
  if (sync) {
    syncChange();
  }
}

function getVal(key) {
  return storage[key];
}

function saveStorage(sync) {
  var jsonVal = JSON.stringify(storage);
  console.log('saveStorage: ' + jsonVal);
  localStorage.setItem(STORAGE_NAME, jsonVal);

  if (sync) {
    syncStorage();
  }
}

function setStorage(jsonVal) {
  try {
    storage = JSON.parse(jsonVal);
  } catch (e) {
    storage = {};
  }
  saveStorage();
}

function syncStorage() {
  var values = {};
  values[STORAGE_NAME] = JSON.stringify(storage);

  chrome.storage.sync.set(values, function () {
    //console.log('Settings saved');
  });
}

function onInstall() {
  onUpdate();
}

function onUpdate() {
  window.open(ex.getURL("options.html"));
}

function getVersion() {
  var details = chrome.app.getDetails();
  return details.version;
}


// Check if the version has changed.
var currVersion = getVersion();
var prevVersion = localStorage['version']
if (currVersion != prevVersion) {
  // Check if we just installed this extension.
  if (typeof prevVersion == 'undefined') {
    onInstall();
  } else {
    onUpdate();
  }
  localStorage['version'] = currVersion;
}

ex.onRequest.addListener(function (request, sender, sendResponse) {
  if (request && request.action) {
    switch (request.action) {
      case 'pageAction.show':
        chrome.pageAction.show(sender.tab.id);
        break;
      case 'getStorage':
        sendResponse({storage: storage});
        break;
      case 'setStorage':
        storage = request.storage;
        saveStorage(true);
        break;
      case 'setVal':
        setVal(request.key, request.value, true);
        break;
      /*case 'clearStorage':
        break;*/
    }
  }
});

// sync
chrome.storage.sync.get(STORAGE_NAME, function (r) {
  setStorage(r[STORAGE_NAME]);
});
chrome.storage.onChanged.addListener(function (changes, namespace) {
  if (namespace == 'sync') {
    for (key in changes) {
      if (key === STORAGE_NAME) {
        //setVal(key, changes[key].newValue, false);
        setStorage(changes[key].newValue);
        console.log(key + ' was changed to \'' + changes[key].newValue + '\'!');
      }
    }
  }
});

if (chrome.pageAction) {
  chrome.pageAction.onClicked.addListener(function (tab) {
    window.open(ex.getURL("options.html"));
  });
}
