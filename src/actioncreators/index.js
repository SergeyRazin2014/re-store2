const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks,
    }
}

const booksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED',
    }
}

const booksError = (err) => {
    return {
        type: 'BOOK_ERROR',
        payload: err,
    }
}

const fetchBooks = (bookstoreService, dispatch) => () => {

    dispatch(booksRequested());

    bookstoreService.getBooks()
        .then((data) => {
            dispatch(booksLoaded(data));
        }).catch((err) => {
            dispatch(booksError(err));
        })
}

export {
    fetchBooks
};