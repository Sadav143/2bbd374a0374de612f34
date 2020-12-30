/**
 * Home Screen
 */
import React , { Component } from 'react';
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
import styles from './HomePageStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            countryData: null,
        }
    }

    onPressSubmitButton = async() => {
        try {
            let response = await fetch(
              `https://restcountries.eu/rest/v2/name/${this.state.country}`
            );
            let json = await response.json();
            this.setState({ countryData: json }, () => {
                if(json.status === 404) {
                    alert(json.message);
                    return;
                }

                this.props.navigation.navigate('CountryListPage', { countryList: this.state.countryData })
            })
            console.log('@@@ JSON ============', json);
          } catch (error) {
            console.log('@@@ Error ============', error);
          }
    }
    
    renderInputForm = () => {
        return (
            <View style={styles.inputFormHeader}>
                <Animatable.View useNativeDriver animation="slideInLeft" duraton="1500">
                <TextInput {...this.props}
                    style={styles.inputStyle}
                    placeholder={'Enter Country'}
                    value={this.state.country}
                    onChangeText={(value) => this.setState({ country: value })}
                    autoCapitalize={false}
                />
                </Animatable.View>
                <Animatable.View useNativeDriver animation="fadeInUpBig" duraton="1500">
                <TouchableOpacity disabled={this.state.country.trim().length === 0} onPress={() => this.onPressSubmitButton()} style={[styles.submitButton, { backgroundColor: this.state.country.trim().length === 0 ? 'grey' : 'blue'}]}>
                    <Text style={[styles.submitText, { color: this.state.country.trim().length === 0 ? '#000000' : '#ffffff'}]}>SUBMIT</Text>
                </TouchableOpacity>
                </Animatable.View>
            </View>
        )
    }
    
    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: COLOR_CONST.homebackground }]}>
                    <View style={styles.container}>
                        {this.renderInputForm()}
                    </View>
            </SafeAreaView>
        );
    }
};

export default HomePage;

