import { StyleSheet, Platform, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

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
        shadowOpacity: 0.7,
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowRadius: 10
      }
    })
  }
});
