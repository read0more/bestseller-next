import type { NextPage } from "next";
import { useEffect, useState } from "react";

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

  return (
    <>
      <ul className='grid'>
        {lists.map((list) => (
          <li key={list.list_name}>
            <a href={`/list/${list.list_name_encoded}`}>
              <div className='list-title'>{list.display_name}</div>
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 20px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease-in-out;
        }

        li:hover {
          transform: translateY(-5px);
        }

        a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          color: #333333;
          text-decoration: none;
        }

        .list-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 10px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Home;
