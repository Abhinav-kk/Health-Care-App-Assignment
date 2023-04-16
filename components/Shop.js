import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const categories = [
    {
        id: 1,
        name: "HAIR",
        icon: "face-man-shimmer-outline"
    },
    {
        id: 2,
        name: "SKIN",
        icon: "face-man"
    },
    {
        id: 3,
        name: "WOMEN",
        icon: "gender-female"
    },
    {
        id: 4,
        name: "SEXUAL",
        icon: "gender-male-female"
    },
    {
        id: 5,
        name: "DIGESTION",
        icon: "stomach"
    },
    {
        id: 6,
        name: "PILES",
        icon: "bacteria"
    },
]

export default function Shop() {
    return (
        <View>
            <View style={styles.shopHead}>
                <Text style={styles.shopHeadingText}>Shop for Health & Beauty</Text>
                <MaterialIcons name="keyboard-arrow-right" size={26} color="#036943" />
            </View>
            {shopCategory()}
        </View>
    );

    function shopCategory() {
        const renderItem = ({ item }) => (
            <TouchableOpacity style={styles.shopCategoryButton}>
                <View style={styles.shopCategoryIcon}>
                    <MaterialCommunityIcons name={item.icon} size={40} color="black" />
                </View>
                <Text style={styles.shopCategoryText}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
        return (
            <FlatList
                data={categories}
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
    shopHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    shopHeadingText: {
        color: '#036943',
        fontSize: 16,
        fontFamily: 'Roboto-Bold'
    },
    shopCategoryButton: {
        marginVertical: 15,
        marginRight: 20,
    },
    shopCategoryIcon: {
        backgroundColor: '#fff7e2',
        padding: 10,
        borderRadius: 10,
    },
    shopCategoryText: {
        textAlign: 'center',
        fontSize: 11,
        fontFamily: 'Roboto-Light'
    }
});