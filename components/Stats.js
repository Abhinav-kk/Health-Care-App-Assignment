import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Stats() {
    return (
        // <Text>Welcome To App</Text>
        <View>
            <TouchableOpacity style={styles.statsElement}>
                <Ionicons name="moon-outline" size={36} color="black" />
                <Text style={styles.statsMainText}>You slept for <Text style={{ ...styles.statsMainText, fontFamily: "Roboto-Bold" }}>8 hours</Text></Text>
                <Ionicons name="refresh" size={36} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.statsElement}>
                <Ionicons name="walk" size={36} color="black" />
                <Text style={styles.statsMainText}>You walked <Text style={{ ...styles.statsMainText, fontFamily: "Roboto-Bold" }}>1200 steps</Text></Text>
                <Ionicons name="refresh" size={36} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.statsElement}>
                <Ionicons name="time-outline" size={36} color="black" />
                <Text style={styles.statsMainText}>Screen Time is <Text style={{ ...styles.statsMainText, fontFamily: "Roboto-Bold" }}>5 hours</Text></Text>
                <Ionicons name="refresh" size={36} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.statsElement}>
                <Text style={styles.statsSmallText}>Health Data is not available</Text>
                <Ionicons name="heart-outline" size={36} color="black" />
                <Text style={styles.statsMainText}>Connect Your <Text style={{ ...styles.statsMainText, fontFamily: "Roboto-Bold" }}>Health App</Text></Text>
                <Ionicons name="add" size={36} color="grey" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    statsElement: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    statsMainText: {
        fontSize: 18,
        color: "#036943",
        fontFamily: "Roboto-Light",
        alignSelf: 'center',
    },
    statsSmallText: {
        fontSize: 12,
        color: "#036943",
        fontFamily: "Roboto-Light",
        alignSelf: 'center',
        position: 'absolute',
        top: 8,
        left: 77
    },
});