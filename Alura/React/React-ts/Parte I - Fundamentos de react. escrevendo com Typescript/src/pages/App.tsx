import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Cronometro from "../components/Cronometro";
import style from "./app.module.scss";
import { ITarefa } from "../types/tarefa";

function App() {

    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [selecionado, setSelecionado] = useState<ITarefa>();

    function selecionaTarefa(tarefaSeleciodada: ITarefa) {
        setSelecionado(tarefaSeleciodada);
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
            ...tarefa,
            selecionado: tarefa.id === tarefaSeleciodada.id
        })));
    }

    function finalizaTarefa() {
        if (selecionado) {
            setSelecionado(undefined);
            setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
                if (tarefa.id === selecionado.id) {
                    return {
                        ...tarefa,
                        completado: true
                    }
                }
                return tarefa;
            }));
        }
    }
    return (
        <div className={style.AppStyle}>
            <Form setTarefas={setTarefas} />
            <List
                tarefas={tarefas}
                selecionaTarefa={selecionaTarefa}
            />
            <Cronometro selecionado={selecionado} finalizaTarefa={finalizaTarefa} />
        </div>
    );
}

export default App;
