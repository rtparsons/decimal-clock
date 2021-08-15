import { render, screen } from '@testing-library/react';
import TwentyFourHourTimeDisplay from './TwentyFourHourTimeDisplay';
import React from 'react';

test('renders midnight', () => {
    const testDate = new Date(2020, 1, 1, 0, 0, 0, 0);
    render(<TwentyFourHourTimeDisplay date={testDate} />);
    const timeElement = screen.getByText('00:00:00');
    expect(timeElement).toBeInTheDocument();
});

test('renders time', () => {
    const testDate = new Date(2020, 1, 1, 7, 2, 1, 0);
    render(<TwentyFourHourTimeDisplay date={testDate} />);
    const timeElement = screen.getByText('07:02:01');
    expect(timeElement).toBeInTheDocument();
});