const booksTs = [
  {
    sequence: 1,
    firstName: 'one1',
    lastName: 'two1',
    phone: '01099999991',
    address1: 'test1addr1',
    address2: 'test1addr2',
    age: 20,
    email: 'test1@email.com',
  }, {
    sequence: 2,
    firstName: 'one2',
    lastName: 'two2',
    phone: '01099999991',
    address1: 'test1addr1',
    address2: 'test1addr2',
    age: 21,
    email: 'test1@email.com',
  }, {
    sequence: 3,
    firstName: 'one3',
    lastName: 'two3',
    phone: '01099999991',
    address1: 'test1addr1',
    address2: 'test1addr2',
    age: 22,
    email: 'test1@email.com',
  },
]

const getPhoneBooksTs = () => {
  return booksTs
}

export { getPhoneBooksTs, booksTs }
