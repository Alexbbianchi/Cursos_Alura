import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Item from './item/Item';

const services = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Não de banho no seu gato, mas se precisar nós damos"
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Teste testiando"
    },
    {
        id: 3,
        nome: "Vacina Antibixera",
        preco: 89.9,
        descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano"
    }
];

export default function Services() {
    return (
        <>
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
