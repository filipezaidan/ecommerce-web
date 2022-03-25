import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    /* background-color:red; */
`
export const Image = styled.img`
    padding: 5%;
    width: 90%;
    height: 100%;
    padding: 10%;
    object-fit: contain;
`
export const Info = styled.div`
    padding: 10% 0%;
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    justify-content: center;
`
export const Category = styled.span`
    font-size: 40px;
    color: gray;
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
`
export const Title = styled.span`
    font-size: 70px;
    font-weight: 100;
    color: black;
`
export const Rating = styled.span`
    font-size: 26px;
    font-weight: bold;
    color: black;
`
export const Price = styled.span`
    margin: 20px 0;
    font-size: 55px;
    font-weight: bold;
    color: black;
`
export const Description = styled.span`
    margin: 20px 0px;
    width: 90%;
    text-align: justify;
    font-size: 25px;
    font-weight: 100;
    color: black;
`
export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`
export const Button = styled.button`
    display: flex;
    height: 50px;
    width: auto;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    background:${props => props.theme === 'light' ? '#fff' : '#000'} ;
    color:${props => props.theme === 'light' ? '#000' : '#fff'} ;
    font-size: 20px;
    font-family: Roboto;
    font-weight: 400;
    margin-right: 10px;
    border: 1.5px solid black;
    border-radius: 5px;
    cursor: pointer;
    transform: 0.3s;
    text-align: center;
    transition: all 0.3s;

    &:hover{
        
    }

`