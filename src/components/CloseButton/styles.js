import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    right: 7,
    top: 7,
    width: 44,
    height: 44,
    zIndex: 100,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      android: {
        elevation: 3
      },
      ios: {
        shadowColor: "rgb(0, 0, 0)",
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowRadius: 4
      }
    })
  },
  icon: {
    width: 14,
    height: 14
  }
});
