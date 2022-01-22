import { Message } from 'Api';
import { AppContext } from 'context/AppContext';
import { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { renderColor } from 'utils/renderColor';
import { ColumnItem } from '../ColumnItem';
import { ColumnProps } from './type';

const ColumnStyled = styled.div`
    width: 100%;
    max-height: 500px;
    overflow-y: auto;
    scrollbar-width: thin;
    p {
        margin-bottom: 0.5rem;
    }
`;
const Column: FC<ColumnProps> = ({ titleMessage, message, priority }) => {
    const [columnMessage, setColumnMessage] = useState<Message[]>([]);
    const { messages, setMessages } = useContext(AppContext);

    const handleDeleteItem = (message: string) => {
        const newMessages = messages.filter((item) => item.message !== message);
        setMessages(newMessages);
    };
    useEffect(() => {
        setColumnMessage(message.filter((msg) => msg.priority === priority));
    }, [message, priority]);

    return (
        <ColumnStyled>
            <h2>{titleMessage}</h2>
            <p>Count: {columnMessage.length}</p>
            {message
                .filter((msg) => msg.priority === priority)
                .map((msg: Message) => (
                    <ColumnItem
                        key={msg.message}
                        color={`${renderColor(priority)}`}
                        customFunction={() => handleDeleteItem(msg.message)}
                    >
                        {msg.message}
                    </ColumnItem>
                ))}
        </ColumnStyled>
    );
};

export default Column;
