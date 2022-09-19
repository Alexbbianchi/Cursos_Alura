import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import IRestaurante from '../../interfaces/IRestaurante';
import { IPaginacao } from '../../interfaces/IPaginacao';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import BackIcon from '@mui/icons-material/ArrowBackIos';
import NextIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import { IParametrosBusca } from "../../interfaces/IFilter";

const ListaRestaurantes = () => {

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
    const [proximaPagina, setProximaPagina] = useState('');
    const [paginaAnterior, setPaginaAnterior] = useState('')
    const [filter, setFilter] = useState('')
    const [order, setOrder] = useState('')

    const carregarDados = (url: string, opcoes: AxiosRequestConfig = {}) => {
        axios.get<IPaginacao<IRestaurante>>(url, opcoes)
            .then(resposta => {
                setRestaurantes(resposta.data.results)
                setProximaPagina(resposta.data.next)
                setPaginaAnterior(resposta.data.previous)
            })
            .catch(erro => {
                console.log(erro)
            });
    }

    const buscar = () => {
        const opcoes = { params: {} as IParametrosBusca };

        if (filter) opcoes.params.search = filter;
        if (order) opcoes.params.ordering = order;

        carregarDados('http://localhost:8000/api/v1/restaurantes/', opcoes);
    }

    useEffect(() => {
        carregarDados('http://localhost:8000/api/v1/restaurantes/');
    }, []);

    return (
        <section className={style.ListaRestaurantes}>
            <h1>Os restaurantes mais <em>bacanas</em>!</h1>

            <Stack direction="row" spacing={5}>
                <TextField
                    value={filter}
                    onChange={event => setFilter(event.target.value)}
                    label="Buscar por Restaurante"
                    variant="standard"
                    // onKeyDown={(event) => event.key === "Enter" ? buscar() : null}
                />

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="select-ordenacao">Ordenação</InputLabel>
                    <Select
                        labelId="select-ordenacao"
                        id="select-ordenacao"
                        value={order}
                        onChange={evento => setOrder(evento.target.value)}
                        label="Ordenação"
                    >
                        <MenuItem value="">Padrão</MenuItem>
                        <MenuItem value="id">Por ID</MenuItem>
                        <MenuItem value="nome">Por nome</MenuItem>
                    </Select>
                </FormControl>


                <Button
                    variant="outlined"
                    startIcon={<SearchIcon />}
                    onClick={() => buscar()}
                >
                    Buscar
                </Button>
            </Stack>

            {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}

            <Stack direction="row" spacing={2} className={style.Paginacao}>
                <Button
                    variant="outlined"
                    onClick={() => carregarDados(paginaAnterior)}
                    disabled={!paginaAnterior}
                    startIcon={<BackIcon />}
                >
                    Página Anterior
                </Button>

                <Button
                    variant="outlined"
                    onClick={() => carregarDados(proximaPagina)}
                    disabled={!proximaPagina}
                    endIcon={<NextIcon />}
                >
                    Próxima página
                </Button>
            </Stack>

        </section>
    )
}

export default ListaRestaurantes