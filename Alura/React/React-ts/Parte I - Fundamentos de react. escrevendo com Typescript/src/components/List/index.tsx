import Item from "./Item";
import style from "./list.module.scss";
import { ITarefa } from "../../types/tarefa";

interface Props {
    tarefas: ITarefa[];
    selecionaTarefa: (tarefaSeleciodada: ITarefa) => void;
}

export default function List({ tarefas, selecionaTarefa }: Props) {


    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
}