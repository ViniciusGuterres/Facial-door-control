import styled from "styled-components";

const MainContainerCards = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    gap: 20px;
`;
const Card = styled.div`
    height: 100%;
    width: 33%;
    min-width: 280px;
    background-color: #fff;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    border-radius: 50px;
    display: flex;
    padding: 15px;
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