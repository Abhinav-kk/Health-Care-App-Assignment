import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const blogPosts = [
    {
        id: 1,
        name: "Covid Cases Rapidly High Due to weeks...",
        date: "06 Dec 2022",
        image: "https://www.india.com/wp-content/uploads/2016/08/Untitled-design-15.jpg"
    },
    {
        id: 2,
        name: "Symptoms of Omicron Virus...",
        date: "06 Dec 2022",
        image: "https://medicaldialogues.in/h-upload/2020/03/07/125293-ayurveda.webp"
    },
    {
        id: 3,
        name: "Ayurveda proved effective for Covid-19...",
        date: "09 Dec 2022",
        image: "https://cdn.shopify.com/s/files/1/2402/9599/files/ayurveda1.jpg?8343841508649351979"
    },

]

export default function RecentOrder() {
    return (
        <View>
            <View style={styles.blogHead}>
                <Text style={styles.blogHeadingText}>Amrutam Blog</Text>
            </View>
            {blogs()}
        </View>
    );

    function blogs() {
        const renderItem = ({ item }) => (
            <TouchableOpacity style={styles.blogCard}>
                <View style={styles.blogCardDetails}>
                    <Text style={styles.blogCardHeadingText}>{item.name}</Text>
                    <TouchableOpacity style={styles.readMoreButton}>
                        <Text style={styles.blogCardReadMoreText}>Read More</Text>
                    </TouchableOpacity>
                    <Text style={styles.blogCardDateText}>{item.date}</Text>
                </View>
                <Image source={{ uri: item.image }} style={styles.blogCardImage} />
            </TouchableOpacity>
        );
        return (
            <FlatList
                data={blogPosts}
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
    blogHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    blogHeadingText: {
        color: '#036943',
        fontSize: 16,
        fontFamily: 'Roboto-Bold'
    },
    blogCard: {
        flex: 1,
        paddingVertical: 10,
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
        margin: 5,
        marginRight: 20,
        // width: '40%'
    },
    blogCardDetails: {
        marginLeft: 30,
        width: 100,
    },
    blogCardHeadingText: {
        color: '#000',
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'left',
        marginLeft: -15,
        width: 120,
        height: 70,
        fontFamily: 'Roboto-Regular'
    },
    blogCardReadMoreText: {
        color: '#fff',
        fontSize: 12,
        alignSelf: 'center',
        // width: 120,
        fontFamily: 'Roboto-Light',
    },
    blogCardDateText: {
        color: '#036943',
        fontSize: 12,
        alignSelf: 'center',
        textAlign: 'left',
        marginLeft: -12,
        marginTop: 5,
        width: 120,
        fontFamily: 'Roboto-Light'
    },
    blogCardImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    readMoreButton: {
        // color: '#fff',
        backgroundColor: "#036943",
        padding: 5,
        borderRadius: 5,
        marginLeft: -20,
        width: 90
    },
});