import styled from "styled-components";

const Li = styled.li`
    padding: 20px;
    color: #fff;
    width: 90%;
    background-color: ${props => props.isItemSelected ? '#303030' : ''};
    border-radius: 20px;
    padding: 20px;
`;

export default Li;