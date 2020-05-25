import React from 'react';
import {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
Icon.loadFont();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  action: {
    backgroundColor: '#2980b9',
    flexGrow: 1,
  },
  headerContainer: {
    backgroundColor: '#2980b9',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    borderBottomStartRadius: 50,
  },
  header: {
    backgroundColor: '#ecf0f1',
    flexGrow: 2,
  },
  textHeader: {
    color: 'white',
    fontSize: 30,
  },
  actionContainer: {
    borderTopEndRadius: 50,
    backgroundColor: '#ecf0f1',
    flexGrow: 2,
  },
  cardLogin: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'space-around',
    flexGrow: 1,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 60,
  },
});

const image = require('../../assets/bg-login.jpg');

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <Text style={styles.textHeader}>Hey Vizinho !</Text>
          </View>
        </View>
        <View style={styles.action}>
          <View style={styles.actionContainer}>
            <View style={styles.cardLogin}>
              <Input icon="envelope" placeholder="E-mail" />
              <Input icon="lock" placeholder="Senha" secureTextEntry={true} />
              <Button label="Entrar" />
              <View style={styles.socialButtons}>
                <Icon name="social-facebook" size={20} color="#2980b9" />
                <Icon name="social-instagram" size={20} color="#2980b9" />
                <Icon name="social-google" size={20} color="#2980b9" />
              </View>
              <Button
                label="Registrar"
                buttonStyle={{backgroundColor: 'transparent'}}
                textStyle={{color: '#2980b9'}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
