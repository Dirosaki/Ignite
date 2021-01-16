/* eslint-disable no-unused-expressions */
import React, {useState, useEffect} from 'react'

import api from '../../services/api'
import Lottie from 'react-lottie';

import { useHistory } from 'react-router-dom';

import logo_gray from '../../assets/logotipo/cinza@3x.png'
import empresa_icon from '../../assets/icons/SouEmpresa.svg'
import futuro_icon from '../../assets/icons/SouFuturo.svg'
import escola_icon from '../../assets/icons/SouEscola.svg'
import animationData from '../../assets/lotties/animation.json'
import logo_shawee from '../../assets/icons/logo-shawee.png'
import logo_ccr from '../../assets/icons/logo-ccr.png'

import * as S from './styles'

function Home() {
    const [display, setDisplay] = useState('login');
    const [state, setState] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const history = useHistory();

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
        if(state === 'company') {
            const response = await api.post('/forgot_password_company', {email})
            if(response.data.status === 200){
                alert(`Sucesso!!! ${response.data.message}`)
                setEmail('')
                setDisplay('login')
            }else{
                alert('Erro ao enviar!!!', 'por favor, tente movamente mais tarde')
            }
        }else if(state === 'school'){
            const response = await api.post('/forgot_password_school', {email})
            if(response.data.status === 200){
                alert(`Sucesso!!! ${response.data.message}`)
                setEmail('')
                setDisplay('login')
            }else{
                alert('Erro ao enviar!!!', 'por favor, tente movamente mais tarde')
            }
        }else if(state === 'student'){
            const response = await api.post('/forgot_password_student', {email})
            if(response.data.status === 200){
                alert(`Sucesso!!! ${response.data.message}`)
                setEmail('')
                setDisplay('login')
            }else{
                alert('Erro ao enviar!!!', 'por favor, tente movamente mais tarde')
            }
        }
    }

    async function createUser(e) {
        e.preventDefault();
        const category = localStorage.getItem('category')
        if(state === 'company') {
            try{
                const response = await api.post('/company', {
                    email,
                    password,
                    name,
                })
                console.log(response.data)
                if(response.data.status === 200){
                    setEmail('')
                    setPassword('')
                    setName('')
                    setPhone('')
                    setDisplay('login')
                }else{
                    alert(`Erro ao cadastrar!!! ${response.data.error}`)
                }
            }catch(err){
                console.log(err)
            }
        }else if(state === 'school'){
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
                    setDisplay('login')
                }else{
                    alert('Erro ao cadastrar!!!', 'por favor, tente movamente mais tarde')
                }
            }catch(err){
                console.log(err)
            }
        }else if(state === 'student'){
            try{
                const response = await api.post('/student', {
                    email,
                    password,
                    name,
                    phone
                })
                if(response.data.status === 200){
                    alert(`Sucesso!!! ${response.data.message}`)
                    setEmail('')
                    setPassword('')
                    setName('')
                    setPhone('')
                    setDisplay('login')
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
        try{
            const response = await api.post('/login', {
                email,
                password
            })
            if(response.data.status === 201) {
                setEmail('')
                setPassword('')
                if(state === 'student'){
                    console.log(response.data.user)
                    history.push('/home')
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    localStorage.setItem('category', 'student');
                }else if(state === 'school'){
                    console.log(response.data.school)
                    history.push('/home')
                    localStorage.setItem('user', JSON.stringify(response.data.school));
                    localStorage.setItem('category', 'school');
                }else if(state === 'company'){
                    console.log(response.data.company)
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

    return (
        <S.MainContainer>
            {
                show &&
                <S.Modal >
                    <S.x onClick={()=>{
                        setShow(false), 
                        setEmail('')
                        setPassword('')
                        setName('')
                        setPhone('')
                        setDisplay('login')
                        }} />
                    {
                        display === 'forgot' ?
                        <form onSubmit={forgotPassword} >
                            <h1>Esqueci minha senha</h1>
                            <input 
                                placeholder='Informe seu Email' 
                                type="e-mail"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                            <S.Button onClick={forgotPassword} type="submit" background="#160061">Enviar</S.Button>
                            <S.a onClick={()=>{setDisplay('login')}}> Retornar a tela de login </S.a>
                        </form>
                        : display === 'login' ?
                            <form onSubmit={login}>
                                <h1>Login</h1>
                                <input 
                                    placeholder='Email' 
                                    type="e-mail"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                                <input 
                                    placeholder='Senha' 
                                    type="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                                <S.Button onClick={login} type="submit" background="#160061">Entrar</S.Button>
                                <S.a onClick={()=>{setDisplay('forgot')}}> Esqueci minha senha </S.a>
                                <S.a onClick={()=>{setDisplay('create')}}> Não tem cadastro? Clique Aqui. </S.a>
                            </form>
                            : display === 'create' &&
                                <form onSubmit={createUser}>
                                    <h1>Criar acesso</h1>
                                    <input 
                                        placeholder={state === 'student' ? 'Informe seu nome' : state === 'company' ? 'Informe o nome da sua empresa' : state === 'school' && 'Informe o nome da sua escola' } 
                                        type="text"
                                        autoCapitalize='word'
                                        value={name}
                                        onChange={(e)=>setName(e.target.value)}
                                    />
                                    {
                                        state === 'student' &&
                                        <input 
                                            placeholder='Informe seu Telefone' 
                                            type="text"
                                            value={phone}
                                            onChange={(e)=>setPhone(e.target.value)}
                                        />
                                    }
                                    <input 
                                        placeholder='Informe seu melhor Email' 
                                        type="e-mail"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                    <input 
                                        placeholder='Senha' 
                                        type="password"
                                        value={password}
                                        onChange={e=>setPassword(e.target.value)}
                                    />
                                    <S.Button onCLick={createUser} type="submit" background="#160061" >Cadastrar</S.Button>
                                    <S.a onClick={()=>{setDisplay('login')}}> Retornar a tela de login </S.a>
                                </form>
                    }
                </S.Modal>
            }
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
                            background="#4F69EE" 
                            type="button"
                            onClick={()=>{
                                setShow(true)
                                setState('company')
                            }}
                        >
                            Entrar
                        </S.Button>
                    </S.Rectangle>
                    <S.Rectangle>
                        <S.ImgContain background="#7A03B2">
                            <S.Icon src={futuro_icon} width={35} alt="Futuro" />
                        </S.ImgContain>
                        <S.TitleRec color="#7A03B2">Sou o FUTURO</S.TitleRec>
                        <p>Aprimore seus conhecimentos e encontre o seu emprego ideal.</p>
                        <S.Button 
                            background="#7A03B2" 
                            type="button"
                            onClick={()=>{
                                setShow(true)
                                setState('student')
                            }}
                        >
                            Entrar
                        </S.Button>
                    </S.Rectangle>
                    <S.Rectangle>
                        <S.ImgContain background="#44AC6E">
                            <S.Icon src={escola_icon} width={40} margin="5px" alt="Escola" />
                        </S.ImgContain>
                        <S.TitleRec color="#44AC6E">Sou uma ESCOLA</S.TitleRec>
                        <p>Disponibilize seus cursos para empresas e futuros profissionais.</p>
                        <S.Button 
                            background="#44AC6E" 
                            type="button"
                            onClick={()=>{
                                setShow(true)
                                setState('school')
                                localStorage.setItem('category', 'school');
                            }}
                        >
                            Entrar
                        </S.Button>
                    </S.Rectangle>
                </S.RecContain>
                
            </S.Container>
            <S.Container>
                <S.About>
                    <Lottie
                        options={defaultOptions}
                        height={600}
                        width={600}
                    />
                    <S.AboutRec>
                        <S.TitleAbout>Quem Somos?</S.TitleAbout>
                        <S.Paragraph color="#4F69EE" font={400} marginT="43px" text="justify">Empresas procuram por profissionais, e pessoas procuram por empregos.</S.Paragraph><br />
                        <S.Paragraph color="#E3E3E3" font={200} text="justify" >Muitas vezes esse <span>‘match’</span> não é possível, pois segundo o IBGE, dos 50 milhões de pessoas com idades entre 14 e 29 anos, dez milhões, ou seja, 20%, não terminaram alguma das etapas da educação básica e carecem de qualificações necessárias que uma empresa procura. </S.Paragraph>
                    </S.AboutRec>
                </S.About>
                <S.Phrase>
                    A <span>ignite</span> surgiu com o objetivo de criar a ligação entre profissionais e empresas.
                </S.Phrase>
                <S.Paragraph color="#E3E3E3" width="80%" text="center" marginT="30px" marginB="100px">
                    Queremos disponibilizar qualificação gratuita para quem tem vontade de estudar! <br/> 
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