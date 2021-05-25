import "./bookCard.scss";
import openlibrary from "../../Images/openLibrary.jpeg";

const BookCard = ({ image, title, author, PubDate }) => {
  return (
    <>
      <div className="Book-card" data-testid="book-cards">
        <img
          data-testid="image"
          src={
            image
              ? `http://covers.openlibrary.org/b/id/${image}-M.jpg`
              : openlibrary
          }
          alt={`${title} book cover`}
          className="Book-card_cover"
        />
        <div className="Book-card_contents">
          <h2 className="Book-card__title">{title}</h2>
          <p>{author}</p>
          <p>{PubDate}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default BookCard;
