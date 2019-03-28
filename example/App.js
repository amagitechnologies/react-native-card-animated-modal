import React from "react";
import CardList from "react-native-card-animated-modal";
import { Dimensions, Image, Text, View } from "react-native";

import Splash1 from "./assets/Splash1.jpg";
import Splash2 from "./assets/Splash2.jpg";
import Splash3 from "./assets/Splash3.jpg";

const { height } = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <CardList
        data={[{ source: Splash1 }, { source: Splash2 }, { source: Splash3 }]}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            style={{
              width: "100%",
              height: height * 0.75
            }}
          />
        )}
        renderDetails={({ item }) => (
          <View style={{ paddingVertical: 20, paddingHorizontal: 16 }}>
            <Text
              style={{
                color: "rgb(51, 51, 51)",
                fontSize: 24,
                marginBottom: 5
              }}
            >
              APP OF THE DAY
            </Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 13 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 13 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 13 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 13 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        )}
      />
    );
  }
}
