import { render, screen } from "@testing-library/react";
import { Header } from "./header";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("./popup", () => {
  return function DummyPopup() {
    return <div data-testid="dummy-popup"></div>;
  };
});

describe("Ensure links render the right component", () => {
  it("should render a link to the store", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const storeLink = screen.getByRole("link", { name: "Store" });

    expect(storeLink).toBeInTheDocument();
    expect(storeLink.getAttribute("href")).toBe("/store");
  });

  it("should render about link to the store", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const aboutLink = screen.getByRole("link", { name: "About" });

    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink.getAttribute("href")).toBe("/about");
  });

  it("should render home link to the store", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: "Home" });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute("href")).toBe("/");
  });
});
