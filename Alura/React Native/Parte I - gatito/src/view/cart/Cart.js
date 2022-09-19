import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Item from './item/Item';
import CartStatus from '../../components/cart-status/CartStatus';

const services = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Não de banho no seu gato, mas se precisar nós damos",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Teste testiando",
        quantidade: 5
    },
    {
        id: 3,
        nome: "Vacina Antibixera",
        preco: 89.9,
        descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano",
        quantidade: 1
    }
];

export default function Cart() {
    const total = services.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0)
    return (
        <>
            <CartStatus total={total} />
            <FlatList 
                data={services} 
                removeClippedSubviews={false}
                renderItem={({item}) => <Item {...item} />}
                keyExtractor={({id}) => String(id)}
            />
        </>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
