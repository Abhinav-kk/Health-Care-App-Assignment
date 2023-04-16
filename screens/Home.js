import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar';
import Welcome from '../components/Welcome';
import Feeling from '../components/Feeling';
import Stats from '../components/Stats';
import Shop from '../components/Shop';
import Appointments from '../components/Appointments';
import RecentOrder from '../components/RecentOrder';
import Blog from '../components/Blog';
import Looking from '../components/Looking';
import Doctors from '../components/Doctors';
import BottomBaar from '../components/BottomBar';

export default function App() {
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopBar />
        <Welcome />
        <Feeling />
        <Stats />
        <Shop />
        <Appointments />
        <RecentOrder />
        <Blog />
        <Looking />
        <Doctors />
        <View style={{ height: 100 }}></View>
        {/* <BottomBaar /> */}
      </ScrollView>
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