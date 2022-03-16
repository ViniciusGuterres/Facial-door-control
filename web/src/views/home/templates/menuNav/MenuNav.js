import styled from "styled-components";

export const Aside = styled.aside`
    background-color: #1e1e1e;
    box-shadow: rgb(122 122 158 / 15%) 4px 2px 6px;
    width: 30%;
    height: 100%;
`;

const Li = styled.li`
    padding: 10px;
    color: #fff;
    width: 90%;
`;

export const Ul = styled.ul`
    font-size: 15px;
    list-style: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 10px;
    border-radius: 20px;
    background-color: ${props => props.isSelected ? '#c1c1c13b' : ''};
`;

export default Aside;