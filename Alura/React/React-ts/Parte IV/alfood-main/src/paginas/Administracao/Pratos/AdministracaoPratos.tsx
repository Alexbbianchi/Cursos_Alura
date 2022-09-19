import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import http from "../../../http";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IPrato from "../../../interfaces/IPrato";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const AdministracaoPratos = () => {

    const [pratos, setPratos] = useState<IPrato[]>([]);

    useEffect(() => {
        http.get('pratos/')
            .then(resposta => setPratos(resposta.data))
    }, []);

    const excluir = (id: number) => {
        http.delete(`pratos/${id}/`)
            .then(() => {
                const listaPrato = pratos.filter(res => res.id !== id);
                setPratos(listaPrato);
            })
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Tag
                        </TableCell>
                        <TableCell>
                            Imagem
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
                    {pratos.map(prato => (
                        <TableRow key={prato.id}>
                            <TableCell>
                                {prato.nome}
                            </TableCell>
                            <TableCell>
                                {prato.tag}
                            </TableCell>
                            <TableCell>
                                <a rel="noreferrer" href={prato.imagem} target="_blank">Ver imagem</a>
                            </TableCell>
                            <TableCell>
                                <Link to={`/admin/pratos/${prato.id}`}><EditIcon color="secondary" /></Link>
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => excluir(prato.id)}>
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

export default AdministracaoPratos;