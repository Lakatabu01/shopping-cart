import { render, screen } from "@testing-library/react";
import App from "./App";

test("everything rendered on the app", () => {
  const { app } = render(<App />);
  expect(app).toMatchSnapshot();
});
