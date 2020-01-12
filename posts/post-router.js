const express = require("express");
const db = require("../data/db-config");
const postModel = require("./post-model");
const router = express.Router({mergeParams:true});

router.get("/", async(req,res,next) => {
   try {
     const {id} = req.params;
     const posts = await postModel.find(id);
   // const posts = await db("posts as p")
   //                   .join("users as u", "u.id", "p.user_id")
   //                    .where({user_id:id})
   //                    .select("p.id", "p.contents", "u.username" )
     res.status(200).json(posts);
   } catch(err) {
      next(err)
   }
});


module.exports = router;