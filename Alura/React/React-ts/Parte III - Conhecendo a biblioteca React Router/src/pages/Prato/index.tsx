import styles from './Prato.module.scss';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

export default function Prato() {
    // const { state } = useLocation();
    // const { prato } = state as { prato: typeof cardapio[0] };
    const { id } = useParams();
    const navigate = useNavigate();

    const prato = cardapio.find(e => e.id === Number(id));

    if (!prato) return <NotFound />

    return (
        <PaginaPadrao>
            <button 
                className={styles.voltar}
                onClick={() => navigate(-1)}
            >
                {'< Voltar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.title}>
                    {prato.title}
                </h1>
                <div className={styles.image}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo__descricao}>
                    <p className={prato.description}>
                        {prato.description}
                    </p>
                </div>
                <TagsPrato {...prato} />
            </section>
        </ PaginaPadrao>
    );
}