import React from "react";
import BookCard from "../BookCard";
import { render } from "@testing-library/react";

const exampleCard = {
  image: 10521270,
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K Rowling",
  PubDate: 1997,
};

it("matches snapshot", () => {
  const { asFragment } = render(
    <BookCard
      image={exampleCard.image}
      title={exampleCard.title}
      author={exampleCard.author}
      PubDate={exampleCard.PubDate}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
