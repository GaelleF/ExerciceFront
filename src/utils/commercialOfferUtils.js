export const bestCommercialOffer = ({cartBook, commercialOffer})=>{
    const initialTotalPrice = cartBook.reduce((a,b)=>a.price+b.price, 0)
    let bestOffer = {totalPrice: initialTotalPrice, offer:{type:'none'}}

    commercialOffer.forEach(offer=>{
        if (offer && offer.type === 'percentage' && offer.value) {
            const newPrice= Math.round(initialTotalPrice * (1-offer.value))
            if (bestOffer.totalPrice < newPrice) {
                bestOffer = {totalPrice: newPrice, offer}
            }
        } else  if (offer && offer.type === 'minus' && offer.value) {
            const newPrice= Math.round(initialTotalPrice - offer.value)
            if (bestOffer.totalPrice < newPrice) {
                bestOffer = {totalPrice: newPrice, offer}
            }
        } else  if (offer && offer.type === 'slice' && offer.value && offer.sliceValue) {
            const nbSlice= Math.floor(initialTotalPrice/offer.sliceValue)
            const newPrice= Math.round(initialTotalPrice - (offer.value * nbSlice))
            if (bestOffer.totalPrice < newPrice) {
                bestOffer = {totalPrice: newPrice, offer}
            }
        } 
    })

    return bestOffer

}