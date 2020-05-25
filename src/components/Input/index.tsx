import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
Icon.loadFont();

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(41, 128, 185, 0.1)',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  icon: {
    margin: 5,
    paddingBottom: 2,
  },
  textInput: {
    height: 40,
  },
});

interface IInput {
  secureTextEntry: boolean;
  placeholder: string;
  icon?: string;
}

export default class Input extends React.Component<IInput> {
  render() {
    return (
      <View style={styles.container}>
        <Icon name={this.props.icon} size={15} style={styles.icon} />
        <TextInput {...this.props} style={styles.textInput} />
      </View>
    );
  }
}
