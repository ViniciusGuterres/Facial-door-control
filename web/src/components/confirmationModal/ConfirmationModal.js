import styled from "styled-components";

const Overlay = styled.div`
    background-color: #161c1b82;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const ModalContainer = styled.div`
    height: 230px;
    width: 230px;
    background-color: #fff;
    border-radius: 5px;
    cursor: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
`;

const Title = styled.h1`
    color: #161414e0;
    font-weight: bold;
    font-size: 20px;
    border-radius: 2px;
    margin-bottom: 10px;
`;

const Description = styled.span`
    text-align: center;
    font-size: 13px;
    color: #898484;
    margin-bottom: 10px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`;

const Button = styled.button`
    cursor: pointer;
    padding: 7px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    color: #fff;
    background-color: ${({bgColor}) => bgColor ? '#008000c2' : '#ff0000b3'}
`;

const styledComponents = {
    Overlay,
    ModalContainer,
    Title,
    Description,
    ButtonsContainer,
    Button
};

export default styledComponents;