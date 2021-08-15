import React from 'react';
import { render, screen } from '@testing-library/react';
import { DecimalTimeDisplay } from './DecimalTimeDisplay';

test('renders midnight', () => {
    const testDate = new Date(2020, 1, 1, 0, 0, 0, 0);
    render(<DecimalTimeDisplay date={testDate} />);
    const dateElement = screen.getByText('00:00:00');
    expect(dateElement).toBeInTheDocument();
});

test('renders time', () => {
    const testDate = new Date(2020, 1, 1, 17, 3, 38, 11);
    render(<DecimalTimeDisplay date={testDate} />);
    const dateElement = screen.getByText('07:10:85');
    expect(dateElement).toBeInTheDocument();
});
