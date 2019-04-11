import React from "react";

import { View, Text } from "react-native";

export default () => (
  <View>
    <View
      style={{
        width: "100%",
        padding: 16,
        backgroundColor: "rgb(255, 255, 255)"
      }}
    >
      <Text
        style={{
          fontSize: 12,
          marginBottom: 5,
          fontWeight: "bold",
          color: "rgba(0, 0, 0, 0.5)"
        }}
      >
        CREATIVE APPS
      </Text>
      <Text
        style={{
          fontSize: 26,
          maxWidth: "60%",
          fontWeight: "bold",
          color: "rgb(51, 51, 51)"
        }}
      >
        Enhance your artistic skills
      </Text>
    </View>
  </View>
);
