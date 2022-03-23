import styled from "styled-components";

const MainContainerCards = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    gap: 20px;
`;
const Card = styled.div`
    width: 25%;
    height: 150px;
    background-color: #fff;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 20px;
`;

const CardTitle = styled.span`
    font-weight: bold;
    font-size: 15px;
`;

const ContainerBarChart = styled.div`
    width: 100%;
    height: 70%;
    min-height: 350px;
    margin-top: 30px;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
`;

const ContainerDonutChart = styled.div`
    width: 50%;
    height: 70%;
    min-height: 280px;
    margin-top: 30px;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
`;

const ContainerLineChart = styled.div`
    width: 50%;
    height: 70%;
    min-height: 280px;
    margin-top: 30px;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
`;

const styledComponents = {
    MainContainerCards,
    Card,
    CardTitle,
    ContainerBarChart,
    ContainerDonutChart,
    ContainerLineChart
};

export default styledComponents;