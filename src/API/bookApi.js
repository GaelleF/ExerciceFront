
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

export const getCommercialOffers = async (isbnArray) => {
    try {
        if (isbnArray.length > 0) {
        const URL =  `${API_URL}/${isbnArray.join(',')}/commercialOffers`
        const response = await fetch(URL)
        const offers = await response.json()
        return offers
        }
        return 'no commercial offer'
    } catch(err) {
        console.error('Error in getting commercial offers', err)
    }
     
    }