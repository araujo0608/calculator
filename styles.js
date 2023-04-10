import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#17181A',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerGroups:{
        flex: 2,
        flexDirection: 'row',
    },

    groupNumbers:{
        flex: 1,
        width: '100%',
        //backgroundColor: 'green',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    containerAC:{
        //backgroundColor: 'red',
        marginTop: 30,
        width: '85%'
    },

    containerOneToNine:{
        //backgroundColor: 'red',
        width: '90%',
        marginTop: 1,
        marginLeft: 12,
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    containerZeroDot:{
        //backgroundColor: 'red',
        width: '90%',
        marginTop: -10,
        marginLeft: 12,
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    groupOperators:{
        marginTop: 35,
        //backgroundColor: 'blue',
        width: '26%',
    }
});

export default styles;