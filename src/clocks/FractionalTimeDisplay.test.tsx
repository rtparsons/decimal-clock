import React from 'react';
import { render, screen } from '@testing-library/react';
import FractionalTimeDisplay from './FractionalTimeDisplay';

test('renders midnight', () => {
    const testDate = new Date(2020, 1, 1, 0, 0, 0, 0);
    render(<FractionalTimeDisplay date={testDate} />);
    const dateElement = screen.getByText('0.00000');
    expect(dateElement).toBeInTheDocument();
});

test('renders time', () => {
    const testDate = new Date(2020, 1, 1, 17, 3, 38, 11);
    render(<FractionalTimeDisplay date={testDate} />);
    const dateElement = screen.getByText('0.71086');
    expect(dateElement).toBeInTheDocument();
});
