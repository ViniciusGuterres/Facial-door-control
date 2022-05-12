import { React, useMemo } from "react";

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
                        Header: "Setor",
                        accessor: "department"
                    },
                    {
                        Header: "Violação",
                        accessor: "maskIcon"
                    }
                ]
            }
        ],
        []
    );

    return (
        <Layout>
            Historico de acessos

            <GenericTable
                columns={columns}
                data={[]}
            />
        </Layout>
    )
}