import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import BulletinTopBar from '../components/BulletinTopBar';
import Welcome from '../components/Welcome';
import BulletinSwitcher from '../components/BulletinSwitcher';
import Notifications from '../components/Notifications';

export default function Bulletin() {
  return (
    <SafeAreaView style={styles.safearea}>
      <BulletinTopBar />
      <BulletinSwitcher />
      <Notifications />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safearea: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#fff',
  }
});