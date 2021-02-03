import React from 'react';
import {View, Text, Button} from 'react-native';

export default function HomeScreen({navigation}){
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
      <Text>Home Screen</Text>
      <Button title="go to details screen"
       onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};