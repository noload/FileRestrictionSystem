// utils/fileUtils.js

const fs = require('fs');
const pathModule = require('path');

/**
 * Checks if the provided path is a valid file path.
 * @param {string} path - The file path to validate.
 * @returns {boolean} - Returns true if it's a valid file, false otherwise.
 */
function isFilePath(path) {
  try {
    const stats = fs.lstatSync(path);  // Get file stats
    return stats.isFile();  // Return true if it's a file, false if not
  } catch (error) {
    // If the path is invalid or doesn't exist, return false
    return false;
  }
}

/**
 * Checks if the provided path is inside the root folder.
 * @param {string} path - The file path to check.
 * @param {string} rootFolder - The root folder path.
 * @returns {boolean} - Returns true if the path is inside the root folder, false otherwise.
 */
function isInsideRootFolder(path, rootFolder) {
  // Normalize both the provided path and root folder path
  const normalizedPath = pathModule.normalize(path);
  const normalizedRoot = pathModule.normalize(rootFolder);

  // Check if the normalized path starts with the root folder path
  return normalizedPath.startsWith(normalizedRoot);
}

module.exports = {
  isFilePath,
  isInsideRootFolder,
};
