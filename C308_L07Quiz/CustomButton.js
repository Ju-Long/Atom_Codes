/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class CustomBtn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title={this.props.title} color="purple"
        onPress={() => {alert(this.props.data)}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 20,
    paddingHorizontal: 20,
  },
});
