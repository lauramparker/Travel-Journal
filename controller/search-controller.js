const express = require('express');

const { Client } = require('@elastic/elasticsearch')
//input the elasticsearch URL here
const client = new Client({ node: 'https://jxppt8ld4g:hmxqbbfzo8@cherry-370890600.us-east-1.bonsaisearch.net:443'})


const router = express.Router();

//Retrieves 
router.get('/api/search', async (req, res) => {
    
    const query = req.query.s  //req.params search
    console.log(req.params);
    console.log(req.body);


    try {
      var { body } = await client.search({
       index: 'reviews',
       body: {
         query: {
           multi_match: {
             query: query,
             fields: ["city_name", "city_review", "hotel_name", "hotel_review"]
           }
         }
       }
     }) 
    }catch (err) {
       if (err.message) console.log(err.message);
       console.log(err);
     }


  // Let's search! (one field search)
  // const { body } = await client.search({
  //   index: 'reviews',
  //   body: {
  //     query: {
  //       match: {
  //         city_review: query
  //       }
  //     }
  //   }
  // })

  console.log(body.hits.hits)

  //send empty res
    res.json(body.hits.hits.map((hit) => hit._source));

});




module.exports = router;