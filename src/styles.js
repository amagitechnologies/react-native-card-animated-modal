import { StyleSheet, Platform } from "react-native";

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
  },
  activeCard: {
    margin: 0,
    overflow: "visible",
    ...Platform.select({
      android: {
        elevation: 0
      },
      ios: {
        shadowColor: "rgb(0, 0, 0)",
        shadowOpacity: 0,
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowRadius: 0
      }
    })
  },
  image: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: undefined
  }
});
