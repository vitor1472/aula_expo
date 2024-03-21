import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import logo from '../../assets/002-1-react-native.png';

import Ola from './ola';

export default function Atividade1 () {
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.imagem} />
            <Text style={styles.titulo}>
                Atividade 1
             </Text>
             <Ola>Jascinto</Ola>
             <Ola>Evaristo</Ola>
        </View>
        
    );
}