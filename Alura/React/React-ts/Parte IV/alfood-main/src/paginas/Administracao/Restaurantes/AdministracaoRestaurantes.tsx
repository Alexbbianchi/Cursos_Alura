import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import http from "../../../http";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const AdministracaoRestaurantes = () => {

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

    useEffect(() => {
        http.get('restaurantes/')
            .then(resposta => setRestaurantes(resposta.data))
    }, []);

    const excluir = (id: number) => {
        http.delete(`restaurantes/${id}/`)
            .then(() => {
                const listaRestaurante = restaurantes.filter(res => res.id !== id);
                setRestaurantes(listaRestaurante);
            })
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: "80%" }}>
                            Nome
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurante => (
                        <TableRow key={restaurante.id}>
                            <TableCell>
                                {restaurante.nome}
                            </TableCell>
                            <TableCell>
                                <Link to={`/admin/restaurantes/${restaurante.id}`}><EditIcon color="secondary" /></Link>
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => excluir(restaurante.id)}>
                                    <DeleteIcon color="error"  />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoRestaurantes;