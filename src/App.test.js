import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders page", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello my first app/i);
  expect(linkElement).toBeInTheDocument();
});
