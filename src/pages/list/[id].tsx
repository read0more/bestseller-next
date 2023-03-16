import Image from "next/image";
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
    <ul>
      {lists.map((list) => (
        <li key={list.title}>
          <p>{list.title}</p>
          <p>{list.author}</p>
          <p>{list.price}</p>
          <Image src={list.book_image} alt={list.title} width={300} height={300} />
        </li>
      ))}
    </ul>
  );
}
