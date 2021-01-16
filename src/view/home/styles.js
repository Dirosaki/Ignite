import styled from 'styled-components';
import background from '../../assets/background.png'
import vector from '../../assets/vector.svg'
import { X } from 'react-feather'

export const MainContainer = styled.div`
    background-color: #333;
    background-image: url(${background});
    background-size: 1447px 1850px;
    display: flex;
    flex-direction: column;
    align-items: center;
    >img{
        width: 222px;
        margin-top: 60px;
        margin-bottom: 33px;
    }
    >h2{
        font-size: 24px;
        color:  #E3E3E3;
        margin-bottom: 24px;
    }
`

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-image: url(${vector});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 70px;
`
export const RecContain = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 800px){
        flex-wrap: wrap;
    }
`

export const Rectangle = styled.div`
    width: 250px;
    min-width: 250px;
    height: 320px;
    min-height: 320px;
    margin: 49px 30px 0;
    background-color: #E3E3E3;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 900px){
        margin: 49px 10px 0;
    }
    >p{
        font-size: 18px;
        color: #18151C;
        width: 199px;
        margin-left: 21px;
    }
`

export const ImgContain = styled.div`
    width: 55px;
    height: 55px;
    margin: 21px 0 13px 21px;
    border-radius: 10px;
    background-color: ${({ background }) => background};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Icon = styled.img`
    width: ${({ width }) => width};
    margin-top: ${({ margin }) => margin};
`

export const TitleRec = styled.h3`
        font-size: 24px;
        color: ${({ color }) => color};
        margin-left: 21px;
        margin-bottom: 10px;
        font-weight:bold;
        width: 114px;
`

export const Button = styled.button`
    width: calc(203.25px);
    height: 45px;
    background-color: ${({ background }) => background};
    border-radius: 8px;
    color: #E3E3E3;
    font-size: 18px;
    font-weight: bold;
    border: none;
    bottom: 21px;
    left: 21px;
    cursor: pointer;
    transition: filter 2s;
    text-decoration: none;
    outline: 0;
`

export const About = styled.div`
    height: 550px;
    width: 90%;
    display: flex;
    justify-content: space-between;
`

export const Modal = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);

    form {
        width: 400px;
        min-width: 350px;
        height: 380px;
        min-height: 320px;
        background-color: #E3E3E3;
        border-top-left-radius: 30px;
        border-bottom-right-radius: 30px;
        box-shadow: 3px 4px rgba(0, 0, 0, 0.6);
        
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items:  center;
        @media screen and (max-width: 900px){
            margin: 49px 10px 0;
        };
        >h1{
            font-size: 20px;
            color: #18151C;
            width: 199px;
            margin-left: 21px;
            text-align: center;
        }
        input {
            height: 50px;
            width: 80%;
            border-radius: 8px;
            border-width: 1px;
            border-color: #160061;
            text-align: center;
            font-size: 16px;
        }
    };
`
export const a = styled.button`
    font-size: 15px;
    color: #18151C;
    width: 250px;
    margin-left: 21px;
    text-align: center;
    border-bottom-width: 0.5px;
    border-color: #160061;
`;

export const x = styled(X).attrs({
    color: '#FFF',
    size: 35
})`
    position: absolute;
    top: 50px;
    right: 50px;
`;

export const AboutRec = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
    margin-right: 120px;
`

export const TitleAbout = styled.h3`
    color: #E3E3E3;
    font-size: 48px;
    font-family: "Aristotelica";
    font-weight: 600;
    text-align: center;
    margin-top: 50px;
`
export const Paragraph = styled.p`
    font-size: 24px;
    text-align: ${({text}) => text};
    color: ${({ color }) => color};
    font-weight: ${({ font }) => font};
    margin-top: ${({ marginT }) => marginT};
    margin-bottom: ${({ marginB }) => marginB};
    width: ${({width}) => width};
    span{
        font-style: italic;
    }
`

export const Phrase = styled.h3`
    font-size: 36px;
    line-height: 41px;
    text-align: center;
    font-weight: 700;
    color: #E3E3E3;
    width: 80%;
    >span{
        font-family: "Arista";
        color: #4F69EE;
        font-size: 48px;
        font-weight: 600;
    }
`

export const Partners = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    >div{
        margin-top: 35px;
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        img:first-child{
            height: 40px;
        }
        img:last-child{
            height: 100px;
        }
    }
`

export const TitlePartners = styled.h4`
    font-family: "Arista";
    font-size: 48px;
    color: #E3E3E3;
    font-weight: 600;
`

export const Footer = styled.div`
text-align: center;
width: 100%;
background-color: #18151C;
    p{
        color: #E3E3E3;
        font-size: 20px;
        font-weight: normal;
        &:first-child{
            margin-top: 45px;
        }
        &:last-child{
            margin-bottom: 45px;
        }
    }
`
