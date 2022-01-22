import { render, screen } from '@testing-library/react';
import { ColumnItem } from 'components/common/ColumnItem';
import { renderColor } from 'utils/renderColor';
import App from '../App';

test('renders learn react link', () => {
    const comp = render(<App />);
    expect(comp).toBeTruthy();
});

test('Button Changes its state', () => {
    render(<App />);
    const button = screen.getByTestId('emit');
    button.click();
    expect(button.textContent).toBe('Start');
});

describe('Card background change', () => {
    render(<ColumnItem color={`${renderColor(0)}`} />);
    const columnItem = screen.getByTestId('column-item');
    it('expect to have background of error color', () => {
        expect(columnItem).toHaveStyle(`background-color: #F56236`);
    });
});
