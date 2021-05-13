const express = require('express');
const db = require('../models');

const router = express.Router();

//require elasticsearch
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'https://jxppt8ld4g:hmxqbbfzo8@cherry-370890600.us-east-1.bonsaisearch.net:443' })

//Retrieves all posts
//Renders it to allreviews html file
router.get('/reviews', async (req, res) => {

  try {

    var result = await db.Travel.findAll({
      include: [db.User],
    });

  } catch (err) {
    console.log(err);
   }

    res.render('allreviews', { review: result });
});

//Retrieves single post
//Renders it to singPost html file
router.get('/reviews/:id', async (req, res) => {

  try{
    
    var post = await db.Travel.findOne({
      where: {
        id: req.params.id,
      },
      raw: true
    });
  } catch (err) {
      console.log(err);
  }
    res.render('singlePost', { review: post });
});

//Create new review/blog post
router.post('/api/reviews', async (req, res) => {

  try {
    console.log(req.user);
    var newReview = await db.Travel.create({

    city_name: req.body.city_name,
    city_review: req.body.city_review,
    hotel_name: req.body.hotel_name,
    hotel_review: req.body.hotel_review,
    UserId: req.user.id,
  });
  // Insert into elasticsearch
  await client.index({
    index: 'reviews',
    refresh: true,
    body: {
      id: newReview.id,
      city_name: req.body.city_name,
      city_review: req.body.city_review,
      hotel_name: req.body.hotel_name,
      hotel_review: req.body.hotel_review,
    }
  })
} catch (err) {
  console.log(err);
}
  res.json(newReview);
});

//Update review/blog
router.put('/api/reviews/:id', async (req, res) => {

  let updatedPost = await db.Travel.update(req.body, {
    where: {
      id: req.params.id,
    }
  });
  res.json(updatedPost);
});

module.exports = router;