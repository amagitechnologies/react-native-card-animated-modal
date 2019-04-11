import React from "react";

import { View, Text } from "react-native";

export default () => (
  <View>
    <View
      style={{
        width: "100%",
        padding: 16,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        position: "absolute",
        bottom: 0,
        left: 0
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
        GET FIT ALL DAY
      </Text>
      <Text
        style={{
          fontSize: 26,
          maxWidth: "80%",
          fontWeight: "bold",
          color: "rgb(51, 51, 51)"
        }}
      >
        Track your fitness everyday
      </Text>
    </View>
  </View>
);
