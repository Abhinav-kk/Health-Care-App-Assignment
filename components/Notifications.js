import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const notificationsList = [
    {
        id: 1,
        icon: 'person-circle',
        color: 'black',
        text: 'Namaste! 🌿\nWelcome to the Amrutam Family :)\nWe hope you have a holistic experience here.',
        date: '15 Feb 2022',
    },
    {
        id: 2,
        icon: 'checkmark-circle',
        color: 'black',
        text: '(FName), Woohoo! Your order has been placed and will be shipped shortly! Track your order here 🎁 📍',
        date: '15 Feb 2022'
    },
    {
        id: 3,
        icon: 'time-outline',
        color: 'black',
        text: '(FName), your favourite Amrutam Elixirs are waiting for you! 🍶',
        date: '15 Feb 2022'
    },
    {
        id: 4,
        icon: 'list',
        color: 'black',
        text: 'Ding Ding! Thats the bell for the new blog -(Blog Name)🔔',
        date: '15 Feb 2022'
    },
    {
        id: 5,
        icon: 'close-circle-outline',
        color: '#800000',
        text: 'The transaction for your recent order has failed; click here to try again. ❌',
        date: '15 Feb 2022'
    },
    {
        id: 6,
        icon: 'chatbox-ellipses-outline',
        color: 'black',
        text: 'Reminder: Your chat consultation session with[Doctor_Name] starts in 60 minutes 🔔',
        date: '15 Feb 2022'
    },
    {
        id: 7,
        icon: 'ios-play-circle-outline',
        color: '#800000',
        text: 'Reminder: Your Video consultation session with[Doctor_Name] starts in 60 minutes. 🔔',
        date: '15 Feb 2022'
    },
    {
        id: 8,
        icon: 'close-circle-outline',
        color: '#800000',
        text: '(FName); we regret to inform you that your Chat consultation with [Doctor_Name] has been cancelled🔔',
        date: '15 Feb 2022'
    },
    {
        id: 9,
        icon: 'close-circle-outline',
        color: 'black',
        text: '(FName); we regret to inform you that your Video consultation with [Doctor_Name] has been cancelled🔔',
        date: '15 Feb 2022'
    },
    {
        id: 10,
        icon: 'chatbox-outline',
        color: 'black',
        text: '(FName), [Doctor_Name] has joined the chat room and is waiting for you. 📱',
        date: '15 Feb 2022'
    },
    {
        id: 11,
        icon: 'ios-play-circle-outline',
        color: 'black',
        text: '(FName), [Doctor_Name] has joined the video room and is waiting for you. 📱',
        date: '15 Feb 2022'
    },
    {
        id: 12,
        icon: 'medical-outline',
        color: 'black',
        text: '(FName) Click here for your prescription and start your Ayurvedic journey!✍ https://docs.google.com/document/u/0/    ',
        date: '15 Feb 2022'
    },
];

export default function Notifications() {
    return (
        // <Text>Welcome To App</Text>
        <View style={{ marginBottom: 80 }}>
            {notifications()}
        </View>
    );

    function notifications() {
        const renderItem = ({ item }) => (
            <TouchableOpacity style={styles.statsElement}>
                <Ionicons name={item.icon} size={36} color={item.color} />
                <Text style={styles.statsMainText}>{item.text} </Text>
                <Text style={styles.statsSmallText}>{item.date} </Text>
            </TouchableOpacity>
        );
        return (
            <FlatList
                data={notificationsList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        )
    }
}

const styles = StyleSheet.create({
    statsElement: {
        paddingVertical: 20,
        paddingHorizontal: 10,
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
        marginHorizontal: 3,
        marginVertical: 5,
        width: 340
    },
    statsMainText: {
        fontSize: 13,
        color: "#000",
        fontFamily: "Roboto-Light",
        alignSelf: 'center',
        marginHorizontal: 10,
        marginRight: 20,
        marginTop: -10
    },
    statsSmallText: {
        fontSize: 10,
        color: "grey",
        fontFamily: "Roboto-Light",
        alignSelf: 'center',
        position: 'absolute',
        bottom: 5,
        left: 60,
    },
});