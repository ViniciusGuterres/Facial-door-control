import React from 'react';

// css
import style from '../styles/BreadCrumb.module.css';

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faBell, faHome, faHistory, faPen } from "@fortawesome/free-solid-svg-icons";

function BreadCrumb(props) {

    /**
     * @summary - Func will see the props icon and return a font awesome element of the chosen icon
     * @param {string} iconName - The icon name of font awesome icon list
     * @returns Return a font awesome react element
     */
    function renderIconFontAwesome(iconName) {
        let chosenIcon = null;

        switch (iconName) {
            case 'faHistory':
                chosenIcon = faHistory;
                break;
            default:
                break;
        }

        if (chosenIcon) {
            return (
                <FontAwesomeIcon
                    style={{marginRight: '5px'}}
                    icon={faHistory}
                />
            )
        } else {
            return chosenIcon;
        }
    }

    return (
        <div className={style.mainContainer}>
            <div className={style.contentContainer}>
                {renderIconFontAwesome(props.icon)}

                {props.name}
            </div>
        </div>
    )
}

export default BreadCrumb;