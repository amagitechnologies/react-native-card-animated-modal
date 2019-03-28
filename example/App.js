/* eslint import/no-extraneous-dependencies : off */
import React from "react";
import CardList from "react-native-card-animated-modal";

import { Dimensions, Image, Text, View } from "react-native";

import CARDS from "./cards";

const { height } = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <CardList
        data={CARDS}
        renderItem={({ item }) => {
          if (item.renderItem) return item.renderItem({ item });

          return (
            <Image
              source={item.source}
              style={{
                width: "100%",
                height: height * 0.75
              }}
            />
          );
        }}
        renderDetails={() => (
          <View style={{ paddingVertical: 30, paddingHorizontal: 16 }}>
            <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 18 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 18 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 18 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 18 }}>
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
