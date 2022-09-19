import React from 'react';
import { TextInput } from 'react-native';

import campoInteiroStyles from './campo-inteiro-styles';

export default function CampoInteiro({valor, estilos, acao}) {
    
    const atualiza = (novoValor, acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        if (!verificaInteiro) return;

        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');
        acaoRetorno(removeZeroEsquerda);
    }
    const numeroText = String(valor);
    
    return (
        <TextInput 
            style={[campoInteiroStyles.campo, estilos]}
            keyboardType='number-pad' 
            selectTextOnFocus
            value={numeroText}
            onChangeText={(novoValor) => atualiza(novoValor, acao)}
        />
    );
}