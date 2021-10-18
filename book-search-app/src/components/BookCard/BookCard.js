import "./bookCard.scss";
import openlibrary from "../../images/openLibrary.jpeg";

const BookCard = ({ image, title, author, PubDate }) => {
  return (
    <div className="container">
      <div className="Book-card">
        <img
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
          <p className="Book-card__text">By:{author}</p>
          <p className="Book-card__text">Year Published:{PubDate}</p>
        </div>
      </div>
      <hr />
    </ div>
  );
};

export default BookCard;
