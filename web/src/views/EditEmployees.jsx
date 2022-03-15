import EditInformationsForm from '../components/editInformationsForm/EditInformationsForm.jsx';

export default function EditEmployees(props) {

    return (
        <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center', height: '100%'}}>
            <EditInformationsForm
                style={{height: '100%', width: '100%'   }}
                title={'Editar colaborador'}
                // submitDatas={() => {}}

                formContents={
                    [
                        {
                            label: 'Matricula*',
                            inputType: 'text',
                            keyName: 'registry',
                            currentValue: 'test_mat'
                        },
                        {
                            label: 'Nome*',
                            inputType: 'text',
                            keyName: 'name',
                            currentValue: 'test_nome'
                        },
                        {
                            label: 'Nascimento',
                            inputType: 'text',
                            keyName: 'birthDate',
                            currentValue: 'test_nasc'
                        },
                        {
                            label: 'Setor*',
                            inputType: 'text',
                            keyName: 'department',
                            currentValue: 'test_depart'
                        },
                        {
                            label: 'Grupo de risco',
                            inputType: 'checkbox',
                            keyName: 'riskGroup',
                            currentValue: 'test_risk_group'
                        },
                        {
                            label: 'Positivo para covid',
                            inputType: 'checkbox',
                            keyName: 'riskGroup',
                            currentValue: 'test_covid'
                        },
                    ]
                }
            />
        </div>
    )
}