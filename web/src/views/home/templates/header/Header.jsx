import React from 'react';

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faSignOutAlt, faBell } from '@fortawesome/free-solid-svg-icons'

// Styled component
import styledComponents from './Header.js';
const {
    Head,
    HeaderContentLeft,
    CompanyName,
    SearchBar,
    Input,
    SearchIconContainer,
    HeaderContentRight,
    Pipe
} = styledComponents;

export default function Header(props) {

    return (
        <Head>
            <HeaderContentLeft>
                {/* Menu Icon */}
                <FontAwesomeIcon
                    icon={faBars}
                    style={{ color: '#00000094', cursor: 'pointer', fontSize: '22px' }}
                    onClick={() => props.collapseNavMenu()}
                />

                {/* Title company name */}
                <CompanyName>EPI VISION</CompanyName>

                {/* Search box */}
                <SearchBar>
                    <Input />

                    {/* Seach icon */}
                    <SearchIconContainer>
                        <FontAwesomeIcon
                            icon={faSearch}
                            style={{ fontSize: '13px', color: '#69707a' }}
                        />
                    </SearchIconContainer>
                </SearchBar>
            </HeaderContentLeft>

            {/* Right div */}
            <HeaderContentRight>
                {/* User logged */}
                <span style={{ marginRight: '20px' }}>vinicius C.</span>


                {/* Notifications icon */}
                <div style={{ marginRight: '20px' }}>
                    <FontAwesomeIcon
                        icon={faBell}
                        style={{ cursor: 'pointer', color: 'rgb(105, 112, 122)', fontSize: '18px' }}
                    />
                </div>

                {/* Pipe Separator */}
                <Pipe></Pipe>

                {/* Logout icon */}
                <FontAwesomeIcon
                    icon={faSignOutAlt}
                    style={{ cursor: 'pointer', color: 'rgb(105, 112, 122)', fontSize: '20px', marginLeft: '20px' }}
                />
            </HeaderContentRight>
        </Head>
    )
}