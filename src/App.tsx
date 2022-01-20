import { Main } from 'components/common/Main';
import { Header } from 'components/ui/Header';
import { FC } from 'react';

const App: FC<{}> = () => {
    return (
        <>
            <Header text='nuffsaid.com Coding Challenge' />
            <Main />
        </>
    );
};

export default App;
