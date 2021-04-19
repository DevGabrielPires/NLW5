import React from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../styles/colors';

import watering from '../assets/watering.png'

export function Welcome(){
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas{'\n'}
         de forma fácil.
      </Text>
      <Image source={watering} style={styles.imagecover} />
      <Text style={styles.subtitle}>
        Não esqueça de regar suas plantas.{'\n'}
        Nós cuidamos de lembrar você sempre que precisar. 
      </Text>
      <TouchableOpacity
       style={styles.botao}
       activeOpacity={0.5}
       >
        <Text  style={styles.textbotao}>
          {'>'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
    marginTop: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
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
  imagecover:{
    width: 292,
    height: 284
  },
  textbotao:{
    color: colors.white,
    fontSize: 30
  }
});