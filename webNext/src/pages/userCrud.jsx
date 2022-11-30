import React, { useState } from "react";

// Components
import BreadCrumb from "../components/BreadCrumb";
import Layout from '../components/Layout';
import Notification from '../components/Notification';

export default function userCrud() {
    const [employeeName, setEmployeeName] = useState('');
    const [employeeRole, setEmployeeRole] = useState('');

    const [employeeEmail, setEmployeeEmail] = useState('');
    const [employeeHaveAccess, setEmployeeHaveAccess] = useState(false);
    const [employeeBirth, setEmployeeBirth] = useState(null);

    const [isShowingNotification, setIsShowingNotification] = useState(false);

    // Change inputs functions
    const handleChangeEmployeeNameInput = event => {
        setEmployeeName(event.target.value);
    }

    const handleChangeEmployeeBirthInput = event => {
        setEmployeeBirth(event.target.value);
    }

    const handleChangeEmployeeRoleInput = event => {
        setEmployeeRole(event.target.value);
    }

    const handleChangeEmployeeEmailInput = event => {
        setEmployeeEmail(event.target.value);
    }

    const activePhotoMode = () => {
        setPhotoMode(true);
    }

    const saveUser = () => {
        setEmployeeName('');
        setEmployeeBirth(null);
        setEmployeeEmail('');
        setEmployeeHaveAccess(false);
        setIsShowingNotification(true);
    }

    const form = () => {
        const styles = {
            mainContainer: {
                // height: '520px',
                width: '500px',
                boxShadow: '1px 5px 16px 4px rgb(0 0 0 / 20%)',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            },
            fieldRowContainer: {
                display: 'flex',
                flexDirection: 'column',
                height: 'auto',
                gap: '10px'
            },
            inputsContainer: {
                padding: '20px',
            },
            fieldRowContainer: {
                display: 'flex',
                flexDirection: 'column',
                height: 'auto',
                gap: '10px'
            },
            labelDefaultStyle: {
                display: 'flex',
                alignItems: 'center',
                fontSize: '15px',
                color: '#525252',
                height: 'auto'
            },
            inputDefaultStyle: {
                width: '100%',
                height: '40px',
                borderRadius: '3px',
                paddingLeft: '10px',
                border: '1px solid #52525224',
                paddingRight: '10px'
            },
            checkBoxContainer: {
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                height: 'auto '
            },
            checkboxDefaultStyle: {
                cursor: 'pointer',
                height: '15px',
                width: '15px'
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
            }
        };

        return (
            <div style={styles.mainContainer}>
                <div style={styles.inputsContainer}>
                    {/* Email */}
                    <div style={styles.fieldRowContainer}>
                        <label style={styles.labelDefaultStyle}>
                            Email
                        </label>

                        <input
                            placeholder="Insira o email"
                            id="inline-full-name"
                            type="email"
                            value={employeeEmail}
                            onChange={event => handleChangeEmployeeEmailInput(event)}
                            style={styles.inputDefaultStyle}
                        />
                    </div>

                    {/* Name */}
                    <div style={styles.fieldRowContainer}>
                        <label
                            style={styles.labelDefaultStyle}>
                            Nome completo
                        </label>

                        <input
                            id="inline-full-name"
                            type="text"
                            placeholder="Insira o nome"
                            value={employeeName}
                            onChange={event => handleChangeEmployeeNameInput(event)}
                            style={styles.inputDefaultStyle}
                        />
                    </div>


                    {/* Birth date */}
                    <div style={styles.fieldRowContainer}>
                        <div >
                            <label style={styles.labelDefaultStyle}>
                                Data de nascimento
                            </label>

                            <input
                                type="date"
                                value={employeeBirth}
                                onChange={event => handleChangeEmployeeBirthInput(event)}
                                style={styles.inputDefaultStyle}
                            />
                        </div>
                    </div>

                    {/* Office_role */}
                    <div style={styles.fieldRowContainer}>
                        <label
                            style={styles.labelDefaultStyle}>
                            Cargo
                        </label>

                        <input
                            id="inline-full-name"
                            type="text"
                            placeholder="Insira o cargo"
                            value={employeeRole}
                            onChange={event => handleChangeEmployeeRoleInput(event)}
                            style={styles.inputDefaultStyle}
                        />
                    </div>

                    {/* Setor */}
                    <div style={styles.fieldRowContainer}>
                        <label style={styles.labelDefaultStyle}>
                            Setor
                        </label>

                        <select
                            id="grid-state"
                            style={styles.inputDefaultStyle}
                        >
                            <option
                                selected
                            >
                                Selecione um setor
                            </option>
                            <option>RH</option>
                            <option>TI</option>
                            <option>Engenharia</option>
                            <option>ADM</option>
                            <option>Logística</option>
                        </select>
                    </div>

                    {/* Setor */}
                    <div style={styles.fieldRowContainer}>
                        <label style={styles.labelDefaultStyle}>
                            Nível de acesso
                        </label>

                        <select
                            id="grid-state"
                            style={styles.inputDefaultStyle}
                        >
                            <option
                                selected
                            >
                                Selecione um nível de acesso
                            </option>
                            <option>Operacional</option>
                            <option>Analista</option>
                            <option>Administrador</option>
                        </select>
                    </div>
                </div>

                {/* Submit button */}
                <div style={styles.buttonContainer}>
                    <button
                        type="button"
                        style={styles.buttonDefaultStyle}
                        onClick={() => {
                            saveUser()
                        }}
                    >
                        Cadastrar
                    </button>
                </div>
            </div >
        )
    };

    return (
        <Layout>
            <div style={{ width: '100%' }}>
                <BreadCrumb
                    name='Cadastro de usuário'
                    icon='faPen'
                />

                {
                    isShowingNotification
                        ?
                        <Notification
                            title={'Sucesso'}
                            subtitle='Cadastro efetuado com sucesso'
                            type={'sucess'}
                        />
                        :
                        null
                }

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    {form()}
                </div>
            </div>
        </Layout>
    )
}