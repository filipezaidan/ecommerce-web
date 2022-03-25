import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    background-color: #f8f9fa;
    padding: 0px 10px;
`
export const Title = styled.h1`
    font-size: 26px;
    font-weight: bold;
    color: black;
`
export const Links = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
`
export const Link = styled(LinkRouter)`
    text-decoration: none;
    margin-left: 10px;
    font-size: 20px;
    color: black;
    cursor: pointer;

    &:hover{
      color: blue
    }

`
export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    transform: 0.3s;

    &:hover{
      background: rgb(0 0 0 / 20%);;
    }

`