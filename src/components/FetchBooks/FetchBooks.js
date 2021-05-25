import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

import "./fetchBooks.scss"

const BookSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [books, setBooks] = useState([]);
  const [sortType, setSortType] = useState("");
  const [newdata, setNewData] = useState([]);

  const { status, data, refetch } = useQuery(
    [inputValue],
    () =>
      fetch(`http://openlibrary.org/search.json?title=${inputValue}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.docs.map((item) => {
            let bookObj = {
              title: item.title,
              author: item.author_name,
              coverId: item.cover_i,
              date: item.first_publish_year,
            };
            setBooks((books) => [...books, bookObj]);
          });
        }),
    {
      refetchAllOnWindowFocus: false,
      enabled: false,
    }
  );

  console.log(books);
  console.log("data", data);

 


  if (status === "loading") return <div>loading...</div>;
  if (status === "error") return <div>There are no books matching your search please be more specific</div>;

  const searchFunc = (e) => {
    e.preventDefault();
    // setNewData([])
    setBooks([]);
    setSortType("");
    refetch();
  };
  return (
    <div className="Search-books">
      <h1 className="Search-books-header">Open Library Book Search</h1>
      <div>
        <SearchBar
          value={inputValue}
          onchange={(e) => setInputValue(e.target.value)}
          submit={searchFunc}
          className="Search-books-searchbar"
        />
       </div>
       </div>
  )
};

export default BookSearch;
