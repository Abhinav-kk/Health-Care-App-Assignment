import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Home from "../screens/Home";
import Bulletin from "../screens/Bulletin";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 60,
                    marginHorizontal: 10,
                    elevation: 0,
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
                    paddingBottom: 10

                },
                tabBarActiveTintColor: '#033925',
                headerShown: false
            }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Ionicons name="sunny-outline" size={24} color={focused ? "#033925" : 'grey'} style={{ alignSelf: 'center' }} />
                    </View>
                )
            }} />
            <Tab.Screen name="Store" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <MaterialCommunityIcons name="store-outline" size={24} color={focused ? "#033925" : 'grey'} />
                    </View>
                )
            }} />
            <Tab.Screen name="Orders" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <MaterialIcons name="list-alt" size={24} color={focused ? "#033925" : 'grey'} />
                    </View>
                )
            }} />
            <Tab.Screen name="Consult" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Ionicons name="medical-outline" size={24} color={focused ? "#033925" : 'grey'} />
                    </View>
                )
            }} />
            <Tab.Screen name="Bulletin" component={Bulletin} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Ionicons name="md-flower-outline" size={24} color={focused ? "#033925" : 'grey'} />
                    </View>
                )
            }} />
        </Tab.Navigator >
    );
}

export default Tabs;