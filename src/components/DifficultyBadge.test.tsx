import { render, screen } from "@testing-library/react";
import { DifficultyBadge } from "./DifficultyBadge";

describe("DifficultyBadge", () => {
  it("renders easy label", () => {
    render(<DifficultyBadge difficulty="easy" />);
    expect(screen.getByText("かんたん")).toBeInTheDocument();
  });

  it("renders medium label", () => {
    render(<DifficultyBadge difficulty="medium" />);
    expect(screen.getByText("ふつう")).toBeInTheDocument();
  });

  it("renders hard label", () => {
    render(<DifficultyBadge difficulty="hard" />);
    expect(screen.getByText("むずかしい")).toBeInTheDocument();
  });
});
