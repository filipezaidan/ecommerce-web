import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 400px;
    width: 400px;
    margin: 20px;
    border: 1.2px solid  #f3f3f3;
    padding: 5px;
    align-items: center;
    justify-content: center;
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

`
export const Value = styled.small`
    font-size: 12px;
    font-weight: bold;
`
export const Button = styled.button`
    background-color:blue; 
    color: white;
`