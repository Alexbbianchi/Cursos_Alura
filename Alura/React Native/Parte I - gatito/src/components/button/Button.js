import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import funcButtonStyles from './button-styles';

export default function Button({pequeno = false, invertido = false, valor, acao, estilos}) {

    const buttonStyles = funcButtonStyles(pequeno, invertido);

    return (
        <TouchableOpacity 
            style={[buttonStyles.botao, estilos]}
            onPress={acao}>
            <Text style={buttonStyles.valor}>
                {valor}
            </Text>
        </TouchableOpacity>
    );
}