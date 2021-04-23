import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View
  } from 'react-native';
import { useNavigation } from '@react-navigation/core';
  
import { FontAwesome } from '@expo/vector-icons';

import colors from '../styles/colors';
import fonts from '../styles/fonts'

import watering from '../assets/watering.png';

export function Welcome(){

  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate('UserIdentification');
  }


  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas{'\n'}
          de forma fácil.
        </Text>
        <Image 
        source={watering}
        style={styles.imagecover}
        resizeMode={'contain'}
        />
        <Text style={styles.subtitle}>
          Não esqueça de regar suas plantas.{'\n'}
          Nós cuidamos de lembrar você sempre que precisar. 
        </Text>
        <TouchableOpacity
        style={styles.botao}
        activeOpacity={0.5}
        onPress={handleStart}
        >
          <Text>
            <FontAwesome 
            name='chevron-right'
            style={styles.iconeSeta}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 32,
    marginTop: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 38
  },
  imagecover:{
    height: Dimensions.get('window').width * 0.7
  },
  botao:{
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 30,
    height: 56,
    width: 56,
  },
  iconeSeta:{
    color: colors.white,
    fontSize: 20
  }

});