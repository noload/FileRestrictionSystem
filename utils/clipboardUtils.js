// utils/clipboardUtils.js

const clipboardy = require('clipboardy');
const { isFilePath, isInsideRootFolder } = require('./fileUtils');
const config = require('../config');

/**
 * Monitors the clipboard for file paths and prevents files from being pasted outside the root folder.
 */
function monitorClipboard() {
  setInterval(() => {
    const clipboardContent = clipboardy.readSync(); // Read clipboard content

    // Check if clipboard contains a valid file path
    if (isFilePath(clipboardContent)) {
      console.log(`Clipboard contains a valid file: ${clipboardContent}`);
      
      // Check if the file is inside the root folder
      if (!isInsideRootFolder(clipboardContent, config.rootFolder)) {
        console.log(`Operation blocked: ${clipboardContent} is outside the root folder.`);
      } else {
        console.log(`File ${clipboardContent} is inside the root folder.`);
      }
    }
  }, 1000);  // Monitor every second
}

module.exports = {
  monitorClipboard,
};
