/* eslint react/prop-types : off */
/* eslint no-unused-vars : off */
import React from "react";

import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";

import IGIcon from "./assets/ig_icon";
import BattleFieldIcon from "./assets/battlefield_icon";
import CreativeImage from "./assets/creative";
import IGImage from "./assets/ig_image";
import FitnessImage from "./assets/fitness_image";
import GameImage from "./assets/game_image";

const { height } = Dimensions.get("window");

export default [
  {
    image: {
      uri: CreativeImage
    },
    height: height * 0.7,
    renderItem: ({ item }) => (
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
    )
  },
  {
    image: {
      uri: IGImage
    },
    renderItem: ({ item }) => (
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
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                  Instagram
                </Text>
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
              >
                <Text
                  style={{ color: "rgb(255, 255, 255)", textAlign: "center" }}
                >
                  GET
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  },
  {
    image: {
      uri: FitnessImage
    },
    renderItem: ({ item }) => (
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
    )
  },
  {
    image: {
      uri: GameImage
    },
    height: height * 0.8,
    renderItem: ({ item }) => (
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
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                Battlefield
              </Text>
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
            >
              <Text
                style={{ color: "rgb(255, 255, 255)", textAlign: "center" }}
              >
                GET
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
];
