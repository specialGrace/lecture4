
import CartoonPost from "../models/cartoonPostModels.js"

// get all cartoons and search by name
const getAllCartoons = async(req, res) => {
  try {
    const { name, userId } = req.query
    const copy = await CartoonPost.find({}).sort({_id: -1})
  let searchResult= copy
    if (name) {
    searchResult=searchResult.filter((item)=>item.name.startsWith(name))
    }
    if (userId) {
      searchResult=searchResult.filter((item)=>item.userId.toString()===userId)
    }
    res.status(200).json({
      searchResult: searchResult
    })
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message
    })
}
}

// create carton post
const createCartoonPost = async (req, res) => {
    const { image, name, gender, location } = req.body
    console.log(image, name, gender, location, created);
    try {
      // check that post does not exist before
    //   const cartoonPostExist = await CartoonPost.find({ image: image });
    //   if (cartoonPostExist.length > 0) {
    //     throw new Error("Cartoon already exist");
    //   }
      // create cartoon post
      const cartoonPost = await CartoonPost.create({
        author,
        image,
        name,
        gender,
        location,
        created,
      })
      res.status(200).json({
        cartoonPost: cartoonPost
      })
    } catch (err) {
      console.log(err);
      res.status(401).json({
        status: "fail",
        error: err.message,
      })
    }
}

// get single cartoon
const getSingleCartoon = async (req, res) => {
    const { id } = req.params
  const data = Data.find((item) => parseInt(item.id) === parseInt(id))
  
   if (!data) {
     res.status(400).json({
       msg: "No post found",
     });
   }
  
    res.status(200).json({
        data:data
    })
}

// update cartoon post
const updateCartoonPost = async(req, res) => {
    const {id} = req.params
    const {image, name, gender, location, created}=req.body
    const data = Data.find((item)=> parseInt(item.id) === parseInt(id))
    if (!data) {
        res.status(400).json({
            msg: 'No Post Found'
        })
    }
    if (image) {
        data.image=image
    }
      if (name) {
        data.name = name;
    }
      if (gender) {
        data.gender = gender;
    }
      if (location) {
        data.location = location;
    }
      if (created) {
        data.created = created;
    }
    res.status(200).json({
    data:data
    })
}

// delete cartoon post
const deleteCartoonPost = async (res, req) => {
    const {id}=req.params
    const data = Data.find((item) => parseInt(item.id) === parseInt(id))
    if (!data) {
        res.status(200).json({
            msg:'No Post Found'
        })
    }
    const filteredCartoonPost = cartoonsData.filter((item)=>item.id !=data.id)
    res.status(200).json({
        status: "success",
        filteredCartoonPost
})
}

export {getAllCartoons, createCartoonPost, getSingleCartoon, updateCartoonPost, deleteCartoonPost}