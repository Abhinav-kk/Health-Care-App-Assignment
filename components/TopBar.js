import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function TopBar() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="menu" size={40} color="black" flex={1} style={{ marginLeft: -5 }} />
      <MaterialIcons name="search" size={30} color="grey" style={{ alignSelf: 'center', marginRight: 10 }} />
      <MaterialIcons name="shopping-bag" size={30} color="grey" style={{ alignSelf: 'center', marginRight: 10 }} />
      <Image source={{ uri: "https://th.bing.com/th/id/OIP.MvDPyUTVjvR5RBm9AqtCZQHaHa?pid=ImgDet&rs=1" }} style={{ borderColor: '#000', borderWidth: 2, borderRadius: 10, width: 30, height: 30, alignSelf: 'center' }} />
      {/* <MaterialIcons name="person" size={30} color="black" style={{ alignSelf: 'center', borderWidth: 2, borderRadius: 10, textAlign: 'center' }} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
