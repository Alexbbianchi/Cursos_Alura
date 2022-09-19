import React from 'react';
import { View, Text } from 'react-native';
import Button from '../button/Button.js';

import cartStatus from './cart-status-style.js';

export default function CartStatus({ total }) {

    return (
        <View style={cartStatus.conteudo}>
            <View style={cartStatus.total}>
                <Text style={cartStatus.descricao}>Total do carrinho:</Text>
                <Text style={cartStatus.valor}>
                    {
                        Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(total)
                    }
                </Text>
            </View>
            <View style={cartStatus.botao}>
                <Button valor='Concluir Pedido' invertido />
            </View>
        </View>
    );
}