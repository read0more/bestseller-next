import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface DetailReponse {
  status: string;
  num_results: number;
  results: {
    list_name: string;
    list_name_encoded: string;
    bestsellers_date: string;
    published_date: string;
    published_date_description: string;
    next_published_date: string;
    previous_published_date: string;
    display_name: string;
    normal_list_ends_at: number;
    updated: string;
    books: Book[];
  };
}

interface Book {
  description: string;
  title: string;
  author: string;
  book_image: string;
  amazon_product_url: string;
  price: string;
}

export default function Books() {
  const router = useRouter();
  const id = router.query.id as string;
  const [lists, setLists] = useState<Book[]>([]);

  useEffect(() => {
    if (!id) return;

    fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)
      .then((res) => res.json())
      .then((data: DetailReponse) => setLists(data.results.books));
  }, [id]);

  return (
    <>
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

        p {
          font-size: 1.2rem;
          margin-top: 10px;
          margin-bottom: 5px;
        }

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          padding: 10px;
          border: none;
          border-radius: 5px;
          background-color: #333333;
          color: white;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
        }

        button:hover {
          background-color: #444444;
        }

        .title {
          font-weight: bold;
        }

        .author {
          color: grey;
        }
      `}</style>
      <ul className='grid'>
        {lists.map((list) => (
          <li key={list.title}>
            <Image
              src={list.book_image}
              alt={list.title}
              width={300}
              height={300}
            />
            <p className="title">{list.title}</p>
            <p className="author">{list.author}</p>
            <Link href={list.amazon_product_url}>
              <button type='button'>Buy now →</button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
