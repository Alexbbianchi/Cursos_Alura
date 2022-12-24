import { Button } from "@mui/material";
import { Professor } from "../@types/professor";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./Lista.style";

interface ListProps {
    professores: Professor[];
}

const List = ({ professores }: ListProps) => {
    return (
        <div>
            {professores.length > 0 ? (
                <ListaStyled>
                    {professores.map(professor => (
                        <ItemLista key={professor.id}>
                            <Foto src={professor.foto}></Foto>
                            <Informacoes>
                                <Nome>{professor.nome}</Nome>
                                <Valor>{professor.valor_hora.toLocaleString('pt-BR', { minimumIntegerDigits: 2, style: 'currency', currency: 'BRL' })} por hora</Valor>
                                <Descricao>{professor.descricao}</Descricao>
                                <Button sx={{ width: '70%'}}>Marcar Aula com {professor.nome}</Button>
                            </Informacoes>
                        </ItemLista>
                    ))}
                </ListaStyled>
            ) : (
                <ListaVazia>Nenhum item encontrado</ListaVazia>
            )}
        </div>
    );
}

export default List;