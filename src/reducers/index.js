const initialState = {
    books: [],
    loading: true,
    err: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'BOOKS_REQUESTED':
            return {
                books: [],
                loading: true,
                err:null,
            }

        case 'BOOKS_LOADED':
            return {
                books: action.payload,
                loading: false,
                err:null,
            }

        case 'BOOK_ERROR':
            return {
                books: [],
                loading: false,
                err: action.payload,
            }

        default: return state;
    }
}

export default reducer;