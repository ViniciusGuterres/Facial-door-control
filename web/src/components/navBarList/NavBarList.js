import styled from "styled-components";

export const Container = styled.div`
    font-size: 15px;
    list-style: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    color: white;
    border-radius: 20px;
    padding: 20px;
    background-color: ${props => props.isMenuListSelected ? '#303030' : ''};
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
`;

export default Container;