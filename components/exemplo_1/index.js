import { View, Text } from 'react-native'; 

import styles from './styles';

export default function Exemplo1 ({mensagem}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 1</Text>
            <Text style={styles.titulo}>Mensagem: {titulo}</Text>/
        </View>
    );
}