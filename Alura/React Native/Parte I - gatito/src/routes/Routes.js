import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Services from '../view/services/Services';
import Cart from '../view/cart/Cart';

import { cores } from './../general-styles';

const Tab = createBottomTabNavigator();

export default function Routes() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: cores.roxo,
                    inactiveTintColor: cores.claro,
                    activeBackgroundColor: cores.roxo, 
                    inactiveBackgroundColor: cores.laranja, 
                    style: {
                        height: 70,
                    },
                    labelStyle: {
                        width: '100%',
                        flex: 1,
                        fontWeight: 'bold',
                        fontSize: 16,
                        lineHeight: 21,
                        marginTop: 3,
                        paddingTop: 21,
                        backgroundColor: cores.laranja
                    },
                    tabBarHideOnKeyboard: true
                }}
            >
                <Tab.Screen name="Serviços" component={Services} />
                <Tab.Screen name="Carrinho" component={Cart} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
