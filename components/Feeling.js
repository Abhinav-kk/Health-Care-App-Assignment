import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';


export default function Feeling() {
    return (
        // <Text>Welcome To App</Text>
        <View style={styles.container}>
            <MaterialIcons name="close" size={25} color="#036943" style={{ position: 'absolute', top: 5, right: 10 }} />
            <Text style={styles.how}>How are you <Text style={{ fontFamily: 'Roboto-Bold' }}>feeling</Text> today?</Text>
            <View style={styles.emojiContainer}>
                <Text style={styles.emoji}>😵</Text>
                <Text style={styles.emoji}>😐</Text>
                <Text style={styles.emoji}>😊</Text>
                <Text style={styles.emoji}>😀</Text>
                <Text style={styles.emoji}>😁</Text>
            </View>
            <Slider
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#036943"
                thumbTintColor="#036943"
                maximumTrackTintColor="#000000"
                step={25}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 25,
        padding: 20,
        borderRadius: 20,
        backgroundColor: "#fff7e2",
        height: 180,
    },
    how: {
        fontSize: 20,
        color: "#036943",
        fontFamily: "Roboto-Light"
    },
    close: {
        fontSize: 20,
    },
    emoji: {
        fontSize: 30,
    },
    emojiContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});