import React from 'react';
import { render, screen } from '@testing-library/react';
import DateDisplay from './DateDisplay';

test('renders date', () => {
    const testDate = new Date(2020, 1, 1, 0, 0, 0, 0);
    render(<DateDisplay date={testDate} />);
    const dateElement = screen.getByText('Sat Feb 01 2020');
    expect(dateElement).toBeInTheDocument();
});