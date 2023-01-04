//Imports
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//To Test
import App from "../App";

describe("first test", () => {
  test("Renders main page correctly", async () => {
    // Setup
    render(<App />);

    const buttonCount = await screen.findByRole("button");

    //Pre validate
    expect(buttonCount.innerHTML).toBe("count is 0");

    // Execute
    fireEvent.click(buttonCount);

    await userEvent.click(buttonCount);
    //Validate
    expect(buttonCount.innerHTML).toBe("count is 2");
  });

  test("CodeCount Conditionally Renders", async () => {
    // Setup
    render(<App />);

    const buttonCount = await screen.findByRole("button");
    const codeCount = await screen.queryByText(/The count is now:/);
    //Pre validate
    expect(buttonCount.innerHTML).toBe("count is 0");
    expect(codeCount).not.toBeInTheDocument();
    // Execute
    fireEvent.click(buttonCount);
    fireEvent.click(buttonCount);
    //Validate
    const codeCount2 = await screen.queryByText(/The count is now:/);
    expect(buttonCount.innerHTML).toBe("count is 2");
    expect(codeCount2).toBeInTheDocument();
  });
});
