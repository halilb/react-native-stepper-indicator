import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import Circle from './Circle';

export default class StepperIndicator extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillReceiveProps(nextProps) {
    nextProps.scrollView.scrollTo({
      x: nextProps.currentStep * nextProps.width,
    });
  }

  renderCircle(step) {
    const { currentStep, stepCount } = this.props;

    return (
      <Circle
        isOld={step < currentStep}
        isCurrent={step === currentStep}
        isLast={step + 1 === stepCount}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circles}>
          {this.renderCircle(0)}
          {this.renderCircle(1)}
          {this.renderCircle(2)}
          {this.renderCircle(3)}
          {this.renderCircle(4)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  circles: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
});
