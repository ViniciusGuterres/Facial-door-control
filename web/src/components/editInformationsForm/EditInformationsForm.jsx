import React from 'react';
import { saveFormInputs } from '../../javascript/crud';

import {registreEmployeeUrl} from '../../constants/index.js';

import styledComponents from './EditInformationsForm.js';

const {
    Form,
    InputContainer,
    InputRowContainer,
    Label,
    Input,
    TitleContainer,
    InputCheckboxRowContainer,
    InputCheckbox,
    ButtonSubmit
} = styledComponents

/**
 * @function EditInformationsForm - Form with configurable labels and inputs type
 * @param {*} props 
 * @returns - node element
 */
export default class EditInformationsForm extends React.Component {

    constructor(props) {
        super(props);

        this.formContents = props.formContents || [];
        this.title = props.title || '';

        this.initial = {};

        this.currentEmployeeData = this.props.formContents.map(item => {
            return {
                [item.keyName]: item.currentvalue
            }
        })

        // State
        this.state = {
            isUnlockedInput: false,
            inputsDatas: {}
        }

        this.cleanInputDatas = this.cleanInputDatas.bind(this);
    }

    handleInputChange(event, keyName, inputType) {
        // get the value of text or checkbox input types
        const value = inputType !== 'checkbox' ? event.target.value : event.target.checked;

        let test = { ...this.state.datas };
        test[keyName] = value;

        this.setState(prevState => ({
            inputsDatas: {
                ...prevState.inputsDatas,
                [keyName]: value
            }
        }))
    }

    unlockInput(event) {
        const eventOption = event.target || '';

        if (eventOption.options[eventOption.selectedIndex].value !== 'não tomou vacina') {
            this.setState({ isUnlockedInput: true })
        }
        if (eventOption.options[eventOption.selectedIndex].value === 'não tomou vacina') {
            this.setState({ isUnlockedInput: false })
        }

    }

    cleanInputDatas() {
        this.setState({
            inputsDatas: {...this.initial}
        });
    }

    layoutForCheckboxInput(inputType, label, keyName, currentValue, subKeyName, index) {

        switch (inputType) {
            case 'text':
                return (
                    <InputRowContainer key={`form-input: ${index}`}>
                        <Label>{label}</Label>

                        <Input
                            type={inputType}
                            onChange={event => this.handleInputChange(event, keyName)}
                            value={this.state.inputsDatas.keyName}
                            required
                        />
                    </InputRowContainer>
                )

            case 'checkbox':
                return (
                    <InputCheckboxRowContainer>
                        <Label>{label}</Label>

                        <InputCheckbox
                            type={inputType}
                            onChange={event => this.handleInputChange(event, keyName, inputType)}
                        />
                    </InputCheckboxRowContainer>
                )

            case 'vacina':
                return (
                    <div>
                        <InputCheckboxRowContainer>
                            <Label for="vacina">{label}</Label>

                            <select
                                name="vacina"
                                onChange={event => {
                                    this.unlockInput(event);
                                    this.handleInputChange(event, keyName);
                                }}
                            >
                                <option value="" selected disabled hidden>Selecione a vacina</option>
                                <option value="não tomou vacina">Não tomou vacina</option>
                                <option value="pfizer">Pfizer</option>
                                <option value="coronaVac">CoronaVac</option>
                                <option value="johnson">Johnson & Johnson</option>
                                <option value="astrazeneca">AstraZeneca</option>
                                <option value="sputinikv">Sputnix V</option>
                            </select>
                        </InputCheckboxRowContainer>

                        {
                            this.state.isUnlockedInput
                                ?
                                <InputCheckboxRowContainer>
                                    <Label for="dose">Dose</Label>

                                    <select
                                        name="dose"
                                        label="tes"
                                        onChange={event => this.handleInputChange(event, subKeyName)}
                                    >
                                        <option value="" selected disabled hidden>Selecione a dose</option>
                                        <option value="1°">1°</option>
                                        <option value="2°">2°</option>
                                    </select>
                                </InputCheckboxRowContainer>
                                : null
                        }
                    </div>
                )

            default:
                return null;
        }

    }

    renderInputs() {

        return this.formContents.map((content, index) => {
            const label = content.label || '';
            const inputType = content.inputType || '';
            const keyName = content.keyName || '';
            const subKeyName = content.subKeyName || '';
            const currentValue = content.currentValue || '';

            return (
                <>
                    {this.layoutForCheckboxInput(inputType, label, keyName, currentValue, subKeyName, index)}
                </>
            )
        })

    };

    render() {
        console.log('TEST', this.currentEmployeeData);
        return (
            <div>
                <Form>
                    <TitleContainer>
                        <span>{this.title}</span>
                    </TitleContainer>

                    <InputContainer>
                        {this.renderInputs()}
                    </InputContainer>

                    <ButtonSubmit
                        type="submit"
                        onClick={(event) => {
                            event.preventDefault();
                            this.cleanInputDatas();                            
                            // Will make a http req to save the form
                            this.props.showNotificationCard()
                            this.props.exitNotificationCard()
                            saveFormInputs(registreEmployeeUrl, this.state.inputsDatas);
                        }}
                    >
                        {this.props.submitButtonName || 'Enviar'}
                    </ButtonSubmit>
                </Form>
            </div>
        )
    }
}