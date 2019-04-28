import React from 'react';
import { BookStoreServiceConsumer } from '../bookstore-service-context';


let wrappedFunc = (Wrapped) => {
    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return <Wrapped {...props} bookstoreService={bookstoreService} />
                    }
                }
            </BookStoreServiceConsumer>
        )
    }
}

const withBookStoreService = () => {
    return wrappedFunc
}

export default withBookStoreService;

