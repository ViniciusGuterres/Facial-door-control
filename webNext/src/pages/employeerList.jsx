import { React, useMemo, useEffect, useState } from "react";


// AXIOS api
import { getAllAccessData } from '../javascriptTemp/api';

// Components
import GenericTable from "../components/GenericTable";
import Layout from '../components/Layout';
import BreadCrumb from "../components/BreadCrumb";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faCircleCheck, faBan } from "@fortawesome/free-solid-svg-icons";


const USERS_MOCk_DATA = [
    {
        name: 'Vinicius Guterres',
        email: 'guter@yahoo.com',
        sector: 'Engenharia',
        access_level: 'Analista',
        office_role: 'Programador full-stack Jr.',
        birth_date: '08/01/2004 ',
        has_access: true,
        actions: null
    },
    {
        name: 'Felipe Senna',
        email: 'felipe@yahoo.com',
        sector: 'TI',
        access_level: 'Administrador',
        office_role: 'Gestor de TI.',
        birth_date: '25/02/1988 ',
        has_access: false,
        actions: null
    },
    {
        name: 'Maria Eduarda',
        email: 'maria@yahoo.com',
        sector: 'ADM',
        access_level: 'operacional',
        office_role: 'Auxiliar financeiro.',
        birth_date: '21/12/1988 ',
        has_access: true,
        actions: null
    }
];

export default function employeerList() {
    const [accessdata, setAccessData] = useState([]);

    // globals const
    const authorizedAccessIcon = <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} />;
    const unauthorizedAccessIcon = <FontAwesomeIcon icon={faBan} style={{ color: 'red' }} />;

    // Geting all access and set at the tableDatas
    useEffect(() => {

        if (!accessdata.length) {
            getAllAccessHistory()
        } else {
            setTimeout(() => {
                getAllAccessHistory();
            }, 5000);
        }

    }, [accessdata]);

    /**
     * @summary fetch the access data and set it at the state
     */
    function getAllAccessHistory() {
        getAllAccessData('http://localhost:3010/AccessHistory')
            .then(res => setAccessData(res))
    }

    function getData() {
        return USERS_MOCk_DATA.map(item => {
            item.actions = (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <FontAwesomeIcon
                        style={{ cursor: 'pointer', color: '#23699d' }}
                        className="text-xl"
                        icon={faPen}
                    />

                    <FontAwesomeIcon
                        style={{ cursor: 'pointer', color: 'tomato' }}
                        className="text-xl"
                        icon={faTrash}
                    />
                </div>
            );

            item.has_access = item.has_access ? authorizedAccessIcon: unauthorizedAccessIcon;

            // Setting the default values

            return item;
        })
    }

    /**
     * @summary Format the db access data
     * @param {array} accessData - The returned db access data
     * @returns {array} Return a array of object with the access data formatted
     */
    function formatAccessData(accessData) {
        let accessDataFormatted = [];

        if (accessData && accessData.length > 0) {
            accessDataFormatted = accessData.map(data => {
                // Setting the default values
                const rowDate = data.date;
                let fullDate = rowDate;
                let hour = rowDate;
                let collaborator = data.collaborator_name;
                let isAuthorizedAccess = (<div></div>);

                // formatting date
                const jsDate = new Date(rowDate);
                const dateFormatted = jsDate.toLocaleString("pt-br")
                fullDate = dateFormatted.substring(0, 10);
                hour = dateFormatted.substring(11, 19);

                return { fullDate: fullDate, hour: hour, collaborator_name: collaborator, isAuthorizedAccess: isAuthorizedAccess };
            });
        }

        return accessDataFormatted;
    }

    const columns = useMemo(
        () => [
            {
                Header: "Colaboradores",
                columns: [
                    {
                        Header: "Nome",
                        accessor: "name"
                    },
                    {
                        Header: "Email",
                        accessor: "email"
                    },
                    {
                        Header: "Setor",
                        accessor: "sector"
                    },
                    {
                        Header: "Data de nascimento",
                        accessor: "birth_date"
                    },
                    {
                        Header: "Tem acesso",
                        accessor: "has_access"
                    },
                    {
                        Header: "Ações",
                        accessor: "actions"
                    }
                ]
            }
        ],
        []
    );

    return (
        <Layout>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <BreadCrumb
                    name='Lista de colaboradores'
                    icon='faList'
                />
                <GenericTable
                    columns={columns}
                    // data={formatAccessData(accessdata)}
                    data={getData(USERS_MOCk_DATA)}
                />
            </div>
        </Layout>
    )
}