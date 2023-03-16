import { expect, test } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
import Home from "../pages";
import fakeList from "../msw/fakes/list.json";

test("home", async () => {
  render(<Home />);
  
  await waitFor(() => {
    const list = screen.getByRole("list");
    const listItems = within(list).getAllByRole("listitem");
    expect(listItems).toHaveLength(fakeList.results.length);
  });
});
