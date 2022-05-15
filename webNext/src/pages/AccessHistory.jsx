import { React, useMemo } from "react";
import BreadCrumb from "../components/BreadCrumb";

// Components
import GenericTable from "../components/GenericTable";
import Layout from '../components/Layout';

export default function AccessHistory() {
    const columns = useMemo(
        () => [
            {
                Header: "Histórico de violações",
                columns: [
                    {
                        Header: "Data",
                        accessor: "date"
                    },
                    {
                        Header: "hora",
                        accessor: "hour"
                    },
                    {
                        Header: "Colaborador",
                        accessor: "department"
                    },
                    {
                        Header: "Acesso autorizado",
                        accessor: "maskIcon"
                    }
                ]
            }
        ],
        []
    );

    return (
        <Layout>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <BreadCrumb
                    name='Histórico de acessos'
                    icon='faHistory'
                />

                <GenericTable
                    columns={columns}
                    data={[]}
                />
            </div>
        </Layout>
    )
}