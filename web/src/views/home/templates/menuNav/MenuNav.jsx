import React from 'react';

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faCog, faChartPie, faListAlt, faHistory, faIdCard } from '@fortawesome/free-solid-svg-icons';

// router
import { Link } from 'react-router-dom';

// styled components
import { Aside, Ul, RowBody } from './MenuNav.js';
// const { Aside, Ul, RowBody } = Modules;

// components
import NavBarItems from '../../../../components/navBarItems/index.jsx';
import NavBarList from '../../../../components/navBarList/index.jsx';

export default function MenuNav(props) {

    return (
        <Aside>
            <Ul>
                <NavBarItems
                    icon={'faChartPie'}
                    label={'Dashboard'}
                    link={'/'}
                />

                <NavBarList
                    label={'Colaboradores'}
                    icon={'faIdCard'}
                >
                    <NavBarItems
                        icon={'faIdCard'}
                        label={'cadastro 2'}
                        link={'/cadastroFuncionario'}
                    />
                    <NavBarItems
                        icon={'faIdCard'}
                        label={'cadastro 2'}
                        link={'/cadastroFuncionario'}
                    />
                </NavBarList>

                <NavBarItems
                    icon={'faListAlt'}
                    label={'Colaboradores'}
                />

                <NavBarItems
                    icon={'faListAlt'}
                    label={'Lista de Colaboradores'}
                    link={'/listaDeFuncionarios'}
                />
                <NavBarItems
                    icon={'faHistory'}
                    label={'Histórico de Violações'}
                    link={'/historicoDeViolacoes'}
                />
                <NavBarItems
                    icon={'faCog'}
                    label={'Configurações'}
                    link={'/'}
                />
                <NavBarItems
                    icon={'faUserAlt'}
                    label={'Usuário'}
                    link={'/'}
                />
            </Ul>
        </Aside>
    )
}