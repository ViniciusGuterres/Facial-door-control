import { useState } from 'react';
import GenericForm from '../components/genericForm/GenericForm.jsx';
import Notification from '../components/notification/index.jsx';

/**
 * @function EmployeeRegistration - View of the employee registration screen
 * @returns - node Element
 */
export default function EmployeeRegistration() {

    const [showNotification, setShowNotification] = useState(false);

    function showNotificationCard() {
        setShowNotification(true);
    }

    function exitNotificationCard() {
        setTimeout(() => {
            setShowNotification(false);
        }, 6000)
    }

    return (
        <div
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}
        >
            <GenericForm
                title={'Cadastro de colaborador'}
                submitDatas={() => console.log('submited')}
                submitButtonName="Cadastrar"
                showNotificationCard={showNotificationCard}
                exitNotificationCard={exitNotificationCard}
                formContents={
                    [
                        {
                            label: 'Matricula*',
                            inputType: 'text',
                            keyName: 'registry'
                        },
                        {
                            label: 'Nome*',
                            inputType: 'text',
                            keyName: 'name'
                        },
                        {
                            label: 'Nascimento',
                            inputType: 'text',
                            keyName: 'birthDate'
                        },
                        {
                            label: 'Setor*',
                            inputType: 'text',
                            keyName: 'department'
                        },
                        {
                            label: 'Grupo de risco',
                            inputType: 'checkbox',
                            keyName: 'riskGroup'
                        },
                        {
                            label: 'Vacina',
                            inputType: 'vacina',
                            keyName: 'vaccine',
                            subKeyName: 'dose'
                        },
                    ]
                }
            />

            {showNotification ?
                <Notification
                    type={'sucess'}
                    title={'Sucesso'}
                    subtitle={'Formulário enviado com sucesso'}
                /> :
                null
            }
        </div>
    )
};