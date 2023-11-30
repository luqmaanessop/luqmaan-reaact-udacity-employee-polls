import * as React from "react";
import LoginForm from "../components/LoginForm";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import {handleInitialData} from "../actions/shared";

afterEach(() => {
  cleanup(); // This will unmount the component and clear the DOM
});

describe("LoginForm", () => {
  test("On the login page, verify that a user name select field, and submit button are present on the page", async () => {

    render(
      <Provider store={store}>
          <BrowserRouter>
              <LoginForm/>
          </BrowserRouter>
      </Provider>
    );

    const userInput = screen.getByTestId("username");
    const submitButton = screen.getByTestId("submit-login");

    expect(userInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  })
})
