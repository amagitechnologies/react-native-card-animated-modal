import React from "react";
import PropTypes from "prop-types";

import { TouchableWithoutFeedback, View, Animated } from "react-native";

import styles from "./styles";

class Card extends React.PureComponent {
  measure = callback => {
    this.container.measure(callback);
  };

  render() {
    const { children, customContainerStyle, onPress } = this.props;

    const containerStyle = [styles.container, customContainerStyle];

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Animated.View style={containerStyle}>
          <View
            ref={instance => {
              this.container = instance;
            }}
          >
            {children}
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  customContainerStyle: PropTypes.instanceOf(Object),
  onPress: PropTypes.func
};

Card.defaultProps = {
  children: null,
  onPress: null,
  customContainerStyle: {}
};

export default Card;
