import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

test('renders learn react link', () => {
    const comp = render(<App />);
    expect(comp).toBeTruthy();
});

test('Check Header is rendered', () => {
    render(<App />);
    const header = screen.getByTestId('header');
    expect(header).toBeTruthy();
});
