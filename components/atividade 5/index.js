import { View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

import styles from './styles'

export default function Atividade5 () {

    const [isFocusN1, setIsFocusN1] = useState (false);
    const [isFocusN2,setIsFocusN2] = useState (false);
    const [isFocusTotal, setIsFocusTotal] = useState (false);
    const [n1, setN1] = useState (0);
    const [n2, setN2] = useState (0);
    const [total,setTotal] = useState ('');
    //const [zerar, setzerar] = useState (0)

    function soma () {
        setTotal (parseFloat(n1) + parseFloat(n2));
    }

    function sub () {
        setTotal (parseFloat(n1) - parseFloat(n2));
    }
    function multi (){
        setTotal (parseFloat(n1) * parseFloat(n2));
    }
    function div () {
        setTotal (parseFloat(n1) / parseFloat(n2));
    }
    function zerar () {
        setTotal ('');
    }
    

    return(

       <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo 5</Text>
        <Text style={styles.txtSaida}>Calculadora básica</Text>
        <Text style={styles.textLabel}>1° número</Text>
        <TextInput
        style={
            [
                styles.txtEntrada,
                isFocusN1 ?
                {
                    borderColor: '#C51162',
                    outline: 'none',
                }
                :
                {}

            ]
        }
        onFocus={() => setIsFocusN1(true)}
        onBlur={() => setIsFocusN1(false)}
        onChangeText={(num1) => setN1 (num1)}
        value={n1}

        />

<Text style={styles.txtSaida}> + </Text>

<Text style={styles.textLabel}>2° número</Text>

<TextInput
style={
    [
        styles.txtEntrada,
        isFocusN2 ?
        {
            borderColor:'#C51162',
            outline:'none',
        }
        :
        {}
    ]
}
onFocus={() =>setIsFocusN2(true)}
onBlur={() =>setIsFocusN2(false)}
onChangeText={(num2) => setN2 (num2)}
value={n2}
/>
<Text style={[styles.txtSaida, {margin: 0}]}> =  </Text>

<Text style={styles.textLabel}> Total </Text>

<TextInput

style={
    [
    styles.txtEntrada,
    isFocusTotal ?
    {
        borderColor: '#C51162',
        outline:'none',
    }
    :
    {}
]
}
onFocus={() => setIsFocusTotal(true)}
onBlur={() => setIsFocusTotal(false)}
editable={false}
value={total ? parseFloat(total).toFixed(2) : ''}
/>
<View style={styles.alinhaBotao}>
<Pressable
onPress={() => soma ()}
style={
({pressed}) => pressed ?
[styles.button, styles.buttonTouch]
:
styles.button

}
>
    <Text style={styles.textButton}> + </Text>

    
</Pressable>

<Pressable
onPress={() => sub ()}
style={
({pressed}) => pressed ?
[styles.button, styles.buttonTouch]
:
styles.button

}
>
    <Text style={styles.textButton}> - </Text>
    
</Pressable>

<Pressable
onPress={() => multi ()}
style={
({pressed}) => pressed ?
[styles.button, styles.buttonTouch]
:
styles.button

}
>
    <Text style={styles.textButton}> x </Text>
</Pressable>

<Pressable
onPress={() => div ()}
style={
({pressed}) => pressed ?
[styles.button, styles.buttonTouch]
:
styles.button

}
>
    <Text style={styles.textButton}> / </Text>

</Pressable>
</View>

<Pressable
onPress={() => zerar ()}
style={
({pressed}) => pressed ?
[styles.buttonzerar, styles.buttonTouch]
:
styles.buttonzerar

}
>
    <Text style={styles.textButton}> Zerar </Text>

</Pressable>



       </View>   
    );
}
