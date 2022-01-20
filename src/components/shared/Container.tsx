import { FC } from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`;
const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
