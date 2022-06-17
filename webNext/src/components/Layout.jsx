import React from "react";

import Link from "next/link";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faBell, faHome, faHistory, faPen, faList } from "@fortawesome/free-solid-svg-icons";

function Layout(props) {

    return (
        <div style={{
            height: '100vh'
        }}>
            <Header />

            <div className="flex" style={{height: '100%' }}>
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
                    src="https://www.lego.com/cdn/cs/set/assets/blt13e6e2a178c38704/Spiderman-Sidekick-Tall-1.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1"
                    alt="Profile image"
                />
            </div>
        </nav>
    )
}

function NavMenu() {
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
    };

    return (
        <div className="bg-gray-900 text-white" style={{height: '100%', width: '22%' }} >
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
                    <Link href='userCrud' className='flex items-center'>
                        <div>
                            <FontAwesomeIcon
                                className="mr-3"
                                icon={faPen}
                            />
                            <a>Cadastro de usuário</a>
                        </div>
                    </Link>
                </li>

                <li
                    style={styles.menuItem}
                >
                    <Link href='usersList' className='flex items-center'>
                        <div>
                            <FontAwesomeIcon
                                className="mr-3"
                                icon={faList}
                            />
                            <a>Lista de usuário</a>
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
            </ul>
        </div>
    )
}

export default Layout;