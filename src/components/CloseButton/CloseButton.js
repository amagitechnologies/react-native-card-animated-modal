import React from "react";
import PropTypes from "prop-types";

import { View, TouchableOpacity, Animated, Image } from "react-native";

import CloseIcon from "./close_icon.png";
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
      <Image source={CloseIcon} style={styles.icon} />
    </View>
  </AnimatedButton>
);

CloseButton.propTypes = {
  onPress: PropTypes.func,
  opacity: PropTypes.instanceOf(Object).isRequired
};

CloseButton.defaultProps = {
  onPress: () => null
};

export default CloseButton;
