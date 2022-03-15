import styled from 'styled-components';

const Head = styled.header`
    background-color: #fff;
    border-bottom: 1px solid #0000001f;
    display: flex;
    align-items: center;
    height: 70px;
    width: 100%;
    padding: 20px;
`

const HeaderContentLeft = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`

const CompanyName = styled.h1`
    font-size: 18px;
    margin-left: 30px;
    margin-right: 30px;
    cursor: pointer;
    min-width: 70px;
`

const SearchBar = styled.div`
    width: 200px;
    height: 30px;
    display: flex;
    border: 1px solid #d8d8d8;
    border-radius: 3px;
    background-color: #eef2f8;
    
`

const Input = styled.input`
    height: 100%;
    width: 80%;
    border: none;
    background-color: #eef2f8;
    border-radius: 3px;
    outline: none;
    &:focus {
        border: 2px solid #274073;
    }
`


const SearchIconContainer = styled.div`
    height: 100%; 
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderContentRight = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const Pipe = styled.div`
    height: 30px;
    border-right: 1px solid #908e8e;
`

const styledComponents = {
    Head,
    HeaderContentLeft,
    CompanyName,
    SearchBar,
    Input, 
    SearchIconContainer,
    HeaderContentRight,
    Pipe
};

export default styledComponents;