import { render, screen } from "@testing-library/react";
import { Header } from "./header";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Ensure links render the right component", () => {
  it("ensure store link is present to navigate to its url", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );

    const storeLink = screen.getByText("Store");
    userEvent.click(storeLink);

    expect(storeLink).toBeInTheDocument();
  });

  it("ensure about link is present to navigate to its url", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );

    const aboutLink = screen.getByText("About");
    userEvent.click(aboutLink);

    expect(aboutLink).toBeInTheDocument();
  });

  it("ensure home link is present to navigate to its url", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByText("Home");
    userEvent.click(homeLink);

    expect(homeLink).toBeInTheDocument();
  });

  test("contains child elements", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByTestId("test-app")).toHaveClass("link");
  });
});
