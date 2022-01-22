import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { renderColor } from 'utils/renderColor';
import { Message } from '../../../Api';
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
    const handleDeleteItem = (message: string) => {
        setColumnMessage((selectedMessage) =>
            selectedMessage.filter((msg) => msg.message !== message)
        );
    };
    useEffect(() => {
        setColumnMessage(message.filter((msg) => msg.priority === priority));
    }, [message, priority]);

    return (
        <ColumnStyled>
            <h2>{titleMessage}</h2>
            <p>Count: {columnMessage.length}</p>
            {columnMessage.map((msg: Message) => (
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
