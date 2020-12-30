/**
 * Root Stack Screen
 */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashPage from '../Splash/SplashPage';
import HomePage from '../Home/HomePage';
import CountryListPage from '../CountryList/CountryListPage';
import CountryInformation from '../CountryInformation/CountryInformation';


const RootStack = createStackNavigator();
const NewStack = createStackNavigator();

const RootStackScreen = (props) => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Splash',
                    headerTitleAlign: 'center',
                    headerTintColor: 'black',
                    headerStyle: { backgroundColor: COLOR_CONST.splashBackground, },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="SplashPage" component={SplashPage} />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Search Country',
                    headerTitleAlign: 'center',
                    headerTintColor: 'Black',
                    headerStyle: { backgroundColor: 'skyblue', },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="HomePage"
                component={HomePage}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Country List',
                    headerTitleAlign: 'center',
                    headerTintColor: 'black',
                    headerStyle: { backgroundColor: COLOR_CONST.lightBlack, },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="CountryListPage"
                component={CountryListPage}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Country Detail',
                    headerTitleAlign: 'center',
                    headerTintColor: 'black',
                    headerStyle: { backgroundColor: COLOR_CONST.lightGreen, },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="CountryInformation"
                component={CountryInformation}
            />
        </RootStack.Navigator>
    );
};

export default RootStackScreen;