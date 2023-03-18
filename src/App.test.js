import { getByTestId, render, screen } from "@testing-library/react";
import App from "./App";

test("everything rendered on the app", () => {
  render(<App />);
  expect(screen.getByTestId("test-all")).toMatchSnapshot();
});
