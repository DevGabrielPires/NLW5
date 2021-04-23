import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button } from '../components/Button';
import fonts  from '../styles/fonts';
import colors from '../styles/colors';

export function Confirmation(){
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😉</Text>

        <Text style={styles.title} >Prontinho</Text>

        <Text style={styles.subTitle}>
          Agora iremos começar a cuidar das suas 
          plantinhas com muito cuidado, amor e carinho.
        </Text>
      <View style={styles.footer}>
        <Button 
        title="tudo certo"
        
        />
      </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15
  },
  subTitle:{
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    padding: 20,
    color: colors.heading
  },
  emoji:{
    fontSize: 32,
  },
  footer:{
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 30
  }
});