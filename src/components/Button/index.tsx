import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface IButton {
  label: string;
  textStyle?: any;
  buttonStyle?: any;
  onPress: () => void;
}

const style = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#2980b9',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.75,
    fontSize: 17,
  },
});

export default class Button extends React.Component<IButton> {
  render() {
    return (
      <TouchableOpacity
        style={{...style.container, ...this.props.buttonStyle}}
        onPress={this.props.onPress}>
        <Text style={{...style.text, ...this.props.textStyle}}>
          {this.props.label}
        </Text>
      </TouchableOpacity>
    );
  }
}
