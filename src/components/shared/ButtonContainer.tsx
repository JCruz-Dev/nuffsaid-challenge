import { AppContext } from 'context/AppContext';
import { useContext } from 'react';
import styled from 'styled-components';
import ButtonElement from './Button/Button';

const ButtonContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 0.3rem;
    margin-bottom: 5rem; ;
`;
const ButtonContainer = () => {
    const { setMessages, showMessages, setShowMessages } =
        useContext(AppContext);

    const handleShowMessage = () => {
        setShowMessages(!showMessages);
    };
    const handleClearMessage = () => {
        setMessages([]);
    };
    return (
        <ButtonContainerStyled>
            <ButtonElement
                text={showMessages ? 'Stop' : 'Start'}
                customFunction={handleShowMessage}
                testid='emit'
            />
            <ButtonElement text='Clear' customFunction={handleClearMessage} />
        </ButtonContainerStyled>
    );
};

export default ButtonContainer;
