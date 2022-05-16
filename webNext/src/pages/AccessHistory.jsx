import { React, useMemo, useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";

// AXIOS api
import { getAllAccessData } from '../javascriptTemp/api';

// Components
import GenericTable from "../components/GenericTable";
import Layout from '../components/Layout';

export default function AccessHistory() {
    const [accessdata, setAccessData] = useState([]);

    // Geting all access and set at the tableDatas
    useEffect(() => {
        getAllAccessHistory();

    }, [accessdata]);

    function getAllAccessHistory() {
        getAllAccessData('http://localhost:3010/AccessHistory')
        .then(res => setAccessData(res))
    }

    console.log('accessdata::', accessdata)
    const columns = useMemo(
        () => [
            {
                Header: "Histórico de violações",
                columns: [
                    {
                        Header: "Data",
                        accessor: "df"
                    },
                    {
                        Header: "hora",
                        accessor: "data"
                    },
                    {
                        Header: "Colaborador",
                        accessor: "colaborador_nome"
                    },
                    {
                        Header: "Acesso autorizado",
                        accessor: "acesso_autorizado"
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
                    name='Histórico de acessos'
                    icon='faHistory'
                />

                <GenericTable
                    columns={columns}
                    data={accessdata}
                />
            </div>
        </Layout>
    )
}