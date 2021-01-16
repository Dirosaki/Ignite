import React from 'react'

import logo_gray from '../../assets/logotipo/cinza@3x.png'
import empresa_icon from '../../assets/icons/SouEmpresa.svg'
import futuro_icon from '../../assets/icons/SouFuturo.svg'
import escola_icon from '../../assets/icons/SouEscola.svg'


import * as S from './styles'

function Home() {
    return (
        <S.MainContainer>
            <img src={logo_gray} alt="Logotipo" />
            <h2>Encontre aqui a chave que a sua carreira precisa para crescer.</h2>
            <S.Container>
                <S.RecContain>
                    <S.Rectangle>
                        <S.ImgContain background="#4F69EE">
                            <S.Icon src={empresa_icon} width={33} alt="Empresa" />
                        </S.ImgContain>
                        <S.TitleRec color="#4F69EE">Sou uma EMPRESA</S.TitleRec>
                        <p>Crie o seu plano de estudos ou encontre o profissional qualificado para a sua empresa.</p>
                        <S.Button background="#4F69EE" type="button">Entrar</S.Button>
                    </S.Rectangle>
                    <S.Rectangle>
                        <S.ImgContain background="#7A03B2">
                            <S.Icon src={futuro_icon} width={35} alt="Futuro" />
                        </S.ImgContain>
                        <S.TitleRec color="#7A03B2">Sou o FUTURO</S.TitleRec>
                        <p>Aprimore seus conhecimentos e encontre o seu emprego ideal.</p>
                        <S.Button background="#7A03B2" type="button">Entrar</S.Button>
                    </S.Rectangle>
                    <S.Rectangle>
                        <S.ImgContain background="#44AC6E">
                            <S.Icon src={escola_icon} width={40} margin="5px" alt="Escola" />
                        </S.ImgContain>
                        <S.TitleRec color="#44AC6E">Sou uma ESCOLA</S.TitleRec>
                        <p>Disponibilize seus cursos para empresas e futuros profissionais.</p>
                        <S.Button background="#44AC6E" type="button">Entrar</S.Button>
                    </S.Rectangle>
                </S.RecContain>
                
            </S.Container>

        </S.MainContainer>
    );
}

export default Home;