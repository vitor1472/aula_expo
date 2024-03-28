
import { View, Text, TouchableOpacity} from "react-native";
import styles from './styles';
import { useState } from "react";

export default function Exemplo3 (){



const [numero, setNumero] = useState (0);

function mensagem(){
    alert('Aula de React-Native');
}

function Incrementar() {
setNumero(numero + 1);
}

function Desincrementar(){
setNumero(numero -1 )
}

function Zerar() {
    setNumero (0)
}



return(
    
    <View style={styles.container}>
        <Text style={styles.titulo} >Atividade 3</Text>

        <View style={styles.containerLadoLado}>
        <TouchableOpacity style={[styles.botao, styles.botaocontainer]} onPress={() => Desincrementar()}>
        <Text style={styles.txtBotao}>-</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{numero}</Text>
        <TouchableOpacity style={[styles.botao, styles.botaocontainer]} onPress={() =>  Incrementar()}>
        <Text style={styles.txtBotao}>+</Text>
        
        </TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.botao, styles.botaocontainer]} onPress={() => Zerar()}>
            <Text style={styles.txtBotao}>Zerar</Text>
        </TouchableOpacity>
    </View>

);
}