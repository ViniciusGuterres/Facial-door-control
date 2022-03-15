import React from 'react';

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faCog, faChartPie, faListAlt, faHistory, faIdCard } from '@fortawesome/free-solid-svg-icons';

// router
import { Link } from 'react-router-dom';

// styled components
import Modules from './MenuNav.js';
const { Aside, Li, Ul } = Modules;

export default function MenuNav(props) {

    return (
        <Aside>
            <nav>
                <Ul>
                    {/* Dashboard Links */}
                    <Li>
                        {/* Chart Pie icon */}
                        <FontAwesomeIcon
                            icon={faChartPie}
                            style={{ marginRight: '10px' }}
                        />

                        {/* Dashboard Link */}
                        <Link
                            to="/"
                            style={{ textDecoration: 'none', color: '#fff' }}
                        >
                            Dashboard
                        </Link>
                    </Li>

                    <Li>
                        <FontAwesomeIcon
                            icon={faIdCard}
                            style={{ marginRight: '10px' }}
                        />

                        <Link
                            to="/cadastroFuncionario"
                            style={{ textDecoration: 'none', color: '#fff' }}>
                            Cadastrar Colaborador
                        </Link>
                    </Li>

                    <Li>
                        <FontAwesomeIcon
                            icon={faListAlt}
                            style={{ marginRight: '10px' }}
                        />

                        <Link
                            to="/listaDeFuncionarios"
                            style={{ textDecoration: 'none', color: '#fff' }}>
                            Lista de Colaboradores
                        </Link>
                    </Li>

                    <Li>
                        <FontAwesomeIcon
                            icon={faHistory}
                            style={{ marginRight: '10px' }}
                        />

                        <Link
                            to="/historicoDeViolacoes"
                            style={{ textDecoration: 'none', color: '#fff' }}>
                            Histórico de Violações
                        </Link>
                    </Li>

                    <Li>
                        <FontAwesomeIcon
                            icon={faCog}
                            style={{ marginRight: '10px' }}
                        />
                        <Link
                            to="/"
                            style={{ textDecoration: 'none', color: '#fff' }}>
                            Configurações
                        </Link>
                    </Li>

                    <Li>
                        <FontAwesomeIcon
                            icon={faUserAlt}
                            style={{ marginRight: '10px' }}
                        />
                        <Link
                            to="/"
                            style={{ textDecoration: 'none', color: '#fff' }}>
                            Usuário
                        </Link>
                    </Li>
                </Ul>
            </nav>
        </Aside>
    )
}

