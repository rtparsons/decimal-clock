import { render, screen } from '@testing-library/react';
import TwelveHourTimeDisplay from './TwelveHourTimeDisplay';
import React from 'react';

test('renders midnight', () => {
    const testDate = new Date(2020, 1, 1, 0, 0, 0, 0);
    render(<TwelveHourTimeDisplay date={testDate} />);
    const timeElement = screen.getByText('12:00:00 AM');
    expect(timeElement).toBeInTheDocument();
});

test('renders am', () => {
    const testDate = new Date(2020, 1, 1, 1, 1, 1, 0);
    render(<TwelveHourTimeDisplay date={testDate} />);
    const timeElement = screen.getByText('1:01:01 AM');
    expect(timeElement).toBeInTheDocument();
});

test('renders midday', () => {
    const testDate = new Date(2020, 1, 1, 12, 2, 1, 0);
    render(<TwelveHourTimeDisplay date={testDate} />);
    const timeElement = screen.getByText('12:02:01 PM');
    expect(timeElement).toBeInTheDocument();
});

test('renders pm', () => {
    const testDate = new Date(2020, 1, 1, 13, 13, 13, 0);
    render(<TwelveHourTimeDisplay date={testDate} />);
    const timeElement = screen.getByText('1:13:13 PM');
    expect(timeElement).toBeInTheDocument();
});