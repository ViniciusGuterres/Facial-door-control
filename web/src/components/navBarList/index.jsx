import React from "react"

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faCog, faChartPie, faListAlt, faHistory, faIdCard } from '@fortawesome/free-solid-svg-icons';

// styled components
import Container, { Title } from "./NavBarList";

export default function NavBarList(props) {

    const setItemIcon = () => {
        switch (props.icon) {
            case 'faChartPie':
                return faChartPie;
            case 'faUserAlt':
                return faUserAlt;
            case 'faCog':
                return faCog;
            case 'faListAlt':
                return faListAlt;
            case 'faHistory':
                return faHistory;
            case 'faIdCard':
                return faIdCard;
            default:
                return '';
        }
    };

    return (
        <Container>
            <Title>
                <FontAwesomeIcon
                    icon={setItemIcon()}
                    style={{ marginRight: '10px' }}
                />

                <h1>{props.label}</h1>
            </Title>
        </Container>
    )
}