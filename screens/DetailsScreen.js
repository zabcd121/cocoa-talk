import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="go to details screen ...again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="go to home screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="go back" onPress={() => navigation.goBack()} />
      <Button
        title="go to the first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
