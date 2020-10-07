
test('test', 
    ()=> {
      
        expect(1).toBe(1)
        
    }
)
// import {bestCommercialOffer} from './utils/commercialOfferUtils'
// const cartBookMock =[
//     {
//         isbn: "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
//         title: "Henri Potier à l'école des sorciers",
//         price: 35,
//         cover: "http://henri-potier.xebia.fr/hp0.jpg",
//         synopsis: ['blabla', 'mumbo jumbo']
//     },
//     {
//         isbn: "a460afed-e5e7-4e39-a39d-c885c05db861",
//         title: "Henri Potier et la Chambre des secrets",
//         price: 30,
//         cover: "http://henri-potier.xebia.fr/hp1.jpg",
//         synopsis: ['blabla', 'mumbo jumbo']
//     }
// ]
// const offerMock = [
//     {
//       type: "percentage",
//       value: 4
//     },
//     {
//       type: "minus",
//       value: 15
//     },
//     {
//       type: "slice",
//       sliceValue: 100,
//       value: 12
//     }
//   ]

// test('Should return a new price of 50 with a initial price of 65 and a minus offer(15)', 
//     ()=> {
//         const bestOffer = bestCommercialOffer({cartBook: cartBookMock, offer: offerMock})

//         expect(bestOffer.newPrice).not.toBeUndefined()
//         expect(bestOffer.newPrice).toBe(50)
//         expect(bestOffer.offer).not.toBeUndefined()
//         expect(bestOffer.offer).toEqual({
//             type: "minus",
//             value: 15
//           },)
//     }
// )