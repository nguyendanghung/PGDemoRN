import { StyleSheet } from 'react-native';
import { colors } from '../../assets/styles';


export default styles = StyleSheet.create({
    container: {
        padding: 10
    },
    textTop: {
        fontSize: 18,
        color: 'black',
        paddingVertical: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    title: {
        color: '#f6a11a',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15,
        textAlign: 'center'
    },
    listTutor: {
        textAlign: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    itemTutor: {
        paddingHorizontal: 10,
        borderRightWidth: 1,
        borderColor: '#676767',
        marginVertical: 5
    },
    textItemTutor: {
        fontSize: 16,
        color: '#676767',
    },
    
    textBtnClear: {
        fontSize: 18,
        color: '#676767'
    },
    btnClear: {
        width: 200
    },
    

    btnAround: {
        borderRadius: 25,
    },
    btnLarge: {
        height: 46
    },
    btnOrange: {
        backgroundColor: '#f6a11a'
    },

    mt50: {
        marginTop: 50
    }

})