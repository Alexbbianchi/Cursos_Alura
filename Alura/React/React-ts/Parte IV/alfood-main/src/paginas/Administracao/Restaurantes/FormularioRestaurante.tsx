import {
    TextField,
    Typography,
    Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";
import http from "../../../http";
import SaveAction from '../../../componentes/SaveAction'

const FormularioRestaurante = () => {

    const navigate = useNavigate();
    
    const [nomeRestaurante, setNomeRestaurante] = useState('');
    const param = useParams();

    useEffect(() => {
        if (param.id) {
            http.get<IRestaurante>(`restaurantes/${param.id}/`)
                .then(resposta => setNomeRestaurante(resposta.data.nome));
        }
    }, [param]);

    const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        return param.id ? update() : create();
    }

    const create = () => {
        http.post('restaurantes/', {
            nome: nomeRestaurante
        }).then(() => {
            navigate('/admin/restaurantes');
            alert("Restaurante cadastrado com sucesso");
        }).catch(error => {
            alert(`Ocorreu um erro ao criar restaurante. ${error}`);
        });
    }

    const update = () => {
        http.put(`restaurantes/${param.id}/`, {
            nome: nomeRestaurante
        }).then(() => {
            navigate('/admin/restaurantes');
            alert("Restaurante atualizado com sucesso");
        }).catch(error => {
            alert(`Ocorreu um erro ao atualizar restaurante. ${error}`);
        })
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
            <Typography component="h1" variant="h6">Formulário de restaurantes</Typography>
            <Box component="form" sx={{ width: "100%" }} onSubmit={onSubmitForm}>
                <TextField
                    value={nomeRestaurante}
                    onChange={event => setNomeRestaurante(event.target.value)}
                    label="Nome do Restaurante"
                    variant="standard"
                    fullWidth
                    required
                />

                <SaveAction callback={() => navigate('/admin/restaurantes')} />
            </Box>
        </Box>

    );
}

export default FormularioRestaurante;