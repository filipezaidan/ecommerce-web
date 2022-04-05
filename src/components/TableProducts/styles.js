import styled from 'styled-components'

export const Table = styled.table`
    border-collapse: collapse;
    width: 70%;
    table-layout: auto;
    border-radius: 5px;

`
export const THead = styled.thead`
    font-size: 18px;
    font-family: 'Roboto';
    color: #000;
`;
export const TR = styled.tr`
    background-color: #f8f8f8;
    border-bottom: 1px solid #ddd;
    padding: .35em;
`;
export const TD = styled.td`
    padding: .62em;
    text-align: center;
    font-size:16px;
`;
export const TH = styled.th`
    padding: .62em;
    text-align: center;
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
`;
export const TBody = styled.tbody``;
export const ContainerProductItem = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;

`
export const ImageProduct = styled.img`
    width: 100px; 
    height: 100px;
    object-fit: contain;
`
export const TitleProduct = styled.span`

`
export const ContainerQuantity = styled.div`
    display: flex ;
    align-items: center;
    justify-content: space-around;
`
export const ButtonCart = styled.button`
    background: transparent;
    cursor: pointer
`