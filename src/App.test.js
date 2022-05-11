import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

test('render container for calculator', () => {
    render(<App/>);
    const calculatorContainer = screen.getByRole(/calculator-container/i);
    expect(calculatorContainer).toBeInTheDocument();

    const logo = screen.getByAltText(/equal experts/i);
    expect(logo).toBeInTheDocument();

    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(19);

    const errorText = screen.queryByText(/incorrect expression/i);
    expect(errorText).toHaveClass('hidden-error');
});

test('should not show error after correct operation', () => {
    render(<App/>);

    const digitButton = screen.getByText('1');
    expect(digitButton).toBeInTheDocument();

    const plusButton = screen.getByText('+');
    expect(plusButton).toBeInTheDocument();

    const equalButton = screen.getByText('=');
    expect(equalButton).toBeInTheDocument();

    const resultInput = screen.getByAltText(/operation result/i);
    expect(resultInput).toBeInTheDocument();

    userEvent.click(digitButton);
    userEvent.click(plusButton);
    userEvent.click(digitButton);
    userEvent.click(equalButton);
    expect(parseInt(resultInput.value)).toBeGreaterThanOrEqual(2);

    const errorText = screen.queryByText(/incorrect expression/i);
    expect(errorText).toHaveClass('hidden-error');
});

test('should show error after incorrect operation', () => {
    render(<App/>);

    const digitButton = screen.getByText('1');
    expect(digitButton).toBeInTheDocument();

    const plusButton = screen.getByText('+');
    expect(plusButton).toBeInTheDocument();

    const equalButton = screen.getByText('=');
    expect(equalButton).toBeInTheDocument();

    const resultInput = screen.getByAltText(/operation result/i);
    expect(resultInput).toBeInTheDocument();

    userEvent.click(digitButton);
    userEvent.click(plusButton);
    userEvent.click(plusButton);
    userEvent.click(plusButton);
    userEvent.click(digitButton);
    userEvent.click(equalButton);

    expect(parseInt(resultInput.value)).toBeNaN();

    const errorText = screen.queryByText(/incorrect expression/i);
    expect(errorText).toHaveClass('visible-error');
});
