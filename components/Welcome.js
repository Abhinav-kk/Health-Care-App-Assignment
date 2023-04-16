import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Welcome() {
    return (
        // <Text>Welcome To App</Text>
        <View style={styles.container}>
            <Text style={styles.date}>Friday, 4 Sep</Text>
            <Text style={styles.name}>Namaste, Angela</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 25
    },
    date: {
        fontSize: 16,
        color: "grey",
        fontFamily: "Roboto-Regular"
    },
    name: {
        fontSize: 22,
        color: "black",
        fontFamily: "Roboto-Medium"
    }
});