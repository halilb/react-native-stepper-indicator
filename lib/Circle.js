import React, { Component, PropTypes } from 'react';
import {
  Animated,
  Easing,
  Image,
  View,
  StyleSheet,
} from 'react-native';

export default class Circle extends Component {

  static propTypes = {
    isCurrent: PropTypes.bool,
    isOld: PropTypes.bool,
    isLast: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      sizeAnim: new Animated.Value(0),
      separatorAnim: new Animated.Value(0),
    };

    this.update(props);
  }

  componentWillReceiveProps(nextProps) {
    this.update(nextProps);
  }

  update(props) {
    let separatorValue = 0;
    let circleSize = 0;
    if (props.isOld) {
      circleSize = 30;
      separatorValue = 1;
    } else if (props.isCurrent) {
      circleSize = 10;
    }

    const sizeAnim = Animated.timing(
      this.state.sizeAnim, {
        toValue: circleSize,
        duration: 250,
        easing: Easing.bezier(0.2, 1.7, 0.8, 1),
      },
    );
    const separatorAnim = Animated.timing(
      this.state.separatorAnim, {
        toValue: separatorValue,
        duration: 100,
        easing: Easing.bezier(0.2, 1, 0.3, 1),
      },
    );
    Animated.sequence([sizeAnim, separatorAnim]).start();
  }

  render() {
    const { isOld, isLast } = this.props;
    const { sizeAnim, separatorAnim } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.outerCircle}>
          <Animated.View
            style={[styles.innerCircle, {
              width: sizeAnim,
              height: sizeAnim,
            }]}
          />
          {isOld &&
            <Image
              source={require('./assets/check.png')}
              style={{
                position: 'absolute',
                top: 0,
                width: 18,
                height: 18,
              }}
            />
          }
        </View>
        {!isLast &&
          <View style={styles.separator}>
            <Animated.View
              style={[styles.activeSeparator, {
                width: separatorAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 40],
                }),
              }]}
            />
          </View>
        }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  outerCircle: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderColor: '#b3bdc2',
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    backgroundColor: '#00b47c',
    borderRadius: 20,
  },
  separator: {
    height: 4,
    width: 40,
    marginHorizontal: 4,
    alignSelf: 'center',
    backgroundColor: '#b3bdc2',
  },
  activeSeparator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#00b47c',
  },
});
