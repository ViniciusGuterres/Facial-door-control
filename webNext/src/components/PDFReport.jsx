import { React, useMemo, useEffect, useState } from "react";

import GenericTable from "../components/GenericTable";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// Create Document Component
export default function PDFReport(props) {
    // globals const
    const authorizedAccessIcon = <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} />;
    const unauthorizedAccessIcon = <FontAwesomeIcon icon={faBan} style={{ color: 'red' }} />;

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

    return (
        <div>
            <GenericTable
                columns={columns}
                data={formatAccessData(props.data)}
            />
        </div>
    )
};
