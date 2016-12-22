import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import StepperIndicator from 'react-native-stepper-indicator';

export default class StepperIndicatorExample extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StepperIndicator />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});
