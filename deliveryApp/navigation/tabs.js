import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import { Home, SearchScreen, Profile, Favorites } from '../screens';
import { COLORS, icons } from '../constants';



const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: { height: 55, justifyContent: "center", alignItems: "center", borderWidth: 0.1, borderColor: '#f6f6f6', borderTopWidth: 0, elevation: 0 }
            }}

        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width: 26,
                                height: 26,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width: 26,
                                height: 26,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.heart}
                            resizeMode="contain"
                            style={{
                                width: 26,
                                height: 26,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.person}
                            resizeMode="contain"
                            style={{
                                width: 26,
                                height: 26,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />


        </Tab.Navigator >
    )
}

export default Tabs;