import styled from 'styled-components';
import background from '../../assets/background.png'
import vector from '../../assets/vector.svg'

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
    height: 1300px;
    background-image: url(${vector});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    position: relative;
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
    position: absolute;
    bottom: 21px;
    left: 21px;
    cursor: pointer;
`

export const Overlay = styled.div`
    height: 100vh;
    width: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    background-color: rgba(21,21,28,0.73);
    z-index: 1;
`

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    height: 370px;
    width: 370px;
    display: none;
    flex-direction: column;
    align-items: center;
    box-shadow: 4px 10px 10px rgba(0,0,0,0.5);
    background-color: #E3E3E3;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    transform: translateY(-50%);
    z-index: 1;
`

export const Ancora = styled.a`
        margin-top: 20px;
        font-size: 18px;
        color: #18151C;
        text-decoration: none;
        cursor: pointer;
        &:last-child{
            margin-top: 5px;
        }
        &:hover{
            color: ${({ color }) => color ? color : '#7A03B2'};
        }
`

export const CloseModal = styled.div`
    position: absolute;
    top: 3px;
    right: 3px;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    opacity: .5;
    &:hover{
        opacity: 1;
    }
    span{
        position: absolute;
        height: 3px;
        width: 25px;
        background-color: #18151C;
        transform: rotate(45deg);
        border-radius: 35%;
        &:last-child{
            transform: rotate(-45deg);
        }
    }
`

export const TitleLogin = styled.h3`
    font-size: 18px;
    margin-top: 38px;
    font-weight: bold;
    color: ${({ color }) => color ? color : '#7A03B2'};
`

export const Input = styled.input`
    height: 45px;
    width: 282px;
    border: 1px solid #18151C;
    border-radius: 8px;
    margin-top: ${({ margin }) => margin};
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #18151C;
`

export const ButtonLogin = styled.button`
    margin-top: 28px;
    height: 45px;
    width: 199px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
    color: #E3E3E3;
    border: none;
    background-color: ${({ color }) => color ? color : '#7A03B2'} ;
    cursor: pointer;
`

export const About = styled.div`
    height: 520px;
    width: 100%;
    display: flex;
    margin-top: 131px;
`

export const AboutRec = styled.div`
    display: flex;
    flex-direction: column;
    width: 590px;
    margin-right: 120px;
`

export const TitleAbout = styled.h3`
    color: #E3E3E3;
    font-size: 48px;
    font-family: "Aristotelica";
    font-weight: 600;
    text-align: center;
`
export const Paragraph = styled.p`
    font-size: 24px;
    text-align: ${({ text }) => text};
    color: ${({ color }) => color};
    font-weight: ${({ font }) => font};
    margin-top: ${({ marginT }) => marginT};
    margin-bottom: ${({ marginB }) => marginB};
    width: ${({ width }) => width};
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