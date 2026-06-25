import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import App from "./App";

describe("App", () => {
  it("renders the React frontend workflow", () => {
    render(<App />);

    expect(screen.getByText("BuildNow")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Vite")).toBeInTheDocument();
    expect(screen.getByText("Vitest")).toBeInTheDocument();
  });
});
