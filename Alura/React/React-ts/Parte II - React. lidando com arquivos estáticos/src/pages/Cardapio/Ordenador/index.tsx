import styles from "./Ordenador.module.scss";
import opcao from "./opcao.json";
import { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface Props {
    ordenador: string;
    setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}
export default function Ordenador({ ordenador, setOrdenador }: Props) {

    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = ordenador && opcao.find(e => e.value === ordenador)?.nome;

    return (
        <button 
            className={classNames({
                [styles.ordenador]: true,
                [styles["ordenador--ativo"]]: ordenador !== "",
            })} 
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}
        >
            <span>{nomeOrdenador || "Ordenar Por"}</span>
            {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles["ordenador__options--ativo"]]: aberto
            })}>
                {opcao.map(opcao => (
                    <div className={styles.ordenador__option} key={opcao.value} onClick={() => setOrdenador(opcao.value)}>
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    );
}