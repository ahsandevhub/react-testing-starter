import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  const baseUser: User = { name: "Ahsan", isAdmin: false } as User;

  it("should render user name", () => {
    render(<UserAccount user={baseUser} />);
    expect(screen.getByText(/name:/i)).toBeInTheDocument();
    expect(screen.getByText("Ahsan")).toBeInTheDocument();
  });

  it("should not render Edit button for non-admin", () => {
    render(<UserAccount user={baseUser} />);
    expect(
      screen.queryByRole("button", { name: /edit/i })
    ).not.toBeInTheDocument();
  });

  it("should render Edit button for admin", () => {
    const adminUser = { ...baseUser, isAdmin: true };
    render(<UserAccount user={adminUser} />);
    expect(screen.getByRole("button", { name: /edit/i })).toBeInTheDocument();
  });
});
