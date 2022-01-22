import ButtonContainer from 'components/shared/ButtonContainer';
import Container from 'components/shared/Container';
import { FC } from 'react';
import { ColumnsWrapper } from '../ColumsWrapper';

const Main: FC = () => {
    return (
        <Container>
            <ButtonContainer />
            <ColumnsWrapper />
        </Container>
    );
};

export default Main;
