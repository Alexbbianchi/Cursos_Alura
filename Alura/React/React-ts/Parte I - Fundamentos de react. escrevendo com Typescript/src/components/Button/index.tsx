import React from "react";
import style from "./button.module.scss";

interface Props {
    children?: JSX.Element | JSX.Element[] | string | string[];
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}

export default function Button({ type, onClick, children }: Props) {

    return (
        <button onClick={onClick} type={type} className={style.botao}>{children}</button>
    );
}