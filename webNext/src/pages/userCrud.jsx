import React, { useState } from "react";

// Components
import BreadCrumb from "../components/BreadCrumb";
import Layout from '../components/Layout';
import WebcamCapture from '../components/WebcamCapture';

export default function userCrud() {
    const [employeeName, setEmployeeName] = useState('');
    const [employeeBirth, setEmployeeBirth] = useState(null);
    const [employeeEmail, setEmployeeEmail] = useState('');
    const [employeeHaveAccess, setEmployeeHaveAccess] = useState(false);

    // Change inputs functions
    const handleChangeEmployeeNameInput = event => {
        setEmployeeName(event.target.value);
    }

    const handleChangeEmployeeBirthInput = event => {
        setEmployeeBirth(event.target.value);
    }

    const handleChangeEmployeeEmailInput = event => {
        setEmployeeEmail(event.target.value);
    }

    const toggleEmployeeHaveAccessInput = () => {
        setEmployeeHaveAccess(!employeeHaveAccess);
    }

    const form = () => {
        return (
            <form
                style={{ 
                    height: '100px',
                    border: '1px solid black' 
                }}
            >
                {/* Name */}
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Nome
                        </label>
                    </div>

                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Insira o nome"
                            value={employeeName}
                            onChange={event => handleChangeEmployeeNameInput(event)}
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Email
                        </label>
                    </div>

                    <div className="md:w-2/3">
                        <input
                            placeholder="Insira o email"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="email"
                            value={employeeEmail}
                            onChange={event => handleChangeEmployeeEmailInput(event)}
                        />
                    </div>
                </div>

                {/* Setor */}
                <div className="md:flex md:items-center mb-6">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Setor
                    </label>

                    <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                    >
                        <option>RH</option>
                        <option>TI</option>
                        <option>Engenharia</option>
                        <option>ADM</option>
                        <option>Logística</option>
                    </select>
                </div>

                {/* Birth Date */}
                <div className="flex items-center justify-center mb-6">
                    <div className="datepicker relative form-floating mb-3 xl:w-96">
                        <input
                            type="date"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            value={employeeBirth}
                            onChange={event => handleChangeEmployeeBirthInput(event)}
                        />
                        <label for="floatingInput" className="text-gray-700">Insira a data de nascimento</label>
                    </div>
                </div>

                {/* Have access */}
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3"></div>
                    <label className="md:w-2/3 block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight cursor-pointer"
                            checked={employeeHaveAccess}
                            type="checkbox"
                            onClick={() => toggleEmployeeHaveAccessInput()}
                        />

                        <span className="text-sm">
                            Tem acesso
                        </span>
                    </label>
                </div>

                <WebcamCapture />

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Cadastrar
                        </button>
                    </div>
                </div>
            </form>
        )
    };

    return (
        <Layout>
            <div>
                <BreadCrumb
                    name='Cadastro de usuário'
                    icon='faPen'
                />

                <div style={{ height: '100%', widgth: '100%' }}>
                    {form()}
                </div>
            </div>
        </Layout>
    )
}