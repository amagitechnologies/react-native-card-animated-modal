const path = require("path");

// react-native >= 0.57

const extraNodeModules = {
  "react-native-card-animated-modal": path.resolve(__dirname + "/../")
};
const watchFolders = [path.resolve(__dirname + "/../")];

module.exports = {
  resolver: {
    extraNodeModules
  },
  watchFolders
};
