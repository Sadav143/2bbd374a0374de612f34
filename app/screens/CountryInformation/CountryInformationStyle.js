import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
const { height, width } = Dimensions.get('window');


export default StyleSheet.create({

    container: {
        flex: 1,
    },

    inputFormHeader: {
        flex: 1,
        alignItems: 'center',
        marginTop: verticalScale(20),
    },

    submitButton: {
        marginTop: verticalScale(50),
        width: scale(250),
        height: scale(50),
        borderRadius: scale(10),
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitText: {
        fontSize: scale(15),
        fontWeight: 'bold',
        textAlign: 'center',
    },

    formText: {
        fontSize: scale(25),
        fontWeight: 'bold',
    },

    fieldValue: {
        fontSize: scale(20),
        color: '#382626',
        fontWeight: 'bold',
        // marginLeft: scale(20),
        marginTop: verticalScale(10),
    },

    flag: {
        width: scale(300),
        height: scale(200),
        // paddingBottom: verticalScale(5),
    },

    weatherData: {
        marginTop: verticalScale(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: scale(-15),
    },

    imageIcon: {
        marginTop: verticalScale(30),
        width: scale(50),
        height: scale(50),
        marginRight: scale(40)
    }
});
