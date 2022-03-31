import styled from 'styled-components'

export const Table = styled.table`

    border-collapse: collapse;
    
    width: 70%;
    table-layout: fixed;
    overflow: hidden;
    border-radius: 5px;

`
export const THead = styled.thead`
    font-size: 18px;
    font-family: 'Roboto';
    color: #000;
`;
export const TR = styled.tr`
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: .35em;
`;
export const TD = styled.td`
    padding: .62em;
    text-align: center;
`;
export const TH = styled.th`
    padding: .62em;
    text-align: center;
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
`;
export const TBody = styled.tbody``;
