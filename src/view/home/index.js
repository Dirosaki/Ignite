/* eslint-disable no-unused-expressions */
import React, {useState, useEffect} from 'react'

import {api} from '../../services/api'

import logo_gray from '../../assets/logotipo/cinza@3x.png'
import empresa_icon from '../../assets/icons/SouEmpresa.svg'
import futuro_icon from '../../assets/icons/SouFuturo.svg'
import escola_icon from '../../assets/icons/SouEscola.svg'


import * as S from './styles'

function Home() {
    const [display, setDisplay] = useState('login');
    const [state, setState] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    async function ForgotPassword() {
        if(state === 'company') {
            const response = await api.post('/forgot_password_company', {email})
            if(response.data.status === 200){
                alert('Sucesso!!!', response.data.message)
                setEmail('')
                setDisplay('login')
            }else{
                alert('Erro ao enviar!!!', 'por favor, tente movamente mais tarde')
            }
        }else if(state === 'school'){
            const response = await api.post('/forgot_password_school', {email})
            if(response.data.status === 200){
                alert('Sucesso!!!', response.data.message)
                setEmail('')
                setDisplay('login')
            }else{
                alert('Erro ao enviar!!!', 'por favor, tente movamente mais tarde')
            }
        }else if(state === 'student'){
            const response = await api.post('/forgot_password_student', {email})
            if(response.data.status === 200){
                alert('Sucesso!!!', response.data.message)
                setEmail('')
                setDisplay('login')
            }else{
                alert('Erro ao enviar!!!', 'por favor, tente movamente mais tarde')
            }
        }
    }

    async function CreateUser() {
        if(state === 'company') {
            const response = await api.post('/company', {
                email,
                password,
                name,
            })
            if(response.data.status === 200){
                alert('Sucesso!!!', response.data.message)
                setEmail('')
                setPassword('')
                setDisplay('login')
            }else{
                alert('Erro ao cadastrar!!!', response.data.error)
            }
        }else if(state === 'school'){
            const response = await api.post('/school', {
                email,
                password,
                name,
            })
            if(response.data.status === 200){
                alert('Sucesso!!!', response.data.message)
                setEmail('')
                setPassword('')
                setDisplay('login')
            }else{
                alert('Erro ao cadastrar!!!', 'por favor, tente movamente mais tarde')
            }
        }else if(state === 'student'){
            const response = await api.post('/student', {
                email,
                password,
                name,
                phone
            })
            if(response.data.status === 200){
                alert('Sucesso!!!', response.data.message)
                setEmail('')
                setPassword('')
                setDisplay('login')
            }else{
                alert('Erro ao cadastrar!!!', 'por favor, tente movamente mais tarde')
            }
        }
    }


    async function Login() {
        const response = api.post('/login', {
            email,
            password
        })
        
        if(response.data.status === 201) {
            alert('Sucesso!!!', 'logou')
            setEmail('')
            setPassword('')
        }else{
            alert('Erro ao logar!!!', response.data.error)
        }
    }

    return (
        <S.MainContainer>
            {
                show &&
                <S.Modal >
                    <S.x onClick={()=>{setShow(false)}} />
                    {
                        display === 'forgot' ?
                        <form onSubmit={ForgotPassword} >
                            <h1>Esqueci minha senha</h1>
                            <input 
                                placeholder='Informe seu Email' 
                                type="e-mail"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                            <S.Button onClick={ForgotPassword} background="#160061" type="button">Enviar</S.Button>
                            <S.a onClick={()=>{setDisplay('login')}}> Retornar a tela de login </S.a>
                        </form>
                        : display === 'login' ?
                            <form onSubmit={Login}>
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
                                <S.Button onClick={Login} background="#160061" type="button">Entrar</S.Button>
                                <S.a onClick={()=>{setDisplay('forgot')}}> Esqueci minha senha </S.a>
                                <S.a onClick={()=>{setDisplay('create')}}> Não tem cadastro? Clique Aqui. </S.a>
                            </form>
                            : display === 'create' &&
                                <form onSubmit={CreateUser}>
                                    <h1>Criar acesso</h1>
                                    <input 
                                        placeholder='Informe seu nome' 
                                        type="text"
                                        autoCapitalize='word'
                                        value={name}
                                        onChange={(e)=>setName(e.target.value)}
                                    />
                                    <input 
                                        placeholder='Informe seu Telefone' 
                                        type="text"
                                        value={phone}
                                        onChange={(e)=>setPhone(e.target.value)}
                                    />
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
                                    <S.Button onClick={CreateUser} background="#160061" type="button">Cadastrar</S.Button>
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
                            }}
                        >
                            Entrar
                        </S.Button>
                    </S.Rectangle>
                </S.RecContain>
                
            </S.Container>

        </S.MainContainer>
    );
}

export default Home;