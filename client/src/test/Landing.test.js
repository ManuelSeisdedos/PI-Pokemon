import React from "react";
import { render, screen } from "@testing-library/react";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { BrowserRouter } from "react-router-dom";

it("it should render one <link/>", () => {
  render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
  expect(screen.getAllByRole("link")).toHaveLength(1);
});

it("it should render one <button/>", () => {
  render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
  expect(screen.getAllByRole("button")).toHaveLength(1);
});

it("The link change the route to /home", () => {
  render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
  expect(screen.getAllByRole("link")[0]).toHaveAttribute("href", "/home");
});
