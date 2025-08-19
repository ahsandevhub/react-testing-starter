import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("renders greeting with name", () => {
    render(<Greet name="Ahsan" />);
    expect(
      screen.getByRole("heading", { name: /hello ahsan/i })
    ).toBeInTheDocument();
  });

  it("renders login button when name is empty", () => {
    render(<Greet />);
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
