import { StyleSheet } from "react-native";

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
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
