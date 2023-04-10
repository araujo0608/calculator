import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    btn:{
        backgroundColor: '#303136',
        borderRadius: 16,
        width: 62,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 38,
        color: '#29A8FF',
        margin: 5
    },
    btnAc:{
        backgroundColor: '#616161',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        margin: 3
    },
    btnZero:{
        width: 160
    },
    btnEqual:{
        backgroundColor: '#1991FF',
        color: '#B2DAFF'
    },
    btnOperator:{
        backgroundColor: '#005DB2',
        color: '#24A5FF'
    },    
});

export default styles;