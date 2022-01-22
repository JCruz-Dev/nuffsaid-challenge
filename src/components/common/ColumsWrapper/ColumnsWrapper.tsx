import generateMessage, { Message } from 'Api';
import { AppContext } from 'context/AppContext';
import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Column } from '../Column';

const GridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 1rem;
`;
const ColumnsWrapper: FC = () => {
    const { messages, setMessages, showMessages } = useContext(AppContext);
    useEffect(() => {
        const cleanUp = generateMessage((message: Message) => {
            showMessages &&
                setMessages((oldMessages) => [...oldMessages, message]);
        });
        return cleanUp;
    }, [setMessages, showMessages]);

    return (
        <>
            <GridStyled>
                <Column
                    titleMessage='Error Type 1'
                    message={messages}
                    messageType='error'
                    priority={0}
                />
                <Column
                    titleMessage='Warning Type 2'
                    message={messages}
                    messageType='warning'
                    priority={1}
                />
                <Column
                    titleMessage='Info Type 3'
                    message={messages}
                    messageType='info'
                    priority={2}
                />
            </GridStyled>
        </>
    );
};

export default ColumnsWrapper;
