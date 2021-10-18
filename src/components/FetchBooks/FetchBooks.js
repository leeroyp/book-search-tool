import React, { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import BookCard from "../BookCard/BookCard";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination"
import "./fetchBooks.scss";

const BookSearch = () => {

  let PageSize = 10;

  const [inputValue, setInputValue] = useState("");
  const [books, setBooks] = useState([]);
  const [sortType, setSortType] = useState("");
  const [newdata, setNewData] = useState([]);
  const [display, setDisplay] = useState("none")
  const [currentPage, setCurrentPage] = useState(1);


  const { status, data, refetch } = useQuery(
    [inputValue],
    () =>
      fetch(`https://openlibrary.org/search.json?title=${inputValue}`)
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
          setSortType("title");
          setDisplay("")
        }),
    {
      refetchAllOnWindowFocus: false,
      enabled: false,
    }
  );
 
  console.log(books)

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return newdata.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        title: "title",
        date: "date",
      };
      const sortProperty = types[type];
      const sorted = [...books].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setNewData(sorted);
    };
    sortArray(sortType);
  }, [sortType]);

  let errorMessage;
  if (status === "loading") return <div>loading...</div>;
  if (status === "error") {
    errorMessage = (
      <p className="errorMessage">
        There are no books matching your search please be more specific
      </p>
    );
  }

  const searchFunc = (e) => {
    e.preventDefault();
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
        <div className="Search-books-sort" style={{ display: display }}>
          <div className="Search-books-sort-select">
            <label>Sort books by:</label>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="selectOption"
            >
              <option value="title">Title</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>
        <div className="errorContainer">{errorMessage}</div>
      </div>

      <div className="Search-books-display">
        {currentData.map((item, index) => (
          <div key={index}>
            <BookCard
              image={item.coverId}
              title={item.title}
              author={item.author}
              PubDate={item.date}
            />
          </div>
        ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={newdata.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
};

export default BookSearch;
