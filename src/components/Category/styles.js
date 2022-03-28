import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 0px 50px;
    align-items: center;
    justify-content: center;
    margin: 3% 0;
    flex-direction: column;
`
export const Title = styled.span`
    font-size: 30px;
    font-weight: bold;
    font-family: Roboto;
`

export const Line = styled.div`
    width: 95%;
    border-bottom: 1.5px solid #d3d3d3;
    margin: 20px 0px;

`
export const Categories = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    flex-wrap: wrap;
    padding: 10px 10px;
`

export const Categorie = styled.button`
    width: auto;
    margin: 5px 10px;
    padding: 10px;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    height: 40px;
    border: 1.2px solid #000;
    background: ${props => props.select === true ? '#000' : '#fff'};
    color:  ${props => props.select === true ? '#fff' : '#000'};
    border-radius: 5px;
    transition: all 0.3s;

    &:hover {
        background-color: #000;
        color: #FFF;
    }
`