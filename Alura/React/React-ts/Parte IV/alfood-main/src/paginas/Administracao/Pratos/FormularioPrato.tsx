import {
    TextField,
    Typography,
    Box,
    FormControl,
    Select,
    InputLabel,
    MenuItem
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IPrato from "../../../interfaces/IPrato";
import ITag from "../../../interfaces/ITag";
import http from "../../../http";
import IRestaurante from "../../../interfaces/IRestaurante";
import SaveAction from "../../../componentes/SaveAction";

const FormularioPrato = () => {

    const navigate = useNavigate();

    const [nomePrato, setNomePrato] = useState('');
    const [descricaoPrato, setDescricaoPrato] = useState('');

    const [tag, setTag] = useState('');
    const [restaurante, setRestaurante] = useState('');

    const [imagem, setImagem] = useState<File | null>(null);

    const [tags, setTags] = useState<ITag[]>([]);
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

    const param = useParams();

    useEffect(() => {
        http.get<{ tags: ITag[] }>('tags/').then(resposta => setTags(resposta.data.tags));
        http.get<IRestaurante[]>('restaurantes/').then(resposta => setRestaurantes(resposta.data))
    }, [])

    useEffect(() => {
        if (param.id) {
            http.get<IPrato>(`pratos/${param.id}/`)
                .then(resposta => {
                    setNomePrato(resposta.data.nome);
                    setDescricaoPrato(resposta.data.descricao);
                    setTag(resposta.data.tag);
                    setRestaurante(resposta.data.restaurante.toString());
                });
        }
    }, [param]);

    const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formDate = new FormData();

        formDate.append("nome", nomePrato);
        formDate.append("descricao", descricaoPrato);
        formDate.append("tag", tag);
        formDate.append("restaurante", restaurante);

        if (imagem) {
            formDate.append("imagem", imagem);
        }

        return param.id ? update(formDate) : create(formDate);
    }

    const create = (formDate: FormData) => {
        http.request({
            url: 'pratos/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formDate
        }).then(() => {
            navigate('/admin/pratos');
            alert("Prato cadastrado com sucesso");
        }
        ).catch(error => {
            alert(`Ocorreu um erro ao criar restaurante. ${error}`);
        });
    }

    const update = (formDate: FormData) => {
        http.request({
            url: `pratos/${param.id}/`,
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formDate
        }).then(() => {
            navigate('/admin/pratos');
            alert("Prato atualizado com sucesso");
        }).catch(error => {
            alert(`Ocorreu um erro ao atualizar restaurante. ${error}`);
        })
    }

    const selecionarArquivo = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            setImagem(event.target.files[0]);
            return;
        }

        setImagem(null);
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
            <Typography component="h1" variant="h6">Formulário de pratos</Typography>
            <Box component="form" sx={{ width: "100%" }} onSubmit={onSubmitForm}>
                <TextField
                    value={nomePrato}
                    onChange={event => setNomePrato(event.target.value)}
                    label="Nome do Prato"
                    variant="standard"
                    margin="dense"
                    fullWidth
                    required
                />
                <TextField
                    multiline
                    value={descricaoPrato}
                    onChange={event => setDescricaoPrato(event.target.value)}
                    label="Descricao do Prato"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />

                <FormControl variant="standard" margin="dense" fullWidth>
                    <InputLabel id="select-tag">Tag</InputLabel>
                    <Select
                        labelId="select-tag"
                        id="select-tag"
                        value={tag}
                        onChange={evento => setTag(evento.target.value)}
                        label="Ordenação"
                        required
                    >
                        {tags.map(tag => (
                            <MenuItem key={tag.id} value={tag.value}>{tag.value}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl variant="standard" margin="dense" fullWidth>
                    <InputLabel id="select-restaurante">Restaurantes</InputLabel>
                    <Select
                        labelId="select-restaurante"
                        id="select-restaurante"
                        value={restaurante}
                        onChange={evento => setRestaurante(evento.target.value)}
                        label="Ordenação"
                        required
                    >
                        {restaurantes.map(restaurante => (
                            <MenuItem key={restaurante.id} value={restaurante.id}>{restaurante.nome}</MenuItem>
                        ))}
                    </Select>

                </FormControl>

                <TextField
                    onChange={selecionarArquivo}
                    type="file"
                    margin="dense"
                    fullWidth
                />

                <SaveAction callback={() => navigate('/admin/pratos')} />
            </Box>
        </Box>

    );
}

export default FormularioPrato;