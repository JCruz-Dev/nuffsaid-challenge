import { Button } from '@material-ui/core';
import generateMessage, { Message } from 'Api';
import Container from 'components/shared/Container';
import { FC, useEffect, useState } from 'react';

const Main: FC<{}> = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [showMessages, setShowMessages] = useState<boolean>(false);

    useEffect(() => {
        const cleanUp = generateMessage((message: Message) => {
            showMessages &&
                setMessages((oldMessages) => [...oldMessages, message]);
        });
        return cleanUp;
    }, [setMessages, showMessages]);

    const handleShowMessage = () => {
        setShowMessages(!showMessages);
    };
    return (
        <Container>
            <Button variant='contained' onClick={handleShowMessage}>
                {showMessages ? 'Stop' : 'Start'}
            </Button>
            <Button variant='contained'>Clear</Button>
            <div>
                {messages?.map?.((msg) => (
                    <div key={msg?.message}>{msg?.message}</div>
                ))}
            </div>
        </Container>
    );
};

export default Main;
