import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    zIndex: 6,
    margin: 16,
    borderRadius: 20,
    width: width - 32,
    ...Platform.select({
      android: {
        elevation: 3
      },
      ios: {
        shadowColor: "rgb(0, 0, 0)",
        shadowOpacity: 0.3,
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowRadius: 10
      }
    }),
    minHeight: height * 0.5,
    maxHeight: height * 0.85
  },
  childrenContainer: {
    flex: 1
  }
});
