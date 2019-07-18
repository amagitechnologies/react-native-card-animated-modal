import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";

import IGIcon from "../assets/ig_icon";

export default () => (
  <View>
    <View
      style={{
        width: "100%",
        padding: 16,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        position: "absolute",
        bottom: 0,
        left: 0
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Image
            source={{ uri: IGIcon }}
            style={{ width: 40, height: 40, marginRight: 10 }}
          />
          <View>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>Instagram</Text>
            <Text style={{ fontSize: 12 }}>Capture every moment</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#007AFF",
              padding: 7,
              minWidth: 60,
              borderRadius: 16
            }}
            onPress={() => {
              console.log("IG Card");
            }}
          >
            <Text style={{ color: "rgb(255, 255, 255)", textAlign: "center" }}>
              GET
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);
