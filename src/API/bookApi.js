
const API_URL= 'http://henri-potier.xebia.fr/books'

export const getAllBooks = async () => {
try {
    const response = await fetch(API_URL)
    const books = await response.json()
    return books
} catch(err){
    console.error('Error in getting all books', err)
}
 
}