import { Button, Card, CardActions } from '@material-ui/core';
import { FC } from 'react';
import styled from 'styled-components';
import { ColumnItemProps } from './type';

const ItemStyled = styled(Card)<{ background: string }>`
    display: flex;
    flex-direction: column;
    &.MuiPaper-root {
        background-color: ${(props) => props.background};
        margin-bottom: 1rem;
        height: auto;
        padding: 1rem 0 1rem 1rem;
    }
    .MuiCardActions-root {
        align-self: flex-end;
    }
    .MuiButton-label {
        text-transform: none;
    }
`;
const ColumnItem: FC<ColumnItemProps> = ({
    color,
    children,
    customFunction,
}) => {
    return (
        <ItemStyled background={`${color}`} data-testid='column-item'>
            {children}
            <CardActions>
                <Button
                    size='small'
                    className='button-card'
                    onClick={customFunction}
                >
                    Clear
                </Button>
            </CardActions>
        </ItemStyled>
    );
};

export default ColumnItem;
