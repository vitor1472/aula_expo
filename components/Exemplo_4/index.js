import { View,Text,TextInput,Pressable, TextInputBase} from 'react-native';
import styles from './styles';
import { useState } from 'react';

export default function Exemplo_4(){

    const[txtDigitado, setTxtDigitado] = useState ('Texto Digitado');

    const [txt2, setTxt2] = useState ('');

    const[txtTela, setTxtTela2] = useState ('');

    function atualizaTextoHandle (txt){

        setTxtDigitado(txt);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.texto}>{txtDigitado}</Text>

            <TextInput style={styles.input}
            onChangeText={(valor) => atualizaTextoHandle (valor)}
            />
            <View style={styles.linha}/>

            <Text style={styles.texto}>{txtTela}</Text>

            <TextInput
             style={styles.input}
            onChangeText={(vlr) => setTxt2 (vlr)}
            value={txt2}
            />

            <Pressable style={styles.botao}>
                <Text style={styles.txtBotao}> Exibir Texto</Text>
            </Pressable>
                
            
        </View>
    )
}