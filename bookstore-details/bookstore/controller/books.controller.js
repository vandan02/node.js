const Books = require("../model/books.schema")

const getboockbyid=async(req,res)=>{
    let {id} = req.params
    const book=await Books.findById(id)
    if(!book){
        return res.status(404).json({message:"Book not found"})
    }
    res.status(200).json(book)
}

const createBook = async(req,res)=>{

    const book = await Books.create(req.body);
    res.status(200).json(book)
}

const deletebook=async(req,res)=>{
    let {id} = req.params
   const deletedBook = await Books.findByIdAndDelete(id);
    // if(!deletedBook){
    //     return res.status(404).json({message:"Book not found"})
    // }
    res.status(200).json({message:"Book deleted successfully"})
}

const updatebook=async(req,res)=>{
    let {id} = req.params
    const updatedBook=await Books.findByIdAndUpdate(id,req.body,{new:true})
    if(!updatedBook){
        return res.status(404).json({message:"Book not found"})
    }
    res.status(200).json(updatedBook)
}

const allbook=async(req,res)=>{
    const books=await Books.find()
    res.status(200).json(books)
}

const bookfilter=async(req,res)=>{
    const { author, category, title, price } = req.query;
   
    if(autor){
        const books=await Books.find({ author })
        res.status(200).json(books)
    }
    if(category){
        const books=await Books.find({ category })
        res.status(200).json(books)
    }
    if(title){
        const books=await Books.find({ title })
        res.status(200).json(books)
    }
  
   const books=await Books.find()
   if (price === 'lth') {
    res.status(200).json(books.sort((a, b) => a.price - b.price))
   
} else if (price === 'htl') {
    res.status(200).json( books.sort((a, b) => b.price - a.price))
}

}


module.exports={
    getboockbyid,
    deletebook,
    updatebook,
    allbook,
 createBook,
 bookfilter
 
}