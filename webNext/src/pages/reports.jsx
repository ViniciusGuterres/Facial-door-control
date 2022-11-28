import React, { useState } from "react";

// Components
import BreadCrumb from "../components/BreadCrumb";
import Layout from '../components/Layout';
import Notification from '../components/Notification';

export default function reports() {
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

    return (
        <Layout>
            <div style={{ width: '100%' }}>
                <BreadCrumb
                    name='Relatórios de acessos'
                    icon='faPen'
                />

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <form style={styles.formContainer}>
                        <label style={styles.labelDefaultStyle}>
                            Data início do relatório
                        </label>
                        <input
                            type="date"
                            value={''}
                            onChange={event => handleChangeEmployeeBirthInput(event)}
                            style={styles.inputDefaultStyle}
                        />

                        <label style={styles.labelDefaultStyle}>
                            Data fim do relatório
                        </label>

                        <input
                            type="date"
                            value={''}
                            onChange={event => handleChangeEmployeeBirthInput(event)}
                            style={styles.inputDefaultStyle}
                        />


                        {/* Submit button */}
                        <div style={styles.buttonContainer}>
                            <button
                                type="button"
                                style={styles.buttonDefaultStyle}
                                onClick={() => {
                                    saveUser()
                                }}
                            >
                                Gerar relatório
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}