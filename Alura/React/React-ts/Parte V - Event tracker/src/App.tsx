import style from './App.module.scss';
import Card from './components/Card';
import Formulario from './components/Formulario';
import Calendario from './components/Calendario';
import ListaDeEventos from './components/ListaDeEventos';
import { RecoilRoot } from 'recoil';
import { Suspense, useState } from 'react';
function App() {

    const [isForm, setIsForm] = useState<boolean>(true);

    return (
        <RecoilRoot>
            <Suspense fallback="Está carregando">
                <div className={style.App}>
                    <div className={style.Coluna}>
                        <input type="button" disabled={isForm} className={style.botao} value='Formulário' onClick={() => setIsForm(true)} />
                        <input type="button" disabled={!isForm} className={style.botao} value='Filtro' onClick={() => setIsForm(false)} />

                        <hr />

                        {isForm ? (
                            <Card>
                                <Formulario />
                            </Card>
                        ) : (
                            <Card>
                                <ListaDeEventos />
                            </Card>
                        )}

                    </div>
                    <div className={style.Coluna}>
                        <Calendario />
                    </div>
                </div>
            </Suspense>
        </RecoilRoot>
    );
}

export default App;
