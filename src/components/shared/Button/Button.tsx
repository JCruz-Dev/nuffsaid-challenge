import { Button } from '@material-ui/core';
import { FC } from 'react';
import styled from 'styled-components';
import { ButtonProps } from './type';

const ButtonStyled = styled(Button)`
    &.MuiButton-root {
        font-weight: bold;
        min-width: none;
        width: 94px;
    }
    &.MuiButton-contained {
        background-color: #88fca3;
        &:hover {
            background-color: #44df68;
        }
    }
`;
const ButtonElement: FC<ButtonProps> = ({ text, customFunction, testid }) => {
    return (
        <ButtonStyled
            variant='contained'
            onClick={customFunction}
            data-testid={testid}
        >
            {text}
        </ButtonStyled>
    );
};

export default ButtonElement;
