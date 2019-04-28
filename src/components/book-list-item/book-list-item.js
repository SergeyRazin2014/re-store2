import React, { Fragment } from 'react';

const BookListItem = ({ book }) => {
    const { id, title, author } = book;
    return (
        <li key={id}>
            <span>{title}</span>
            <span>{author}</span>
        </li>
    )
}

export default BookListItem;