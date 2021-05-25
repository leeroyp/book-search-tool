import "./searchBar.scss"

const Searchbar = ({value,onchange, submit}) => {

  return (
    <div className="Search-Bar">
    <form className="Search-Bar-form">
      {/* <label htmlFor='search' className="Search-Bar-label">Search for Books by title</label> */}
    <input
      className="Search-Bar-input"
      title="search for books "
      aria-label="Enter your book search"
      type="search"
      value={value}
      placeholder={"Search Book by Title"}
      onChange={onchange}
      required
    />
    <button onClick={submit} type="submit" value="SEARCH" className="Search-Bar-button">Search Book</button>
    </form>
    </div>
  );
};

export default Searchbar;
