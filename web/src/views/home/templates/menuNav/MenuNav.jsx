import React, { useState } from 'react';

// styled components
import { Aside, Ul } from './MenuNav.js';

// components
import NavBarItems from '../../../../components/navBarItems/index.jsx';
import NavBarList from '../../../../components/navBarList/index.jsx';

export default function MenuNav() {
    const [menuSelected, setMenuSelected] = useState([true, false, false, false, false, false, false, false]);

    const setSelectedMenuItem = (itemIndex) => {
        if (!isNaN(itemIndex)) {
            const menuSelectedCopy = Array(7).fill(false);

            menuSelectedCopy[itemIndex] = true;
            setMenuSelected(menuSelectedCopy);
        }
    }

    return (
        <Aside>
            <Ul>
                <NavBarList
                    icon={'faChartPie'}
                    label={'Home'}
                    link={'/'}
                    setSelectedMenuItem={setSelectedMenuItem}
                    menuListSelected={menuSelected}
                    index={0}
                />

                <NavBarList
                    label={'Colaboradores'}
                    icon={'faIdCard'}
                    menuListSelected={menuSelected}
                    setSelectedMenuItem={setSelectedMenuItem}
                    index={1}
                >
                    <NavBarItems
                        label={'Cadastrar colaborador'}
                        link={'/'}
                        menuListSelected={menuSelected}
                        setSelectedMenuItem={setSelectedMenuItem}
                        index={0}
                    />
                    <NavBarItems
                        label={'Todos os colaboradores'}
                        link={'/'}
                        menuListSelected={menuSelected}
                        setSelectedMenuItem={setSelectedMenuItem}
                        index={1}
                    />
                </NavBarList>

                <NavBarList
                    icon={'faListAlt'}
                    label={'Usuários'}
                    index={2}
                    menuListSelected={menuSelected}
                    setSelectedMenuItem={setSelectedMenuItem}
                >
                    <NavBarItems
                        label={'Cadastrar usuários'}
                        link={'/'}
                        menuListSelected={menuSelected}
                        setSelectedMenuItem={setSelectedMenuItem}
                        index={0}
                    />
                    <NavBarItems
                        label={'Todos os usuários'}
                        link={'/'}
                        menuListSelected={menuSelected}
                        setSelectedMenuItem={setSelectedMenuItem}
                        index={1}
                    />
                </NavBarList>

                <NavBarList
                    icon={'faHistory'}
                    label={'Histórico de acessos'}
                    link={'/historicoDeViolacoes'}
                    index={4}
                    menuListSelected={menuSelected}
                    setSelectedMenuItem={setSelectedMenuItem}
                />
                <NavBarList
                    icon={'faCog'}
                    label={'Configurações'}
                    link={'/'}
                    index={5}
                    menuListSelected={menuSelected}
                    setSelectedMenuItem={setSelectedMenuItem}
                />
                <NavBarList
                    icon={'faUserAlt'}
                    label={'Meu perfil'}
                    link={'/'}
                    index={6}
                    menuListSelected={menuSelected}
                    setSelectedMenuItem={setSelectedMenuItem}
                />
            </Ul>
        </Aside>
    )
}