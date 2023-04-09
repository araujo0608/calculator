import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#17181A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerButtons:{
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});

export default styles;