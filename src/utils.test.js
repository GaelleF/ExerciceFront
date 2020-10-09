
// test('test commercial', 
//     ()=> {
      
//         expect(1).toBe(1)
        
//     }
// )
import {bestCommercialOffer} from './utils/commercialOfferUtils'
const bookCartMock =[
    {
        isbn: "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
        title: "Henri Potier à l'école des sorciers",
        price: 35,
        cover: "http://henri-potier.xebia.fr/hp0.jpg",
        synopsis: ['blabla', 'mumbo jumbo']
    },
    {
        isbn: "a460afed-e5e7-4e39-a39d-c885c05db861",
        title: "Henri Potier et la Chambre des secrets",
        price: 30,
        cover: "http://henri-potier.xebia.fr/hp1.jpg",
        synopsis: ['blabla', 'mumbo jumbo']
    }
]
const offerMock = [
    {
      type: "percentage",
      value: 5
    },
    {
      type: "minus",
      value: 15
    },
    {
      type: "slice",
      sliceValue: 100,
      value: 12
    }
  ]

test('Should return a new price of 50  with a initial price of 65 (choose minus offer)', 
   ()=> {
        const bestOffer = bestCommercialOffer({bookCart: bookCartMock, commercialOffers: offerMock})
        expect(bestOffer.totalPrice).not.toBeUndefined()
        expect(bestOffer.totalPrice).toBe(50)
        expect(bestOffer.offer).not.toBeUndefined()
        expect(bestOffer.offer).toEqual({
            type: "minus",
            value: 15
          },)
    }
)

test('Should return a new price of 50 with a minus offer(15) and a initial price of 65', 
   ()=> {
        const bestOffer = bestCommercialOffer({
            bookCart: bookCartMock,
             commercialOffers:[{
                type: "minus",
                value: 15
             }]
             })
        expect(bestOffer.totalPrice).not.toBeUndefined()
        expect(bestOffer.totalPrice).toBe(50)
        expect(bestOffer.offer).not.toBeUndefined()
        expect(bestOffer.offer).toEqual({
            type: "minus",
            value: 15
          },)
    }
)

test('Should return a new price of 62 with a percentage offer(5%) and a initial price of 65', 
   ()=> {
    const bestOffer = bestCommercialOffer({
        bookCart: bookCartMock,
         commercialOffers:[{ 
            type: "percentage",
            value: 5
          },]
         })
        expect(bestOffer.totalPrice).not.toBeUndefined()
        expect(bestOffer.totalPrice).toBe(62)
        expect(bestOffer.offer).not.toBeUndefined()
        expect(bestOffer.offer).toEqual({
            type: "percentage",
            value: 5
          },)
    }
)

test('Should return initial price of 65 with a slice offer(12 by 100) and a initial price of 65', 
   ()=> {
    const bestOffer = bestCommercialOffer({
        bookCart: bookCartMock,
         commercialOffers:[ {
            type: "slice",
            sliceValue: 100,
            value: 12
          },]
         })
        expect(bestOffer.totalPrice).not.toBeUndefined()
        expect(bestOffer.totalPrice).toBe(65)
        expect(bestOffer.offer).not.toBeUndefined()
        expect(bestOffer.offer).toEqual( {
            type: "none",
         
          },)
    }
)

test('Should return new price of 88 with a slice offer(12 by 100) and a initial price of 100', 
   ()=> {
    const bestOffer = bestCommercialOffer({
        bookCart: [...bookCartMock, 
            {
                isbn: "bbcee412-be64-4a0c-bf1e-315977acd924",
                title: "Henri Potier et les Reliques de la Mort",
                price: 35,
                cover: "http://henri-potier.xebia.fr/hp6.jpg",
                synopsis: ['blabla', 'mumbo jumbo']
            }
        ],
         commercialOffers:[ {
            type: "slice",
            sliceValue: 100,
            value: 12
          },]
         })
        expect(bestOffer.totalPrice).not.toBeUndefined()
        expect(bestOffer.totalPrice).toBe(88)
        expect(bestOffer.offer).not.toBeUndefined()
        expect(bestOffer.offer).toEqual( {
            type: "slice",
            sliceValue: 100,
            value: 12
          },)
    }
)