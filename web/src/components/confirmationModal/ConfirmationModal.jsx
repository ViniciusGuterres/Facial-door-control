import React from 'react';

import styledComponents from '../confirmationModal/ConfirmationModal';

const {
    Overlay,
    ModalContainer,
    Title,
    Description,
    ButtonsContainer,
    Button
} = styledComponents;

export default function ConfirmationModal(props) {

    return (
        <Overlay>
            <ModalContainer>
                <Title>Excluir funcionário</Title>

                <Description>Excluir o funcionário permanentemente ?</Description>

                <ButtonsContainer>
                    <Button
                        bgColor
                        onClick={() => props.confirm()}
                    >
                        Confirmar
                    </Button>

                    <Button
                        onClick={() => props.notConfirm()}
                    >
                        Cancelar
                    </Button>
                </ButtonsContainer>
            </ModalContainer>
        </Overlay>
    )
}