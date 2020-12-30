/**
 * Country Detail Screen
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    SafeAreaView,
    TextInput,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import COLOR_CONST from '../../theme/ColorConstants';
import styles from './CountryInformationStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';
import Scale, { verticalScale } from '../../utils/Scale';

class CountryInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            countryData: null,
            weatherData: null,
            showData: false,
        }
    }

    onPressCapitalWeather = async () => {
        const { name, capital, population, latlng, flag } = this.props.route.params.countryDetail;
        try {
            let response = await fetch(
                `http://api.weatherstack.com/current?access_key=749da482182e618c2ef386937c141034&query=${capital}`
            );

            let json = await response.json();
            this.setState({ weatherData: json.current }, () => {
                this.setState({ showData: true });
            })
            console.log('@@@ Weather JSON ============', json);
        } catch (error) {
            console.log('@@@ Error ============', error);
        }
    }

    renderCountryDetail = () => {
        const { name, capital, population, latlng, flag } = this.props.route.params.countryDetail;
        return (
            <View style={{ marginTop: verticalScale(20), alignItems: 'center' }}>
                <Animatable.View useNativeDriver animation="fadeInUpBig" duraton="1500" style={styles.flag}>
                    <SvgUri
                        width="100%"
                        height="100%"
                        uri={flag}
                    />
                </Animatable.View>
                <Animatable.View useNativeDriver animation="fadeInDown" duraton="1500" style={{ alignSelf: 'center', marginTop: verticalScale(10) }}>
                    <Text style={styles.fieldValue}>Name: {name}</Text>
                    <Text style={styles.fieldValue}>Capital: {capital}</Text>
                    <Text style={styles.fieldValue}>Population: {population}</Text>
                    <Text style={styles.fieldValue}>Lating: {latlng}</Text>
                </Animatable.View>
                <Animatable.View useNativeDriver animation="tada" duraton="1500" style={{ alignSelf: 'center', marginTop: verticalScale(10) }}>
                    <TouchableOpacity onPress={() => this.onPressCapitalWeather()} style={[styles.submitButton]}>
                        <Text style={[styles.submitText]}>Capital Weather</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        )
    }

    renderWeatherData = () => {
        const { wind_speed, temperature, precip, weather_icons } = this.state.weatherData;
        return (
            <Animatable.View useNativeDriver animation="zoomInLeft" duraton="1500" style={styles.weatherData}>
                <View>
                    <Text style={[styles.fieldValue, { marginLeft: Scale(25) }]}>Temperature: {temperature}</Text>
                    <Text style={[styles.fieldValue, { marginLeft: Scale(25) }]}>PRECIP: {precip}</Text>
                    <Text style={[styles.fieldValue, { marginLeft: Scale(25) }]}>Wind speed: {wind_speed}</Text>
                </View>
                <Image source={{ uri: weather_icons[0] }} style={styles.imageIcon} />
            </Animatable.View>
        )
    }

    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: COLOR_CONST.detailScreenBackground }]}>
                <KeyboardAwareScrollView>
                    <View style={styles.container}>
                        <Animatable.View useNativeDriver animation="swing" delay={300} style={styles.header}>
                            {this.renderCountryDetail()}
                            {this.state.showData && this.renderWeatherData()}
                        </Animatable.View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
};

export default CountryInformation;

