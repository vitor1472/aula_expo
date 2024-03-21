import { StyleSheet } from 'react-native';  

const styles = StyleSheet.create({
    container: {
        //borderWidth: 2, 
        padding: 18, 
        backgroundColor: '#e3f2fd', 
        flex: 1, 
        alignItems: 'center',
        borderRadius:20,
    }, 
    titulo:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    imagem: {
       width: '80%',
       // resizeMode: 'stretch',
        resizeMode: 'center',
    }
   
});

export default styles;