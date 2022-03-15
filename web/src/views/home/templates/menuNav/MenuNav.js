import styled from "styled-components";

const Aside = styled.aside`
    background-color: #1e1e1e;
    box-shadow: rgb(122 122 158 / 15%) 4px 2px 6px;
    width: 30%;
    height: 100%;
`;

const Li = styled.li`
    border-bottom: 1px solid #ffffff2e;
    padding: 10px;
    color: #fff;
    width: 90%;
`;

const Ul = styled.ul`
    font-size: 15px;
    margin-top: 20px;
    list-style: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const modules = {Aside, Li, Ul};
export default modules;