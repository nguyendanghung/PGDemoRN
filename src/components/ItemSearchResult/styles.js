import {StyleSheet} from 'react-native';
import { colors } from '../../assets/styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        shadowColor: colors.Orange,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 10,
        marginVertical: 10,
        paddingBottom: 5
    },
    rowContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    avatarWrap: {
        borderRadius: 40,
        width: 80,
        height: 80,
        overflow: 'hidden'
    },
    content: {
        flex: 1,
        paddingLeft: 15,
        paddingVertical: 10
    },
    
    mainContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    title: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold'
    },
    rowGraduted: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        paddingVertical: 10
    },
    rowTag: {
        borderTopColor: colors.Darkgray,
        borderTopWidth: 0.5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 5
    },
    boxContentLeft: {
        width: 70,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tagWrap: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: colors.Orange,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 50,
        margin: 3
    },
    textTag: {
        color: 'white',
        
    }
    
})

export default styles