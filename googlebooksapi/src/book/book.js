
import React from "react";

export default function Book(props) {
  return (
    <div className="book">
      <div className="book__row">
        <div className="book__title">
          <h3>{props.title}</h3>

          <img className="book__image" src={props.image} alt={props.title} />
          <div className="book__info">
            <p>{props.author}</p>
            <p>{props.price}</p>

            <a
              className="book__preview_link"
              href={props.preview}
              rel="noopener noreferrer"
              target="_blank"
            >
              Preview
            </a>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      {/* <div className="bookmark__description">{props.description}</div> */}
      <hr />
    </div>
  );
}