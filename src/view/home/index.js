import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';

import api from '../../services/api'

import logo_gray from '../../assets/logotipo/cinza@3x.png'
import empresa_icon from '../../assets/icons/SouEmpresa.svg'
import futuro_icon from '../../assets/icons/SouFuturo.svg'
import escola_icon from '../../assets/icons/SouEscola.svg'
import animationData from '../../assets/lotties/animation.json'
import logo_shawee from '../../assets/icons/logo-shawee.png'
import logo_ccr from '../../assets/icons/logo-ccr.png'

import * as S from './styles'

function Home() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [colorGap, setColorGap] = useState('#7A03B2');
    const [modal, setModal] = useState('signIn');
    const [modalAnt, setModalAnt] = useState('signIn');
    const [modalType, setModalType] = useState('');
    const [typeSubmit, setTypeSubmit] = useState(()=>{});

    
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(() => {
        const value = localStorage.getItem('user')
        const category = localStorage.getItem('category')
        if (value !== null) {
            if(category === 'student'){
                history.push('/home')
            }else if(category === 'school'){
                history.push('/home')
            }else if(category === 'company'){
                history.push('/company')
            }
        }
    }, [history])

    async function forgotPassword(e) {
        e.preventDefault();
        if(modalType === 'company') {
            const response = await api.post('/forgot_password_company', {email})
            if(response.data.status === 200){
                alert(`Sucesso!!! ${response.data.message}`)
                setEmail('')
                setModal('signIn')
            }else{
                alert('Erro ao enviar!!!', 'por favor, tente movamente mais tarde')
            }
        }else if(modalType === 'school'){
            const response = await api.post('/forgot_password_school', {email})
            if(response.data.status === 200){
                alert(`Sucesso!!! ${response.data.message}`)
                setEmail('')
                setModal('signIn')
            }else{
                alert('Erro ao enviar!!!', 'por favor, tente movamente mais tarde')
            }
        }else if(modalType === 'student1'){
            const response = await api.post('/forgot_password_student', {email})
            if(response.data.status === 200){
                alert(`Sucesso!!! ${response.data.message}`)
                setEmail('')
                setModal('signIn')
            }else{
                alert('Erro ao enviar!!!', 'por favor, tente movamente mais tarde')
            }
        }
    }

    async function createUser(e) {
        // e.preventDefault();
        console.log(modalType)
        const category = localStorage.getItem('category')
        if(modalType === 'company') {
            try{
                const response = await api.post('/company', {
                    email,
                    password,
                    name,
                })
                
                if(response.data.status === 200){
                    setEmail('')
                    setPassword('')
                    setName('')
                    setPhone('')
                    setModal('signIn')
                }else{
                    alert(`Erro ao cadastrar!!! ${response.data.error}`)
                }
            }catch(err){
                console.log(err)
            }
        }else if(modalType === 'school'){
            try{
                const response = await api.post('/school', {
                    email,
                    password,
                    name,
                })
                if(response.data.status === 200){
                    alert(`Sucesso!!! ${response.data.message}`)
                    setEmail('')
                    setPassword('')
                    setName('')
                    setPhone('')
                    setModal('signIn')
                }else{
                    alert('Erro ao cadastrar!!!', 'por favor, tente movamente mais tarde')
                }
            }catch(err){
                console.log(err)
            }
        }else if(modalType === 'student1'){
            console.log('estudante')
            try{
                const response = await api.post('/student', {
                    email,
                    password,
                    name,
                    phone
                })
                console.log(response.data)
                if(response.data.status === 200){
                    alert(`Sucesso!!! ${response.data.message}`)
                    setEmail('')
                    setPassword('')
                    setName('')
                    setPhone('')
                    setModal('signIn')
                }else{
                    alert('Erro ao cadastrar!!!', 'por favor, tente movamente mais tarde')
                }
            }catch(err){
                console.log(err)
            }
        }
    }

    async function login(e) {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'))
        try{
            const response = await api.post('/login', {
                email,
                password
            })
            if(response.data.status === 201) {
                setEmail('')
                setPassword('')
                if(modalType === 'student1'){
                    console.log(response.data.user)// user.image
                    history.push('/home')
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    localStorage.setItem('category', 'student');
                }else if(modalType === 'school'){
                    console.log(response.data.school)//user.logo
                    history.push('/home')
                    localStorage.setItem('user', JSON.stringify(response.data.school));
                    localStorage.setItem('category', 'school');
                }else if(modalType === 'company'){
                    console.log(response.data.company)//user.logo
                    history.push('/company')
                    localStorage.setItem('user', JSON.stringify(response.data.company));
                    localStorage.setItem('category', 'company');
                }
            }else{
                alert(`Erro ao logar!!! ${response.data.error}`)
            }
        }catch(err){
            console.log(err)
        }
    }

    function closeModal() {
        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');
        const body = document.querySelector('body');
        overlay.style.display = 'none';
        modal.style.display = 'none';
        body.style.overflow = 'auto';
        setModal('signIn');
        setTypeSubmit({login})
        setEmail('')
        setPassword('')
        setName('')
        setPhone('')
    }

    function openModal(color) {
        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');
        const body = document.querySelector('body');
        overlay.style.display = 'flex';
        modal.style.display = 'flex';
        body.style.overflow = 'hidden';
        setColorGap(color);   
    }

    return (
        <S.MainContainer>
            <S.Overlay onClick={closeModal} className='overlay' />
            <S.Modal className='modal' onSubmit={() => createUser} >
                <S.CloseModal onClick={closeModal} className='close' title="close">
                    <span></span>
                    <span></span>
                </S.CloseModal>
                {
                    modal === 'signIn' ?
                        <>
                        <S.TitleLogin color={colorGap}>Login</S.TitleLogin>
                        <S.Input type="email" placeholder='E-mail' margin="35px" value={email} onChange={(e)=> setEmail(e.target.value)} />
                        <S.Input type="password" placeholder="Senha" margin="14px" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        <S.ButtonLogin onClick={login} type="submit" color={colorGap} margin='28px'>Entrar</S.ButtonLogin>
                        <S.Ancora
                            color={colorGap}
                            onClick={() => {
                                setTypeSubmit({forgotPassword})
                                setModal('forgot')
                            }}>Esqueci minha senha
                        </S.Ancora>
                        <S.Ancora 
                            color={colorGap} 
                            onClick={() => {
                                setTypeSubmit({createUser})
                                setModal('signUp')
                            }}>Não tem cadastro? Clique aqui.
                        </S.Ancora>
                        </>
                        : modal === 'forgot' ?
                        <>
                        <S.TitleLogin color={colorGap}>Esqueci a senha</S.TitleLogin>
                        <S.Input type="email" placeholder='Email cadastrado' margin="66px" value={email} onChange={(e)=> setEmail(e.target.value)} />
                        <S.ButtonLogin onClick={forgotPassword} type="submit" color={colorGap} margin='56px'>Enviar</S.ButtonLogin>
                        <S.Ancora
                            color={colorGap}
                            onClick={() => {
                                setTypeSubmit({login})
                                setModal('signIn')
                                setModalAnt('signIn')
                            }}>Voltar
                        </S.Ancora>
                        <S.Ancora 
                            color={colorGap} 
                            onClick={() => {
                                setModal('signUp')
                                setModalAnt('forgot')
                                setTypeSubmit({createUser})
                            }}>Não tem cadastro? Clique aqui.
                        </S.Ancora>
                        </>
                        : modal === 'signUp' && modalType === 'company' ?
                        <>
                            <S.TitleLogin color={colorGap} margin='32px' >Criar conta</S.TitleLogin>
                            <S.Input type="text" placeholder='Nome da Empresa' margin="30px" />
                            <S.Input type="email" placeholder='E-mail' margin="12px" />
                            <S.Input type="password" placeholder="Senha" margin="12px" />
                            <S.ButtonLogin color={colorGap} margin='24px'>Cadastrar</S.ButtonLogin>
                            <S.Ancora
                                color={colorGap}
                                margin='15px'
                                onClick={() => {
                                    setTypeSubmit({forgotPassword})
                                    setModal(modalAnt)
                                }}>Voltar
                            </S.Ancora>
                        </>
                        : modal === 'signUp' && modalType === 'student' ?
                        <>
                            <S.TitleLogin color={colorGap} margin='32px' >Criar conta</S.TitleLogin>
                            <S.Input type="text" placeholder='Nome Completo' margin="30px" value={name} onChange={(e)=> setName(e.target.value)} onKeyUp={(e)=> {e.target.value = e.target.value.replace(/\d/g, '')}} />
                            <S.Input type="email" placeholder='E-mail' margin="12px" value={email} onChange={(e)=> setEmail(e.target.value)} />
                            <S.Input 
                                type="tel" 
                                placeholder='Telefone' 
                                margin="12px"
                                value={phone}
                                onChange={(e)=> setPhone(e.target.value)}
                                onKeyUp={(e)=> {
                                    e.target.value = e.target.value
                                    .replace(/\D/g, '')
                                    .replace(/(\d{2})(\d)/, '($1) $2')
                                    .replace(/(\d{4})(\d)/, '$1-$2')
                                    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
                                    .replace(/(-\d{4})\d+?$/, '$1')
                                }}
                            />
                            <S.ButtonLogin 
                                color={colorGap}  
                                margin='24px' 
                                onClick={(e) => {
                                    e.preventDefault()
                                    setModalType('student1')
                                }}>Avançar
                            </S.ButtonLogin>
                            <S.Ancora
                                color={colorGap}
                                margin='15px'
                                onClick={() => {
                                    setTypeSubmit({forgotPassword})
                                    setModal(modalAnt)
                                }}>Voltar
                            </S.Ancora>
                        </> 
                        : modal === 'signUp' && modalType === 'student1' ?
                        <>
                            <S.TitleLogin color={colorGap} margin='38px' >Criar conta</S.TitleLogin>
                            <S.Input type="password" placeholder="Senha" margin="66px" value={password} onChange={e=>setPassword(e.target.value)}/>
                            <S.ButtonLogin 
                                color={colorGap}  
                                margin='56px' 
                                type="submit"
                                onClick={() => {
                                    setTypeSubmit(createUser)
                                }}>Cadastrar
                            </S.ButtonLogin>
                            <S.Ancora
                                color={colorGap}
                                margin='45px'
                                onClick={() => {
                                    
                                    setTypeSubmit(createUser)
                                    setModalType('student');
                                }}>Voltar
                            </S.Ancora>
                        </>
                        : modal === 'signUp' && modalType === 'school' ?
                        <>
                            <S.TitleLogin color={colorGap} margin='32px' >Criar conta</S.TitleLogin>
                            <S.Input type="text" placeholder='Nome da Escola' margin="30px" />
                            <S.Input type="email" placeholder='E-mail' margin="12px" />
                            <S.Input type="password" placeholder="Senha" margin="12px" />
                            <S.ButtonLogin color={colorGap} margin='24px'>Cadastrar</S.ButtonLogin>
                            <S.Ancora
                                color={colorGap}
                                margin='15px'
                                onClick={() => {
                                    setModal(modalAnt)
                                }}>Voltar
                            </S.Ancora>
                        </>
                        : null
                }
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
                        <S.Button
                            onClick={() => {
                                openModal('#4F69EE')
                                setModalType('company')
                                localStorage.setItem('category', 'company')
                            }}
                            background="#4F69EE"
                            type="button">Entrar
                        </S.Button>
                    </S.Rectangle>
                    <S.Rectangle>
                        <S.ImgContain background="#7A03B2">
                            <S.Icon src={futuro_icon} width={35} alt="Futuro" />
                        </S.ImgContain>
                        <S.TitleRec color="#7A03B2">Sou o FUTURO</S.TitleRec>
                        <p>Aprimore seus conhecimentos e encontre o seu emprego ideal.</p>
                        <S.Button 
                            onClick={() => { 
                                openModal('#7A03B2')
                                setModalType('student')
                                localStorage.setItem('category', 'student')
                             }} 
                                background="#7A03B2" 
                                type="button">Entrar</S.Button>
                    </S.Rectangle>
                    <S.Rectangle>
                        <S.ImgContain background="#44AC6E">
                            <S.Icon src={escola_icon} width={40} margin="5px" alt="Escola" />
                        </S.ImgContain>
                        <S.TitleRec color="#44AC6E">Sou uma ESCOLA</S.TitleRec>
                        <p>Disponibilize seus cursos para empresas e futuros profissionais.</p>
                        <S.Button 
                            onClick={() => { 
                                openModal('#44AC6E')
                                setModalType('school')
                                localStorage.setItem('category', 'school')
                             }} 
                                background="#44AC6E" 
                                type="button">Entrar</S.Button>
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