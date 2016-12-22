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

    this.goPrev = this.goPrev.bind(this);
    this.goNext = this.goNext.bind(this);

    this.state = {
      currentStep: 1,
      stepCount: 5,
    };
  }

  goPrev() {
    this.setState({
      currentStep: this.state.currentStep - 1,
    });
  }

  goNext() {
    this.setState({
      currentStep: this.state.currentStep + 1,
    });
  }

  renderButtons() {
    return (
      <View style={styles.buttons}>
        <TouchableOpacity onPress={this.goPrev}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goNext}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderCircle(step) {
    const { currentStep, stepCount } = this.state;

    return (
      <Circle
        isOld={step < currentStep}
        isCurrent={step === currentStep}
        isLast={step === stepCount}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circles}>
          {this.renderCircle(1)}
          {this.renderCircle(2)}
          {this.renderCircle(3)}
          {this.renderCircle(4)}
          {this.renderCircle(5)}
        </View>
        {this.renderButtons()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
