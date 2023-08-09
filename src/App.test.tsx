import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import Users from "./components/Users";
import UserInfo from "./components/Users/UserInfo";

describe("UserSearch", () => {
  render(<App />);
  test("checking input", () => {
    const input = screen.getByPlaceholderText(/Name please/i);
    expect(input).toBeInTheDocument();
    userEvent.type(input, "name");
    expect(input).toHaveValue("name");
  });
  test("render Users", () => {
    const users = {
      id: 1,
      login: "John Doe",
      repos_url: "string",
      public_repos: 10,
      avatar_url: "string",
      html_url: "https://github.com/AuroraHolding",
    };
    render(<Users key={users.id} users={users} />);
    const t = screen.getByText(/John Doe/i);
    expect(t).toBeInTheDocument();
  });
  test("UserInfo checking the link click", () => {
    const users = {
      id: 1,
      login: "John Doe",
      repos_url: "string",
      public_repos: 10,
      avatar_url: "string",
      html_url: "https://github.com/AuroraHolding",
    };
    const setShow = () => {};
    render(<UserInfo setShow={setShow} user={users} />);
    const t: HTMLAnchorElement = screen.getByTestId(/html_url/i);
    expect(t).toBeInTheDocument();
    userEvent.click(t, { ctrlKey: true });
    expect(t.href).toContain("https://github.com/AuroraHolding");
  });
});

