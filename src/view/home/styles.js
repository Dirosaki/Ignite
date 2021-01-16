import styled from 'styled-components';
import background from '../../assets/background.png'
import vector from '../../assets/vector.svg'


export const MainContainer = styled.div`
    height: 100vh;
    background-color: #333;
    background-image: url(${background});
    display: flex;
    flex-direction: column;
    align-items: center;
    >img{
        width: 222px;
        margin-top: 60px;
        margin-bottom: 33px;
    }
    h2{
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
    justify-content: center;
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
    background-color: ${({background}) => background};
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

export const About = styled.div`
    height: 550px;
    width: 550px;
    display: flex;
    justify-content: space-between;
`
