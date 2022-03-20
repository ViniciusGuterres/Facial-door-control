import React from 'react';

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faCog, faChartPie, faListAlt, faHistory, faIdCard } from '@fortawesome/free-solid-svg-icons';

// router
import { Link } from 'react-router-dom';

// styled components
import Li from './NavBarItems';

export default function NavBarItems(props) {

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

    const linkUrl = () => {
        return (
            <Link
                to={props.link}
                style={{ textDecoration: 'none', color: '#fff' }}
            >
                {props.label}
            </Link>
        )
    };

    const isItemSelected = props.menuListSelected[props.index];

    return (
        <Li
            isItemSelected={isItemSelected}
            onClick={() => props.setSelectedMenuItem(props.index)}
        >
            <FontAwesomeIcon
                icon={setItemIcon()}
                style={{ marginRight: '10px' }}
            />

            {/* Link */}
            {linkUrl()}
        </Li>
    )
}