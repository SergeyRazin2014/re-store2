class BookStoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler'
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard'
    }
  ];

  getBooks() {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(this.data)
        //reject(new Error('test error'));
      }, 1000);
    })
  }
}

export default BookStoreService;