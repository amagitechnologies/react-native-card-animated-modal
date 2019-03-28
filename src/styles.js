import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeArea: {
    flex: 1
  },
  flatlistContainer: {
    flexGrow: 1,
    backgroundColor: "rgb(250, 250, 250)"
  },
  ghostViewContainer: {
    ...StyleSheet.absoluteFill
  },
  scrollViewContainer: {
    ...StyleSheet.absoluteFill
  },
  scrollViewContentContainer: {
    flexGrow: 1
  }
});
