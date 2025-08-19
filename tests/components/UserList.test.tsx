import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should show placeholder when there are no users", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should render a list of users as links", () => {
    const users: User[] = [
      { id: 1, name: "Ahsan" },
      { id: 2, name: "Zara" },
    ];

    render(<UserList users={users} />);
    const list = screen.getByRole("list");
    const links = screen.getAllByRole("link");

    expect(list).toBeInTheDocument();
    expect(links).toHaveLength(users.length);

    // assert each user link exists and has the expected href
    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
