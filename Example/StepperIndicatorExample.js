import React, { Component } from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import StepperIndicator from 'react-native-stepper-indicator';

const screenWidth = Dimensions.get('window').width;
const COLORS = ['red', 'blue', 'yellow', 'green', 'purple'];

export default class StepperIndicatorExample extends Component {

  constructor(props) {
    super(props);

    this.goPrev = this.goPrev.bind(this);
    this.goNext = this.goNext.bind(this);

    this.state = {
      currentStep: 0,
    };
  }

  componentDidMount() {
    this.forceUpdate();
  }

  goPrev() {
    const prevStep = this.state.currentStep - 1;
    this.setState({
      currentStep: prevStep,
    });
  }

  goNext() {
    const nextStep = this.state.currentStep + 1;
    this.setState({
      currentStep: nextStep,
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

  renderPage(index) {
    return (
      <View style={[styles.page, {
        width: screenWidth - 40,
        backgroundColor: COLORS[index],
      }]}>
        <Text>{index}</Text>
        {this.renderButtons()}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StepperIndicator
          scrollView={this.scrollView}
          width={screenWidth - 40}
          currentStep={this.state.currentStep}
          stepCount={5}
        />
        <View style={styles.scrollParent}>
          <ScrollView
            style={styles.scrollView}
            ref={(scrollView) => this.scrollView = scrollView}
            contentContainerStyle={styles.scrollContent}
            horizontal
            pagingEnabled
            scrollEnabled={false}
          >
            {this.renderPage(0)}
            {this.renderPage(1)}
            {this.renderPage(2)}
            {this.renderPage(3)}
            {this.renderPage(4)}
          </ScrollView>
        </View>
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
  page: {
  },
  scrollContent: {
  },
  scrollParent: {
    flex: 1,
    overflow: 'hidden',
  },
});
