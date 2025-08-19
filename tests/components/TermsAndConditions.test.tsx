import { fireEvent, render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";

describe("TermsAndConditions", () => {
  it("renders heading, checkbox and disabled submit by default", () => {
    render(<TermsAndConditions />);

    const heading = screen.getByRole("heading", {
      name: /terms & conditions/i,
    });
    const checkbox = screen.getByLabelText(
      /i accept the terms and conditions\./i
    );
    const button = screen.getByRole("button", { name: /submit/i });

    expect(heading).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("enables the submit button when checkbox is checked and disables when unchecked", () => {
    render(<TermsAndConditions />);

    const checkbox = screen.getByLabelText(
      /i accept the terms and conditions\./i
    );
    const button = screen.getByRole("button", { name: /submit/i });

    // check -> enabled
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();

    // uncheck -> disabled
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });
});
