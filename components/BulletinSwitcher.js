import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function BulletinSwitcher() {
    return (
        // <Text>Welcome To App</Text>
        <View style={styles.switcherContainer}>
            <TouchableOpacity style={{ ...styles.switcherElement, backgroundColor: '#033925' }}>
                <Text style={{ ...styles.switcherMainText, color: '#fff' }}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.switcherElement, backgroundColor: '#fff7e2' }}>
                <Text style={{ ...styles.switcherMainText, color: '#000' }}>Chats</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    switcherElement: {
        paddingVertical: 10,
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
        margin: 5,
        width: 165,
    },
    switcherMainText: {
        fontSize: 15,
        color: "#036943",
        fontFamily: "Roboto-Light",
        textAlign: 'center',
    },
    switcherContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});