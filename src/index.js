import React from "react";
import PropTypes from "prop-types";

import {
  View,
  SafeAreaView,
  Animated,
  Easing,
  FlatList,
  StatusBar
} from "react-native";
import { Card, CardContent, CloseButton, DetailsContent } from "./components";

import styles from "./styles";

class Test extends React.Component {
  state = {
    activeCard: 0
  };

  cards = {};

  dimensions = new Animated.ValueXY({ x: 0, y: 0 });

  position = new Animated.ValueXY();

  animated = new Animated.Value(0);

  oldPosition = {};

  expand = activeCard => () => {
    StatusBar.setHidden(true, "slide");
    this.cards[activeCard].measure((x, y, width, height, pageX, pageY) => {
      this.oldPosition = {
        x: pageX,
        y: pageY,
        width,
        height
      };

      this.position.setValue({
        x: pageX,
        y: pageY
      });

      this.dimensions.setValue({
        x: width,
        y: height
      });

      this.setState(
        {
          activeCard
        },
        () => {
          this.ghostView.measure((dx, dy, dWidth, dHeight, dPageX, dPageY) => {
            Animated.parallel([
              Animated.timing(this.position.x, {
                toValue: dPageX,
                duration: 300
              }),
              Animated.timing(this.position.y, {
                toValue: dPageY,
                easing: Easing.bezier(0.175, 0.885, 0.32, 1.275),
                duration: 450
              }),
              Animated.timing(this.dimensions.x, {
                toValue: dWidth,
                duration: 300
              }),
              Animated.timing(this.dimensions.y, {
                toValue: dHeight,
                duration: 300
              }),
              Animated.timing(this.animated, {
                toValue: 1
              })
            ]).start();
          });
        }
      );
    });
  };

  shrink = () => {
    Animated.parallel([
      Animated.timing(this.position.x, {
        toValue: this.oldPosition.x,
        duration: 300
      }),
      Animated.timing(this.position.y, {
        toValue: this.oldPosition.y,
        easing: Easing.bezier(0.175, 0.885, 0.32, 1.275),
        duration: 300
      }),
      Animated.timing(this.dimensions.x, {
        toValue: this.oldPosition.width,
        duration: 300
      }),
      Animated.timing(this.dimensions.y, {
        toValue: this.oldPosition.height,
        duration: 300
      }),
      Animated.timing(this.animated, {
        toValue: 0,
        duration: 300
      })
    ]).start(() => {
      StatusBar.setHidden(false, "slide");

      this.setState({
        activeCard: 0
      });
    });
  };

  keyExtractor = (item, index) => `item-${index}`;

  renderItem = ({ item, index }) => {
    const { renderItem } = this.props;

    return (
      <Card
        ref={instance => (this.cards[index + 1] = instance)}
        onPress={this.expand(index + 1)}
      >
        <CardContent>{renderItem({ item, index })}</CardContent>
      </Card>
    );
  };

  render() {
    const { activeCard } = this.state;
    const { data, renderItem, renderDetails } = this.props;

    const activeCardBorderRadius = this.animated.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [20, 10, 0]
    });

    const activeCardBackground = this.animated.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [
        "rgba(255, 255, 255, 0)",
        "rgba(255, 255, 255, 1)",
        "rgba(255, 255, 255, 1)"
      ]
    });

    const activeCardStyle = {
      width: this.dimensions.x,
      left: this.position.x,
      top: this.position.y,
      borderRadius: activeCardBorderRadius,
      margin: 0,
      overflow: "visible"
    };

    const closeOpacity = this.animated.interpolate({
      inputRange: [0, 0.75, 1],
      outputRange: [0, 0, 1],
      useNativeDriver: true
    });

    const contentOpacity = this.animated.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0.5, 1],
      useNativeDriver: true
    });

    const contentOffsetX = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [-5, 0],
      easing: Easing.bezier(0.025, -0.05, 0.1, -0.1)
    });

    const contentOffsetY = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [-20, 0],
      easing: Easing.bezier(0.175, -0.885, 0.32, -1)
    });

    const activeDetailsStyle = {
      zIndex: 1,
      opacity: contentOpacity,
      transform: [
        {
          translateY: contentOffsetY
        },
        {
          translateX: contentOffsetX
        }
      ]
    };

    return (
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          contentContainerStyle={styles.flatlistContainer}
          keyExtractor={this.keyExtractor}
          data={data}
          renderItem={this.renderItem}
        />
        <View
          style={styles.ghostViewContainer}
          pointerEvents={activeCard ? "auto" : "none"}
          ref={view => {
            this.ghostView = view;
          }}
        >
          <Animated.ScrollView
            style={[
              styles.scrollViewContainer,
              {
                backgroundColor: activeCardBackground
              }
            ]}
            contentContainerStyle={styles.scrollViewContentContainer}
            pointerEvents={activeCard ? "auto" : "none"}
          >
            <Card customContainerStyle={[activeCardStyle]}>
              <CloseButton onPress={this.shrink} opacity={closeOpacity} />
              <CardContent
                customContainerStyle={{
                  borderRadius: activeCardBorderRadius
                }}
              >
                {(activeCard && renderItem({ item: data[activeCard - 1] })) ||
                  null}
              </CardContent>
            </Card>
            <Animated.View style={activeDetailsStyle}>
              <DetailsContent>
                {(activeCard &&
                  renderDetails({ item: data[activeCard - 1] })) ||
                  null}
              </DetailsContent>
            </Animated.View>
          </Animated.ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

Test.propTypes = {
  data: PropTypes.instanceOf(Array),
  renderItem: PropTypes.func,
  renderDetails: PropTypes.func
};

Test.defaultProps = {
  data: [],
  renderItem: () => null,
  renderDetails: () => null
};

export default Test;
