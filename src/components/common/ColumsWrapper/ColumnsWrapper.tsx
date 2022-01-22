import generateMessage, { Message } from 'Api';
import { Notification } from 'components/shared/Notification';
import { AppContext } from 'context/AppContext';
import { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Column } from '../Column';

const GridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    padding: 1rem;
`;
const ColumnsWrapper: FC = () => {
    const { messages, setMessages, showMessages } = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState<Message[]>([]);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const cleanUp = generateMessage((message: Message) => {
            showMessages &&
                setMessages((oldMessages) => [...oldMessages, message]);
        });
        return cleanUp;
    }, [setMessages, showMessages]);

    useEffect(() => {
        if (messages[messages.length - 1]?.priority === 0) {
            setErrors(messages.filter((message) => message.priority === 0));
            setOpen(true);
        }
    }, [messages]);

    return (
        <>
            {open && (
                <Notification
                    message={errors[errors.length - 1].message}
                    open={open}
                    customClose={handleClose}
                />
            )}
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
