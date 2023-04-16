import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function BottomBar() {
  return (
    <View style={styles.container}>
      <View style={styles.navIconGroup}>
        <Ionicons name="sunny-outline" size={24} color="black" style={{ alignSelf: 'center' }} />
        <Text style={styles.navIconText}>Home</Text>
        <Ionicons name="remove-outline" size={45} color="black" style={{ marginTop: -10 }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
