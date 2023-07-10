import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native';
import { Alert } from 'react-native';
const Home = () => {
  return (
    <SafeAreaView style={{height:500}}>
        <ScrollView  contentContainerStyle={[styles.container]}>
      <View style={[styles.header,{height:60}]}>
        <Text>header</Text>
        </View>
        <View style={styles.middle}>

          <Text>Open up App.js on your app!</Text>
          <AntDesign name="star" size={160} color="black" />
          <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
          <Text>Open up App.js on your app!</Text>
          <Text>Open up App.js on your app!</Text>
          <Text>Open up  your app!</Text>
        </View>
      <View style={[styles.footer,{height:60}]}>
        <Text>footer</Text>
        </View>
    </ScrollView>
    </SafeAreaView>
    
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor:'orange',
      justifyContent: 'space-between',
    },
    middle:{
      backgroundColor:'silver',
      width:'90%',
      padding:15,
      height:800,
      justifyContent:'space-evenly',
      alignItems:'center',
    },
    header:{
      backgroundColor:'green',
      alignSelf:'stretch',
      alignItems: 'center',
      justifyContent: 'center',
    },
    footer:{
      backgroundColor:'yellow',
      alignSelf: 'stretch', 
      alignItems: 'center',
      justifyContent: 'center',
    },
   
  })