import { render, screen } from "@testing-library/react";
import App from "./App";

test('App contains a div with className "appHeader"', () => {
    render(<App />);
    const appDiv = screen.getByTestId("appHeader");
    expect(appDiv).toBeInTheDocument();
});
