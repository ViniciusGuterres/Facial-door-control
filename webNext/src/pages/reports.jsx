import React, { useState } from "react";

// Components
import BreadCrumb from "../components/BreadCrumb";
import Layout from '../components/Layout';
import Notification from '../components/Notification';

import { generatedReportCont } from '../javascriptTemp/api';

import PDFReport from '../components/PDFReport.jsx';

const USERS_MOCk_DATA = [
    {
        date: '2022-11-28 19:20:28.000',
        collaborator_name: 'Vinicius',
        authorized_access: true,
    },
    {
        date: '2022-11-28 17:20:28.000',
        collaborator_name: 'Felipe',
        authorized_access: true,
    },
    {
        date: '2022-07-25 19:40:28.000',
        collaborator_name: 'Roberto',
        authorized_access: false,
    },
    {
        date: '2022-07-25 19:20:28.000',
        collaborator_name: 'Felipe',
        authorized_access: true,
    },
    {
        date: '2022-07-25 19:10:28.000',
        collaborator_name: 'Maria',
        authorized_access: false,
    },
    {
        date: '2022-07-25 12:20:28.000',
        collaborator_name: 'Luiz',
        authorized_access: false,
    },
    {
        date: '2022-07-25 07:20:28.000',
        collaborator_name: 'Roberval',
        authorized_access: false,
    },
    {
        date: '2022-07-21 22:20:28.000',
        collaborator_name: 'Felipe',
        authorized_access: true,
    }
];

export default function reports() {
    const [initDate, setInitDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isShowingReport, setIsShowingReport] = useState(false);
    const [reportData, setReportData] = useState([]);

    const styles = {
        formContainer: {
            width: '500px',
            boxShadow: '1px 5px 16px 4px rgb(0 0 0 / 20%)',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '20px'
        },
        inputDefaultStyle: {
            width: '100%',
            height: '40px',
            borderRadius: '3px',
            paddingLeft: '10px',
            border: '1px solid #52525224',
            paddingRight: '10px'
        },
        buttonContainer: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonDefaultStyle: {
            height: '42px',
            width: '100%',
            background: 'red',
            color: '#fff',
            background: '#06449b',
        },
        labelDefaultStyle: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '15px',
            color: '#525252',
            height: 'auto'
        },
    }

    const handleChangeInitDate = (event) => {
        const value = event.target.value;

        setInitDate(value);
    };

    const handleChangeEndDate = (event) => {
        const value = event.target.value;

        setEndDate(value);
    };

    const generatedReport = () => {
        setIsShowingReport(true);

        generatedReportCont('http://localhost:8080/generatedAccessReport', { initDate, endDate })
            .then(res => {
                console.log('response::: ', res);
            });
    }

    const buildForm = (
        <form style={styles.formContainer}>
            <label style={styles.labelDefaultStyle}>
                Data início do relatório
            </label>
            <input
                type="date"
                value={initDate}
                onChange={event => handleChangeInitDate(event)}
                style={styles.inputDefaultStyle}
            />

            <label style={styles.labelDefaultStyle}>
                Data fim do relatório
            </label>

            <input
                type="date"
                value={endDate}
                onChange={event => handleChangeEndDate(event)}
                style={styles.inputDefaultStyle}
            />


            {/* Submit button */}
            <div style={styles.buttonContainer}>
                <button
                    type="button"
                    style={styles.buttonDefaultStyle}
                    onClick={() => {
                        generatedReport()
                    }}
                >
                    Gerar relatório
                </button>
            </div>
        </form>
    );

    return (
        <Layout>
            <div style={{ width: '100%' }}>
                <BreadCrumb
                    name='Relatórios de acessos'
                    icon='faPen'
                />

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    {
                        isShowingReport
                            ?
                            < PDFReport
                                data={USERS_MOCk_DATA}
                            />
                            :
                            buildForm
                    }
                </div>
            </div>
        </Layout>
    )
}