import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withBookStoreService from '../hoc';
import booksLoaded from '../../actioncreators';

class BookList extends Component {

    componentDidMount() {


        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();

        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;

        let bookListItems = books.map((book) => {
            return <BookListItem book={book} />
        });

        return (
            <ul>
                {bookListItems}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        booksLoaded: (newBooks) => {
            dispatch(booksLoaded(newBooks))
        }
    }
}


export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
