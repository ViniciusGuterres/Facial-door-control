import React from "react";
import { Link } from 'react-router-dom';

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

    const isMenuListSelected = props.menuListSelected[props.index];

    return (
        <Link
            to={props.link ? props.link : '/'}
            style={{ textDecoration: 'none', color: '#fff' }}
        >
            <Container
                isMenuListSelected={isMenuListSelected}
                onClick={() => props.setSelectedMenuItem(props.index)}
            >
                {/* Case have url, set it */}
                <Title>
                    <FontAwesomeIcon
                        icon={setItemIcon()}
                        style={{ marginRight: '10px' }}
                    />

                    <span>{props.label}</span>
                </Title>

                {/* Case selected open body with childrens */}
                {
                    isMenuListSelected ?
                        <div>
                            {props.children}
                        </div>
                        :
                        null
                }
            </Container>
        </Link>
    )
}