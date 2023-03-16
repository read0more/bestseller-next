import { rest } from "msw";
import fakeList from "./fakes/list.json";
import fakeDetail from "./fakes/detail.json";

const handlers = [
  rest.get("https://books-api.nomadcoders.workers.dev/lists", (_, res, ctx) =>
    res(ctx.json(fakeList))
  ),
  rest.get("https://books-api.nomadcoders.workers.dev/list", (_, res, ctx) =>
    res(ctx.json(fakeDetail))
  ),
];

export default handlers;
