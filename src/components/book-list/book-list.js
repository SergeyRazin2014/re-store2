import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withBookStoreService from '../hoc';
import { fetchBooks } from '../../actioncreators';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'

const BookList = ({ books }) => {
    let bookListItems = books.map((book) => {
        return <BookListItem book={book} />
    });

    return (
        <ul>
            {bookListItems}
        </ul>
    );
}


class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }


    render() {
        const { books, loading, err } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (err) {
            return <ErrorIndicator />
        }

        return <BookList books={books} />
    }
}

const mapStateToProps = (state) => {

    return {
        books: state.books,
        loading: state.loading,
        err: state.err,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        fetchBooks: fetchBooks(ownProps.bookstoreService, dispatch),
    }

}


export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));
