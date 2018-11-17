module.exports = {
  get (req, res) {
    const books = [
      { id: 1, title: 'Life is What you Make It', author: 'Preeti Shenoy', publisher: 'Srishti Publisher', language: 'EN', price: 150, currency: 'INR', isbn: 9789380349305, edition: 2011, pages: 211 },
      { id: 2, title: 'One Indian Girl', author: 'Chetan Bhagat', publisher: 'RUPA', language: 'EN', price: 176, currency: 'INR', isbn: 9788129142146, edition: 2016, pages: 280 },
      { id: 3, title: 'Indian Polity', author: 'M. Laxmikanth', publisher: 'Mcgraw TestPrep', language: 'EN', price: 775, currency: 'INR', isbn: 9789352603633, edition: 2016, pages: 850 },
      { id: 4, title: 'Everyone Has A Story', author: 'Savi Sharma', publisher: 'Westland', language: 'EN', price: 199, currency: 'INR', isbn: 9789386036759, edition: 2016, pages: 184 },
      { id: 5, title: 'Wings of Fire: An Autobiography', author: 'Abdul Kalam', publisher: 'Orient BlackSwan', language: 'EN', price: 375, currency: 'INR', isbn: 9788173711466, edition: 1999, pages: 180 },
    ]

    res.json(books)
  }
}