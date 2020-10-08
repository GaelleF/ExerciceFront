export const bestCommercialOffer = ({bookCart, commercialOffers})=>{

    let initialTotalPrice = 0;
    bookCart.forEach((book)=> {
        if (book.price){
            initialTotalPrice += book.price
        }
    })
    let bestOffer = {totalPrice: initialTotalPrice, offer:{type:'none'}}
    commercialOffers.forEach(offer=>{
        
        if (offer && offer.type === 'percentage' && offer.value) {
            const newPrice= Math.round(initialTotalPrice * (100-offer.value)/100)
            if (bestOffer.totalPrice > newPrice) {
                bestOffer = {totalPrice: newPrice, offer}
            }
        } else  if (offer && offer.type === 'minus' && offer.value) {
            const newPrice= Math.round(initialTotalPrice - offer.value)
            if (bestOffer.totalPrice > newPrice) {
                bestOffer = {totalPrice: newPrice, offer}
            }
        } else  if (offer && offer.type === 'slice' && offer.value && offer.sliceValue) {
            const nbSlice= Math.floor(initialTotalPrice/offer.sliceValue)
            const newPrice= Math.round(initialTotalPrice - (offer.value * nbSlice))
            if (bestOffer.totalPrice > newPrice) {
                bestOffer = {totalPrice: newPrice, offer}
            }
        } 
    })
    return bestOffer

}