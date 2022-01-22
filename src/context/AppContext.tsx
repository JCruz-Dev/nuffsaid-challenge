import { Message } from 'Api';
import React, { Dispatch, SetStateAction } from 'react';

export type ContextProps = {
    messages: Message[];
    setMessages: Dispatch<SetStateAction<Message[]>>;
    showMessages: boolean;
    setShowMessages: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = React.createContext<ContextProps>({
    messages: [],
    setMessages: () => {},
    showMessages: false,
    setShowMessages: () => {},
});

export const AppContextProvider: React.FC = ({ children }) => {
    const [messages, setMessages] = React.useState<Message[]>([]);
    const [showMessages, setShowMessages] = React.useState<boolean>(true);

    return (
        <AppContext.Provider
            value={{
                messages,
                setMessages,
                showMessages,
                setShowMessages,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
