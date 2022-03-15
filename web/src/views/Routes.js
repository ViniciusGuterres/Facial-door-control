import {
    Switch,
    Route,
} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard.jsx';
import EditEmployees from './EditEmployees.jsx';

import EmployeeRegistration from './EmployeeRegistration.jsx';
import EmployeesTable from './EmployeesTable.jsx';
import violationsHistory from './violationsHistory.jsx';

// Views

export default function Routes() {
    return (
        <Switch>
            <Route path='/' component={Dashboard} exact/>
            <Route path='/cadastroFuncionario' component={EmployeeRegistration}/>
            <Route path='/listaDeFuncionarios' component={EmployeesTable} />
            <Route path='/editarFuncionario' component={EditEmployees} />
            <Route path='/historicoDeViolacoes' component={violationsHistory} />
        </Switch>
    )
}