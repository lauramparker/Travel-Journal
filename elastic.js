'use strict'
const { Client } = require('@elastic/elasticsearch')
//input the elasticsearch URL here
const client = new Client({ node: 'https://jxppt8ld4g:hmxqbbfzo8@cherry-370890600.us-east-1.bonsaisearch.net:443' })

//1 creating an index
client.indices.create({
    index: 'reviews',
  })

//2 call to see if the index exists
const exists = client.indices.exists({
    index: "reviews"
  })

async function run () {
  // Add data to the index when saving a new post, refresh to force an index refresh, otherwise we will not get any result in the consequent search
  await client.index({
    index: 'reviews',
    refresh: true,
    body: {
      id: 100,  
      city_name: 'Trentino',
      city_review: 'Excellent skiing in the winter and great walking in the summer complement the stunning scenery of this amazing place. Quaint mountain village surrounded by the majestic Brenta Dolomites, and just ten-minutes to the nearest ski lifts. I reccommend accomodations on the Giro di Campiglio, which leads into all the major walks in the area.',
      hotel_name: 'Hotel Lorenzetti, Madonna di Campiglio',
      hotel_review: 'Hotel Lorensetti, Madonna di Campiglio is a mountain resort surrounded by the crescent of peaks of the Italian Dolomites. Excellent hospitality and outstanding reputaion. Most rooms have direct views of the mountains as does the bar and the restaurant. The two sun terraces, one outside and one indoors also overlook the mountains.',
    }
  })
  await client.index({
    index: 'reviews',
    refresh: true,
    body: {
      id: 101,  
      city_name: 'Cornwall',
      city_review: 'This year-round getaway is famous for rocky coastlines, sheep-dotted fields, and views across jagged hills and farmland. Be sure to explore both sides of the Cornwall peninsula. One one side, find harbour town of Padstow with casual eateries and a walkable waterfront. The other, explore the seaside mecca of Newquay with its collection of cliff-backed beaches such as Watergate and Fistral.',
      hotel_name: 'Retallack Resort',
      hotel_review: 'Accommodation, sleeping from two to 12, sits mostly on the reedy banks of a collection of small, natural lakes. The resort is expanding with more luxury barns as it moves upmarket. There’s a good-sized indoor swimming pool, a gym and a spa. For couples, there are Hotel Suites, not a hotel at all but a two-story collection of lakeside rooms either with decks amid the rushes or balconies. For families and groups up to 12, the brand new Meadows area houses a collection of timber-clad ‘barns’ – chic, contemporary places with floor to ceiling windows, decks and hip furnishings.',
    }
  })
  await client.index({
    index: 'reviews',
    refresh: true,
    body: {
      id: 102,  
      city_name: 'Murren',
      city_review: 'Mürren lies at the foot of the Schilthorn in the Swiss Alps, whose panoramic views provided the stunning location for the 1960’s James Bond movie “On Her Majesty’s Secret Service.” This Alpine village is in the heart of the Jungfrau with plenty of fresh air, mountain hikes, and luxurious wellness facilities. The village is car-free so you’re guaranteed peace and quiet.',
      hotel_name: 'Hotel Eiger',
      hotel_review: 'The hotel opened in 1892 and has been in the same family for four generations. Many additions and renovations have brought it bang up-to-date with an impressive indoor heated swimming pool offering mountain views as you put in the lengths. There’s also a lovely terrace with the most amazing alpine views. The Eiger Saal is the main restaurant with tremendous mountain views. Food is locally sourced and inventive, drawing on Swiss and Italian traditions.',
    }
  })

  // Let's search!
  const { body } = await client.search({
    index: 'reviews',
    body: {
      query: {
        match: {
          city_review: 'views'
        }
      }
    }
  })
  console.log(body.hits.hits)
}
run().catch(console.log)