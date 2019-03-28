import React from "react";
import PropTypes from "prop-types";

import { View, Text, TouchableOpacity, Animated } from "react-native";

import styles from "./styles";

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

const CloseButton = ({ onPress, opacity, ...props }) => (
  <AnimatedButton
    style={[
      styles.container,
      {
        opacity
      }
    ]}
    onPress={onPress}
    {...props}
  >
    <View style={styles.buttonContainer}>
      <Text style={{ fontSize: 12, fontWeight: "bold" }}>X</Text>
    </View>
  </AnimatedButton>
);

CloseButton.propTypes = {
  onPress: PropTypes.func,
  opacity: PropTypes.instanceOf(Object)
};

CloseButton.defaultProps = {
  onPress: () => null
};

export default CloseButton;
