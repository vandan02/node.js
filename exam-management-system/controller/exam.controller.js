const Exam = require("../model/exam.model")



module.exports = {
    
    createexam:async(req,res)=>{
        try {
           const exam=await Exam.create(req.body)
            res.send("Exam created successfully")
        } catch (error) {
            res.status(500).send("Failed to create exam")
        }
    },
    getexams:async(req,res)=>{
        try {
            const exams=await Exam.find()
            res.send(exams)
        } catch (error) {
            res.status(500).send("Failed to get exams")
        }
    },
    updateexam:async(req,res)=>{
        try {
            const exam=await Exam.findByIdAndUpdate(req.params.id,req.body,{new:true})
            if(!exam) return res.status(404).send("Exam not found")
            res.send(exam)
        } catch (error) {
            res.status(500).send("Failed to update exam")
        }
    },
    deleteexam:async(req,res)=>{
        try {
            const exam=await Exam.findByIdAndDelete(req.params.id)
            if(!exam) return res.status(404).send("Exam not found")
            res.send(exam)
        } catch (error) {
            res.status(500).send("Failed to delete exam")
        }
    }
}