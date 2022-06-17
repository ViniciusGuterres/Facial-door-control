import { React, useMemo, useEffect, useState } from "react";


// AXIOS api
import { getAllAccessData } from '../javascriptTemp/api';

// Components
import GenericTable from "../components/GenericTable";
import Layout from '../components/Layout';
import BreadCrumb from "../components/BreadCrumb";
import Notification from "../components/Notification";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function UsersList() {
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

                // set authorized access as icon for denied or allowed
                if (data.authorized_access) {
                    isAuthorizedAccess = authorizedAccessIcon;
                } else {
                    isAuthorizedAccess = unauthorizedAccessIcon;
                }

                return { fullDate: fullDate, hour: hour, collaborator_name: collaborator, isAuthorizedAccess: isAuthorizedAccess };
            });
        }

        return accessDataFormatted;
    }

    const columns = useMemo(
        () => [
            {
                Header: "Histórico de Acessos",
                columns: [
                    {
                        Header: "Data",
                        accessor: "fullDate"
                    },
                    {
                        Header: "hora",
                        accessor: "hour"
                    },
                    {
                        Header: "Colaborador",
                        accessor: "collaborator_name"
                    },
                    {
                        Header: "Acesso autorizado",
                        accessor: "isAuthorizedAccess"
                    }
                ]
            }
        ],
        []
    );

    return (
        <Layout>

            <Notification
                title={'Acesso permitido'}
                subtitle='Acesso permitido'
                type={'sucess'}
            />

            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <BreadCrumb
                    name='Lista de usuários'
                    icon='faList'
                />
                <GenericTable
                    columns={columns}
                    data={formatAccessData(accessdata)}
                />
            </div>
        </Layout>
    )
}