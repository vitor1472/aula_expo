import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import Exemplo1 from './components/exemplo_1'; 
//import Atividade1 from './components/atividade_1';
//import Exemplo3 from './components/exemplo 3';
//import Exemplo_4 from './components/Exemplo_4'
import Atividade4 from './components/atividade 4';

export default function App() {
  return (
    <View style={styles.container}>
     <Atividade4/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 18
  },
});
