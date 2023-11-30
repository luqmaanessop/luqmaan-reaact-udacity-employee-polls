import * as React from "react";
import NewPoll from "../components/NewPoll";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

afterEach(() => {
  cleanup(); // This will unmount the component and clear the DOM
});

describe("NewPoll", () => {
  test("should enable the submit button when both inputs have an input value", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPoll />
        </Provider>
      </MemoryRouter>
    );

    const inputOne = screen.getByTestId("firstOption");
    const inputTwo = screen.getByTestId("secondOption");
    const submitButton = screen.getByTestId("submit-poll");

    expect(submitButton).toHaveAttribute("disabled");

    fireEvent.change(inputOne, { target: { value: "first value" } });
    fireEvent.change(inputTwo, { target: { value: "second value" } });


    expect(inputOne.value).toBe('first value');
    expect(inputTwo.value).toBe('second value');
    expect(submitButton.textContent).toBe('Submit');

  });
});
