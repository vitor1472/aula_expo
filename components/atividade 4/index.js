import {View, Text, TextInput, Pressable} from 'react-native'
import { useState } from 'react'

import styles from './styles'

export default function Atividade4 ( ){

   //const [atualizatexto, setatualizatxt] = useState  ('Insira seu nome!');

    const[txtTela1, setTxtTela1] = useState ('Insira seu nome!');
    
    const [txt2, setTxt2] = useState ('');

    const [txt3, setTxt3] = useState ('');

    const[txtTela2, setTxtTela2] = useState ('');


    function HandleExibeTexto (){
        setTxtTela1(txt2);
        setTxt2('');
        setTxtTela2(txt3);
        setTxt3 ('');


        //setatualizatxt(txtDigitado)+ setatualizatxt(txtTela);
    }


    function atualizaTextoHandle (txt){

        setTxtDigitado(txt);
    }
    
    return(
        <View style={styles.container}>
     <Text style={styles.titulo}> Atividade 4</Text>

    

     <Text style={styles.titulo}>{txtTela1} {txtTela2}</Text>

     
     <Text style={styles.texto1}>Nome</Text>
     <TextInput
 style={styles.input}
onChangeText={(vlr) => setTxt2 (vlr)}
value={txt2}
/>
<View/>

<Text style={styles.texto}>Sobrenome</Text>

<TextInput
 style={styles.input}
onChangeText={(vlr) => setTxt3 (vlr)}
value={txt3}
/>

<Pressable 
style= {({ pressed}) => pressed ? [styles.botao, styles.botaopress] : styles.botao}
onPress ={ () => HandleExibeTexto()}
>
    <Text style={styles.txtBotao}> Exibir Texto</Text>
</Pressable>
     </View>
    )
}