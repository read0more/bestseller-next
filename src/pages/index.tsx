import type { NextPage } from "next";
import { use, useEffect, useState } from "react";

interface Lists {
  status: string;
  copyright: string;
  num_results: number;
  results: List[];
}
interface List {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

const Home: NextPage = () => {
  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    fetch("https://books-api.nomadcoders.workers.dev/lists")
      .then((res) => res.json())
      .then((data: Lists) => setLists(data.results));
  }, []);

  return <ul>
    {lists.map((list) => (
      <li key={list.list_name}>
        <a href={`/list/${list.list_name_encoded}`}>{list.display_name}</a>
      </li>
    ))}
  </ul>;
};

export default Home;
