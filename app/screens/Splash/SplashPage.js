/**
 * Splash Screen
 */
import React , { useEffect } from 'react';
import { 
    View,
    Text, 
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import COLOR_CONST from '../../theme/ColorConstants';
import styles from './SplashPageStyle';

const SplashPage = ({navigation}) => {
    useEffect(() => {
        setTimeout( async() => {
           navigation.replace('HomePage')
        }, 2000);
      }, []);
    

    return (
        <View style={styles.container}>
            <Animatable.View useNativeDriver animation="zoomInDown" duraton="1500">
                <Text style={styles.testStyle}>Country Information Project</Text>
            </Animatable.View>
        </View>
    );
};

export default SplashPage;

