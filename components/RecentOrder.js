import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const orders = [
    {
        id: 1,
        name: "Kuntal Care Capsule - Herbal Remedy for Hair Care",
        price: "1,499",
        oldPrice: "1,650",
        image: "https://pharmaceutical-journal.com/wp-content/uploads/2021/01/herbal-medicines-ss-18-scaled.jpg"
    },
    {
        id: 2,
        name: "Kuntal Care Spray",
        price: "1,199",
        oldPrice: "1,550",
        image: "https://static.toiimg.com/photo/75474685.cms"
    },
    {
        id: 3,
        name: "Immunity Booster",
        price: "499",
        oldPrice: "950",
        image: "https://www.artennua.com/wp-content/uploads/2020/04/post-626x313.jpg"
    },

]

export default function RecentOrder() {
    return (
        <View>
            <View style={styles.orderHead}>
                <Text style={styles.recentOrdersHeadingText}>Recent Orders</Text>
            </View>
            {recentOrders()}
        </View>
    );

    function recentOrders() {
        const renderItem = ({ item }) => (
            <TouchableOpacity style={styles.orderCard}>
                <Image source={{ uri: item.image }} style={styles.orderCardImage} />
                <View style={styles.orderCardDetails}>
                    <Text style={styles.orderCardHeadingText}>{item.name}</Text>
                    <Text style={styles.orderCardPriceText}>₹ {item.price}  <Text style={styles.orderCardOldPriceText}>₹ {item.oldPrice}</Text> </Text>
                    <View style={{ flexDirection: 'row', marginLeft: -22, }}>
                        <MaterialCommunityIcons name="redo-variant" size={24} color="#036943" />
                        <Text style={styles.orderCardReorderText}>Reorder</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
        return (
            <FlatList
                data={orders}
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
    orderHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    recentOrdersHeadingText: {
        color: '#036943',
        fontSize: 16,
        fontFamily: 'Roboto-Bold'
    },
    orderCard: {
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
        marginHorizontal: 5,
        marginTop: 15,
        marginBottom: 30,
        marginRight: 20,
    },
    orderCardDetails: {
        marginLeft: 30,
        width: 100,
    },
    orderCardHeadingText: {
        color: '#000',
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'left',
        marginLeft: -15,
        width: 120,
        height: 70,
        fontFamily: 'Roboto-Regular'
    },
    orderCardReorderText: {
        color: '#036943',
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'left',
        width: 120,
        fontFamily: 'Roboto-Bold',
    },
    orderCardPriceText: {
        color: '#036943',
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'left',
        marginLeft: -15,
        width: 120,
        fontFamily: 'Roboto-Bold'
    },
    orderCardOldPriceText: {
        color: '#000',
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'left',
        marginLeft: -15,
        width: 120,
        fontFamily: 'Roboto-Light',
        textDecorationLine: 'line-through'
    },
    orderCardImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    }
});