/**
 * Country List Screen
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    SafeAreaView,
    TextInput,
    FlatList,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import COLOR_CONST from '../../../app/theme/ColorConstants';
import styles from './CountryListPageStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';

class CountryListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryList: this.props.route.params.countryList
        }
    }

    onPressCountry = (item) => {
        this.props.navigation.navigate('CountryInformation', { countryDetail: item })
    }

    renderCountryCell = (item, index) => {
        return (
            <Animatable.View useNativeDriver animation="bounceInDown" duraton="1500">
                <TouchableOpacity onPress={() => this.onPressCountry(item)} style={styles.countryListCell}>
                    <View style={styles.leftView}>
                        <Text style={styles.fieldValue}>Name: {item.name}</Text>
                        <Text style={styles.fieldValue}>Capital: {item.capital}</Text>
                        <Text style={styles.fieldValue}>Population: {item.population}</Text>
                        <Text style={styles.fieldValue}>Lating: {item.latlng}</Text>
                    </View>
                    <SvgUri
                        width="15%"
                        height="35%"
                        uri={item.flag}
                    />
                </TouchableOpacity>
            </Animatable.View>
        )
    }

    renderCountryList = () => {
        return (
            <View style={styles.countryListContainer}>
                <FlatList
                    data={this.state.countryList}
                    renderItem={({ item, index }) => this.renderCountryCell(item, index)}
                    keyExtractor={(item) => item.id}
                    extraData={this.state}
                />
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: COLOR_CONST.listPageBackground }]}>
                <View style={styles.container}>
                    {this.renderCountryList()}
                </View>
            </SafeAreaView>
        );
    }
};

export default CountryListPage;

