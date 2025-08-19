import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("renders greeting with name", () => {
    render(<Greet name="Ahsan" />);
    const heading = screen.getByRole("heading", { name: /hello ahsan/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders login button when name is empty", () => {
    render(<Greet />);
    const button = screen.getByRole("button", { name: /login/i });
    expect(button).toBeInTheDocument();
  });
});
