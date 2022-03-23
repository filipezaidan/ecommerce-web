import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 400px;
    width: 400px;
    margin: 20px;
    border: 1.2px solid  #f3f3f3;
    padding: 5px;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`
export const Image = styled.img`
    width: 250px;
    height: 250px;
    object-fit: contain;
`
export const Title = styled.span`
    font-size: 18px;
    font-weight: bold;
    max-width: 80%; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
`
export const Value = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #4f4b4a;
`
export const Button = styled.button`
    background-color: #0d6efd; 
    border-color: #0d6efd;
    width: 180px;
    height: 35px;
    border-radius: 5px;
    color: #FFF;
    transition: all 0.3s;

    &:hover{
       background-color: #0a58ca;
    }
`