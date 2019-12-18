import { StyleSheet } from "react-native";
import { colors } from ".";


export default StyleSheet.create({
    flex_1: {
        flex: 1
    },
    flexRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexRowStart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    flexRowEnd: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    flexRowreverseCenter: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputDefault: {
        borderColor: "grey", 
        borderWidth: 1, 
        padding: 15, 
        marginVertical: 5,
        borderBottomWidth: 0
    },
    noBorder: {
        borderWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0
    },
    mr10: {
        marginRight: 10
    },
    mt10: {
        marginTop: 10
    },
    mb30: {
        marginBottom: 30
    },

    inputStyle: {
        textAlign: 'right',
        paddingHorizontal: 10,
        // paddingRight: 20,
        fontSize: 16
    },
    inputContainerStyle: {
        borderWidth: 0.5,
        borderColor: '#b2b2b2',
        borderRadius: 5,
        height: 42,
        overflow: 'hidden'
    },
    textCenter: {
        textAlign: 'center'
    },
    tagWrap: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: colors.Orange,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 50,
        margin: 2
    },
    textTag: {
        color: 'white',
        
    }
})

