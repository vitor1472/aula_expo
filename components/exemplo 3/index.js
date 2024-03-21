import { View, Text, TouchableOpacity} from "react-native";
import styles from './styles';

export default function Exemplo3 (){
function mensagem(){
    alert('Aula de React-Native');
}

return(
    <View style={styles.container}>
        <Text style={styles.titulo} >Exemplo 3</Text>
        <TouchableOpacity style={styles.botao} onPress={() => mensagem()}>
        <text style={styles.txtBotao}>Botão</text>
        </TouchableOpacity>
    </View>

);
}