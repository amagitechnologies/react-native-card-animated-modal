import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";

import BattleFieldIcon from "../assets/battlefield_icon";

export default () => (
  <View
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
    <View
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        padding: 16,
        backgroundColor: "rgba(255, 255, 255, 0.7)"
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
        LET&apos;S PLAY
      </Text>
      <Text
        style={{
          fontSize: 26,
          maxWidth: "80%",
          fontWeight: "bold",
          color: "rgb(51, 51, 51)"
        }}
      >
        Get your nerves in the game
      </Text>
    </View>
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgb(255, 255, 255)",
        padding: 10
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
          source={{ uri: BattleFieldIcon }}
          style={{ width: 40, height: 40, marginRight: 10 }}
        />
        <View>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>Battlefield</Text>
          <Text style={{ fontSize: 12 }}>Get on the battle field!</Text>
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
            console.log("Game Card");
          }}
        >
          <Text style={{ color: "rgb(255, 255, 255)", textAlign: "center" }}>
            GET
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
