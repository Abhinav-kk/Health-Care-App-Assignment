import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Appointments() {
    return (
        <View>
            <View style={styles.appointmentHead}>
                <Text style={styles.appointmentHeadingText}>Upcoming Appointments</Text>
                <Text style={styles.appointmentClearText}>Clear</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.appointmentCard}>
                    <MaterialCommunityIcons name="calendar-check" size={40} color="#036943" />
                    <Text style={styles.appointmentCardHeadingText}>No New Appointments</Text>
                    <Text style={styles.appointmentCardBookText}>Book Now</Text>

                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appointmentHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    appointmentHeadingText: {
        color: '#036943',
        fontSize: 16,
        fontFamily: 'Roboto-Bold'
    },
    appointmentClearText: {
        color: '#036943',
        fontSize: 16,
        fontFamily: 'Roboto-Light'
    },
    appointmentCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 5,
    },
    appointmentCardHeadingText: {
        color: '#036943',
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'left',
        marginLeft: -50,
        fontFamily: 'Roboto-Light'
    },
    appointmentCardBookText: {
        color: '#036943',
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'left',
        marginRight: 10,
        fontFamily: 'Roboto-Bold'
    }
});