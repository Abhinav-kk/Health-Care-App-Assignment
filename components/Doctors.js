import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const doctorCardDetails = [
    {
        id: 1,
        name: "Dr. Surabhi Pathak",
        image: "https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg="
    },
    {
        id: 2,
        name: "Dr. Sushma Pathak",
        image: "https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-doctor-camera-56673035.jpg"
    },
    {
        id: 3,
        name: "Dr Anjali Pathak",
        image: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
    },
]

export default function Doctors() {
    return (
        <View>
            <View style={styles.doctorHead}>
                <Text style={styles.doctorHeadingText}>Top Rated Doctors</Text>
            </View>
            <View style={styles.doctorSection}>
                {doctorCards()}
            </View>
        </View>
    );

    function doctorCards() {
        const renderItem = ({ item }) => (
            <TouchableOpacity style={styles.doctorCard}>
                <View>
                    <Image source={{ uri: item.image }} style={styles.doctorCardIcon} />
                </View>
                <Text style={styles.doctorCardText}>{item.name}</Text>
                <TouchableOpacity style={styles.readMoreButton}>
                    <Text style={styles.blogCardReadMoreText}>Follow</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
        return (
            <FlatList
                data={doctorCardDetails}
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
    doctorHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    doctorHeadingText: {
        color: '#036943',
        fontSize: 16,
        fontFamily: 'Roboto-Bold'
    },
    doctorSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    doctorCard: {
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
    },
    doctorCardIcon: {
        backgroundColor: '#fff7e2',
        padding: 30,
        marginTop: -15,
        marginHorizontal: -10,
        borderRadius: 10,
        alignSelf: 'center',
        width: 150,
        height: 150
    },
    doctorCardText: {
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        color: "#036943",
        fontSize: 14,
        paddingTop: 10
    },
    readMoreButton: {
        // color: '#fff',
        backgroundColor: "#033925",
        padding: 5,
        borderRadius: 5,
        width: 90,
        marginTop: 5,
        alignSelf: 'center',
    },
    blogCardReadMoreText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
    }
});