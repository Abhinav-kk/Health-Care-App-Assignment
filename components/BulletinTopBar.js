import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function TopBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back-circle-outline" flex={1} size={40} color="#033925" style={{ alignSelf: 'center' }} />
      <MaterialIcons name="search" size={30} color="grey" style={{ alignSelf: 'center', marginRight: 10 }} />
      <MaterialIcons name="shopping-bag" size={30} color="grey" style={{ alignSelf: 'center', marginRight: 10 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', // added this line
  },
});
