const express = require('express');
const postRouter = require("../posts/post-router");
const db = require('../data/db-config.js');
const userModel = require("./user-model");
const router = express.Router();

router.use("/:id/posts", postRouter);

router.get('/', async (req, res) => {  
   try{ 
    res.json(await userModel.find());
   }catch (err){
    res.status(500).json({ message: 'Failed to get users' });
  };
});

router.get('/:id',async (req, res) => {
    try{    
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
    }
  }catch(err){
    res.status(500).json({ message: 'Failed to get user' });
  };
});

router.post('/', async (req, res) => {
  try{
  const userData = req.body;
  const newUser = await userModel.add(userData);
    res.status(201).json(newuser);
  }catch(err) {
    res.status(500).json({ message: 'Failed to create new user' });
  };
});

router.put('/:id', async (req, res, next) => {
 try { 
  const { id } = req.params;
  const changes = req.body;
  const count  = await userModel.update(id, changes);
    if (count) {
      res.json({ update: count });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  } catch(err) {
    res.status(500).json({ message: 'Failed to update user' });
  };
});

router.delete('/:id', (req, res) => {
  try {
  const { id } = req.params;
  const count = await userModel.remove(id);
    if (count) {
      res.json({ removed: count });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  }catch(err) {
    res.status(500).json({ message: 'Failed to delete user' });
  };
});

module.exports = router;