import { FC } from 'react';
import { Header } from './components/ui/Header';

const App: FC<{}> = () => {
    // const [messages, setMessages] = useState<Message[]>([]);

    // useEffect(() => {
    //     const cleanUp = generateMessage((message: Message) => {
    //         setMessages((oldMessages) => [...oldMessages, message]);
    //     });
    //     return cleanUp;
    // }, [setMessages]);

    return (
        <div>
            <Header text='nuffsaid.com Coding Challenge' />
            {/* {messages?.map?.(msg => <div key={msg?.message}>{msg?.message}</div>)} */}
        </div>
    );
};

export default App;
