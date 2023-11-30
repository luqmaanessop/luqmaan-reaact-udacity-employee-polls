import * as React from "react";
import Nav from "../components/Nav";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import {setAuthedUser} from "../actions/authedUser";

describe("Nav", () => {
  beforeAll(async () => {
    store.dispatch(setAuthedUser({id: "sarahedo"}));
  });

  it("should match snapshot", async () => {

    const component = render(
      <Provider store={store}>
          <BrowserRouter>
              <Nav/>
          </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  })

  it("Should display username of logged-in user", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav/>
        </BrowserRouter>
      </Provider>
    );

    const userSpanElement = screen.getByTestId("user-information");
    expect(userSpanElement.textContent).toBe("User: sarahedo");
  });

  it("should render all links correctly", async () => {
    render(
      <Provider store={store}>
          <BrowserRouter>
              <Nav/>
          </BrowserRouter>
      </Provider>
    );

    const homeLink = screen.getByText(/home/i);
    const newPollLink = screen.getByText(/new poll/i);
    const leaderboardLink = screen.getByText(/leaderboard/i);

    expect(homeLink).toBeInTheDocument();
    expect(newPollLink).toBeInTheDocument();
    expect(leaderboardLink).toBeInTheDocument();
  })
});
