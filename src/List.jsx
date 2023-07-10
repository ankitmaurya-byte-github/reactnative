import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import React from 'react';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native';


const List = () => {
  const DATA = ["gsddhsone", "twgsdo", "three", "foungr", "twkgdo", "thrdffndee", "fodsgsdgur"];

  const renderSeparator = () => (
    <View style={styles.separator} />
  );

  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  const renderScrollableItem = ({ item }) => (
  <ScrollView>
      <View style={styles.item}>
        <Text style={styles.title}>{item}</Text>
      </View></ScrollView>
 
  );
  return (
      <ImageBackground source={image}resizeMode="cover" style={styles.image}>
      <View style={styles.list}>
        <FlatList
          contentContainerStyle={styles.flatlist}
          data={DATA}
          ItemSeparatorComponent={renderSeparator}
          renderItem={renderScrollableItem}
          keyExtractor={(item) => item}
          vertical 
        />
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      </View>
      </ImageBackground>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    padding: 30,
    height: 700,
    borderWidth: 3,
    borderColor: 'blue',
  },
  image:{
    flex:1,
    justifyContent: 'center',
  },
  flatlist: {
    backgroundColor: 'pink',
    padding: 20,
    height: 400,
    borderWidth: 4,
    borderColor: 'blue',
    backgroundColor:'red',
   
  },
  tinyLogo:{
    height:100,
    width:100,
    backgroundColor:'red',
  },
  item: {
    backgroundColor: 'yellow',
    width:200,
    height: 100,
    borderWidth: 2,
    borderColor: 'blue',
  },
  separator: {
    height: 10,
  },
});
