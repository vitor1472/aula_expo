import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        //flexDirection: 'row',
        backgroundColor: '#fafafa',
        width: '100%',
        borderRadius:20,
        alignItems:'center',
        padding:20
    },
    titulo:{
fontSize:30,
fontWeight:'bold',
    },
    botao:{
        width: '80%',
        padding:10,
        marginLeft:50,
        marginRight: 50,
        backgroundColor: '#000',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
    },
   

    txtBotao:{
    fontSize:25,      
    color:'#fafafa',   
         },
    containerLadoLado: {
        borderwidth: 3,
        width: '80%',
       // Height: 200,//
        margintop:20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    botaocontainer:{
        width: '15%',
        

    }
        

});

export default styles