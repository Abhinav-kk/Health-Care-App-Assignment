import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const lookingCardDetails = [
    {
        id: 1,
        name: "Take a Quiz",
        icon: "calendar-check-outline"
    },
    {
        id: 2,
        name: "E-Books",
        icon: "newspaper"
    },
    {
        id: 3,
        name: "Amurtam TV",
        icon: "youtube-tv"
    },
]

export default function Looking() {
    return (
        <View>
            <View style={styles.lookingHead}>
                <Text style={styles.lookingHeadingText}>What are you looking for?</Text>
            </View>
            <View style={styles.lookingSection}>
                {/* <TouchableOpacity style={styles.lookingCard}>
                    <View style={styles.lookingCardIcon}>
                        <MaterialIcons name="library-add-check" size={50} color="black" />
                    </View>
                    <Text style={styles.lookingCardText}>Take a Quiz</Text>
                </TouchableOpacity> */}
                {lookingCards()}
            </View>
        </View>
    );

    function lookingCards() {
        const renderItem = ({ item }) => (
            <TouchableOpacity style={styles.lookingCard}>
                <View style={styles.lookingCardIcon}>
                    <MaterialCommunityIcons name={item.icon} size={50} color="black" />
                </View>
                <Text style={styles.lookingCardText}>{item.name}</Text>
            </TouchableOpacity>
        );
        return (
            <FlatList
                data={lookingCardDetails}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                horizontal={true}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lookingHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    lookingHeadingText: {
        color: '#036943',
        fontSize: 16,
        fontFamily: 'Roboto-Bold'
    },
    lookingSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    lookingCard: {
        paddingVertical: 15,
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
        marginLeft: 2,
        marginRight: 15,
        marginVertical: 20,
        width: 105,
    },
    lookingCardIcon: {
        backgroundColor: '#fff7e2',
        padding: 30,
        marginTop: -15,
        marginHorizontal: -10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    lookingCardText: {
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
        fontSize: 14,
        paddingTop: 10
    },

});