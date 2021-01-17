import React, { useState } from 'react'
import Lottie from 'react-lottie';

import logo_gray from '../../assets/logotipo/cinza@3x.png'
import empresa_icon from '../../assets/icons/SouEmpresa.svg'
import futuro_icon from '../../assets/icons/SouFuturo.svg'
import escola_icon from '../../assets/icons/SouEscola.svg'
import animationData from '../../assets/lotties/animation.json'
import logo_shawee from '../../assets/icons/logo-shawee.png'
import logo_ccr from '../../assets/icons/logo-ccr.png'

import * as S from './styles'

function Home() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');
    function closeModal() {
        overlay.style.display = 'none';
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    }

    const [colorGap, setColorGap] = useState('#7A03B2');
    function openModal(color){
        overlay.style.display = 'flex';
        modal.style.display = 'flex';
        body.style.overflow = 'hidden';
        setColorGap(color);
    }

    return (
        <S.MainContainer>
            <S.Overlay onClick={closeModal} className='overlay'/>
            <S.Modal className='modal'>
            <S.CloseModal onClick={closeModal} className='close' title="close">
                    <span></span>
                    <span></span>
                </S.CloseModal>
                    <S.TitleLogin color={colorGap}>Login</S.TitleLogin>
                    <S.Input  type="email" placeholder="E-mail" margin="30px" />
                    <S.Input  type="password" placeholder="Senha" margin="14px" />
                    <S.ButtonLogin color={colorGap} >Entrar</S.ButtonLogin>
                    <S.Ancora color={colorGap} >Esqueci minha senha</S.Ancora>
                    <S.Ancora color={colorGap} >Não tem cadastro? Clique aqui.</S.Ancora>
                </S.Modal>
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
                        <S.Button  onClick={() => {openModal('#4F69EE')}} background="#4F69EE" type="button">Entrar</S.Button>
                    </S.Rectangle>
                    <S.Rectangle>
                        <S.ImgContain background="#7A03B2">
                            <S.Icon src={futuro_icon} width={35} alt="Futuro" />
                        </S.ImgContain>
                        <S.TitleRec color="#7A03B2">Sou o FUTURO</S.TitleRec>
                        <p>Aprimore seus conhecimentos e encontre o seu emprego ideal.</p>
                        <S.Button  onClick={() => {openModal('#7A03B2')}} background="#7A03B2" type="button">Entrar</S.Button>
                    </S.Rectangle>
                    <S.Rectangle>
                        <S.ImgContain background="#44AC6E">
                            <S.Icon src={escola_icon} width={40} margin="5px" alt="Escola" />
                        </S.ImgContain>
                        <S.TitleRec color="#44AC6E">Sou uma ESCOLA</S.TitleRec>
                        <p>Disponibilize seus cursos para empresas e futuros profissionais.</p>
                        <S.Button  onClick={() => {openModal('#44AC6E')}} background="#44AC6E" type="button">Entrar</S.Button>
                    </S.Rectangle>
                </S.RecContain>
                <S.About>
                    <Lottie
                        options={defaultOptions}
                        height={450}
                        width={450}
                    />
                    <S.AboutRec>
                        <S.TitleAbout>Quem Somos?</S.TitleAbout>
                        <S.Paragraph color="#4F69EE" font={700} marginT="43px" text="justify">Empresas procuram por profissionais, e pessoas procuram por empregos.</S.Paragraph><br />
                        <S.Paragraph color="#E3E3E3" font={400} text="justify" >Muitas vezes esse <span>‘match’</span> não é possível, pois segundo o IBGE, dos 50 milhões de pessoas com idades entre 14 e 29 anos, dez milhões, ou seja, 20%, não terminaram alguma das etapas da educação básica e carecem de qualificações necessárias que uma empresa procura. </S.Paragraph>
                    </S.AboutRec>
                </S.About>
                <S.Phrase>
                    A <span>ignite</span> surgiu com o objetivo de criar a ligação entre profissionais e empresas.
                </S.Phrase>
                <S.Paragraph color="#E3E3E3" width="80%" text="center" marginT="30px" marginB="100px">
                    Queremos disponibilizar qualificação gratuita para quem tem vontade de estudar! <br />
                    Somos uma plataforma que atua em conjunto com instituições de ensino para dar o primeiro passo na carreira de pessoas que pretendem iniciar no mercado de trabalho.
                </S.Paragraph>
            </S.Container>
            <S.Partners>
                <S.TitleAbout>Parceiros</S.TitleAbout>
                <div>
                    <img src={logo_shawee} alt="Logo Shawee" />
                    <img src={logo_ccr} alt="Logo CCR" />
                </div>
            </S.Partners>
            <S.Footer>
                <p>Como funciona?</p>
                <p>contato@ignite.tk</p>
                <p>(xx) xxxx-xxxx</p>
            </S.Footer>

        </S.MainContainer>
    );
}

export default Home;