import React, { useState } from "react";

import Link from "next/link";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faBell, faHome, faHistory, faPen, faList, faFileAlt, faUserGear } from "@fortawesome/free-solid-svg-icons";

function Layout(props) {

    return (
        <div style={{
            height: '100vh'
        }}>
            <Header />

            <div
                className="flex"
                style={{ height: '100%' }}
            >
                <NavMenu />
                {props.children}
            </div>
        </div>
    )
}

function Header() {
    return (
        <nav className="flex justify-between items-center flex-wrap bg-gray-800 p-4 h-14">
            <div className="flex items-center flex-shrink-0 mr-6 text-white">
                <FontAwesomeIcon
                    className="mr-2 text-xl"
                    icon={faCamera} />

                <span className="font-semibold">
                    EPI VISION
                </span>

                {/* search field */}
                <div className="flex ml-10">
                    <div className="xl:w-46">
                        <input
                            id="exampleSearch"
                            placeholder="Buscar..."
                            type="search"
                            className="form-control
                            block
                            w-270
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* User infos */}
            <div className='flex items-center text-white gap-5'>

                {/* Notification icon */}
                <div className="relative cursor-pointer">
                    <div className="w-2 h-2 bg-red-700 rounded-full absolute left-4 bottom-5" />
                    <FontAwesomeIcon
                        className="text-xl"
                        icon={faBell}
                    />
                </div>

                {/* User name */}
                <h1>Vinicius C. Guterres</h1>

                {/* User profile img */}
                <img
                    className="inline object-cover cursor-pointer w-9 h-9 mr-2 rounded-full"
                    src="https://i.pinimg.com/736x/d3/e9/20/d3e920eda23e9803319f88d138c2541d.jpg"
                    alt="Profile image"
                />
            </div>
        </nav>
    )
}

function NavMenu() {
    //states
    const [isUserMenuTabOpen, setIsUserMenuTabOpen] = useState(false);

    const styles = {
        menuItem: {
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            background: '#06449b',
            borderRadius: '10px',
            padding: '12px',
            height: '100%'
        },
        menuSubItem: {
            display: 'flex',
            flexDirection: 'column'
        }
    };

    return (
        <div className="bg-gray-900 text-white" style={{ height: '100%', width: '22%' }} >
            <ul className="menu bg-base-100 p-5 rounded-box flex flex-col gap-10">
                <li
                    style={styles.menuItem}
                >
                    <Link href='/' className='flex items-center'>
                        <div>
                            <FontAwesomeIcon
                                className="mr-3"
                                icon={faHome}
                            />
                            Home
                        </div>
                    </Link>
                </li>

                <li
                    style={styles.menuItem}
                >
                    <Link
                        href='/'
                        className='flex items-center'>
                        <div>
                            <div
                                onClick={() => setIsUserMenuTabOpen(!isUserMenuTabOpen)}
                            >
                                <FontAwesomeIcon
                                    className="mr-3"
                                    icon={faPen}
                                />
                                <a>Usuário</a>
                            </div>

                            {/* options */}
                            <div style={styles.menuSubItem}>
                                <Link
                                    href='/userCrud'
                                    className='flex items-center'
                                >
                                    <div style={{
                                        marginLeft: '10px'
                                    }}
                                    >
                                        <FontAwesomeIcon
                                            className="mr-1"
                                            icon={faUserGear}
                                        />

                                        <a>Cadastro</a>
                                    </div>
                                </Link>

                                <Link
                                    href='/userList'
                                    className='flex items-center'
                                >
                                    <div style={{
                                        marginLeft: '10px'
                                    }}
                                    >
                                        <FontAwesomeIcon
                                            className="mr-3"
                                            icon={faList}
                                        />

                                        Lista
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Link>
                </li>

                <li
                    style={styles.menuItem}
                >
                    <Link
                        href='/'
                        className='flex items-center'>
                        <div>
                            <div
                                onClick={() => setIsUserMenuTabOpen(!isUserMenuTabOpen)}
                            >
                                <FontAwesomeIcon
                                    className="mr-3"
                                    icon={faPen}
                                />
                                <a>Colaborador</a>
                            </div>

                            {/* options */}
                            <div style={styles.menuSubItem}>
                                <Link
                                    href='/employeerCrud'
                                    className='flex items-center'
                                >
                                    <div style={{
                                        marginLeft: '10px'
                                    }}
                                    >
                                        <FontAwesomeIcon
                                            className="mr-1"
                                            icon={faUserGear}
                                        />

                                        <a>Cadastro</a>
                                    </div>
                                </Link>

                                <Link
                                    href='/employeerList'
                                    className='flex items-center'
                                >
                                    <div style={{
                                        marginLeft: '10px'
                                    }}
                                    >
                                        <FontAwesomeIcon
                                            className="mr-3"
                                            icon={faList}
                                        />

                                        Lista
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Link>
                </li>

                <li style={styles.menuItem}>
                    <div className="h-full">
                        <FontAwesomeIcon
                            className="mr-3"
                            icon={faHistory}
                        />
                        <Link
                            href='/AccessHistory'
                        >
                            <a>Histórico de acessos</a>
                        </Link>
                    </div>
                </li>

                <li style={styles.menuItem}>
                    <div className="h-full">
                        <FontAwesomeIcon
                            className="mr-3"
                            icon={faFileAlt}
                        />
                        <Link
                            href='/reports'
                        >
                            <a>Relatórios</a>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Layout;