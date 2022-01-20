import { AppBar } from '@material-ui/core';
import { FC } from 'react';
import styled from 'styled-components';
import { HeaderProps } from './type';

const HeaderStyled = styled(AppBar)`
    border-bottom: 1px solid black;
    &.MuiPaper-elevation4 {
        box-shadow: none;
    }
    &.MuiAppBar-colorPrimary {
        color: black;
        background-color: #ffff;
    }
    h1 {
        font-weight: normal;
        margin: 0.5rem;
    }
`;
const Header: FC<HeaderProps> = ({ text }) => {
    return (
        <HeaderStyled data-testid='header'>
            <h1>{text}</h1>
        </HeaderStyled>
    );
};

export default Header;
