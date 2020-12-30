import { StyleSheet } from 'react-native';
import scale  from '../../utils/Scale';
import COLOR_CONST from '../../theme/ColorConstants';

export default StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_CONST.splashBackground
    },

    testStyle: {
        fontSize: scale(20),
        fontWeight: 'bold',
    }
});
