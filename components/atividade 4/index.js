import {View, Text, TextInput, Pressable} from 'react-native'
import { useState } from 'react'

import styles from './styles'

export default function Atividade4 ( ){

    const [atualizatexto, setatualizatxt] = useState  ('Inserir nome e')

    const[txtDigitado, setTxtDigitado] = useState ('Nome');

    const [txt2, setTxt2] = useState ('');

    const[txtTela, setTxtTela2] = useState ('Sobrenome');

    function susbstituir (){
        
        setatualizatxt(txtDigitado);
        setatualizatxt ()
        
    }

    function HandleExibeTexto (){
        setTxtTela2(txt2);
        setTxt2('');
        setTxtDigitado(txt2);
        setTxt2 ('');
    }


    function atualizaTextoHandle (txt){

        setTxtDigitado(txt);
    }
    
    return(
        <View style={styles.container}>
     <Text style={styles.titulo}> Atividade 4</Text>

     <Text style={styles.texto}>{atualizatexto}</Text>

     <TextInput style={styles.input}
//onChangeText={(valor) => atualizaTextoHandle (valor)}
/>

     <Text style={styles.texto}>{txtDigitado}</Text>

<TextInput style={styles.input}
//onChangeText={(valor) => atualizaTextoHandle (valor)}
/>
<View/>

<Text style={styles.texto}>{txtTela}</Text>

<TextInput
 style={styles.input}
onChangeText={(vlr) => setTxt2 (vlr)}
value={txt2}
/>

<Pressable 
style= {({ pressed}) => pressed ? [styles.botao, styles.botaopress] : styles.botao}
onPress ={ () => HandleExibeTexto()}
onPress = { () => ()}
>
    <Text style={styles.txtBotao}> Exibir Texto</Text>
</Pressable>
     </View>
    )
}