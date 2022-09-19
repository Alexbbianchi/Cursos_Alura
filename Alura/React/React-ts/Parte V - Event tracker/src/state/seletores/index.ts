import { selector } from "recoil";
import { filtroDeEventos } from '../atom';
import { listaDeEventosState } from './../atom';
import { getDateWithoutTime } from '../../util'
import { IEvento } from './../../interfaces/IEvento';

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(listaDeEventosState)

        const eventos = todosOsEventos.filter(evento => {
            if (!filtro.data) {
              return true
            }
        
            return getDateWithoutTime(filtro.data) === getDateWithoutTime(evento.inicio)
        });

        return eventos;
    }
});

export const eventosAsync = selector({
    key: "eventosAsync",
    get:async () => {
        const respostaHttp = await fetch('http://localhost:8080/eventos');
        const eventosJson: IEvento[] = await respostaHttp.json();

        return eventosJson.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }))

    }
})