const multer = require("multer")
const  generateInterviewReport = require("../services/ai.service")
const upload = multer({
    storage:multer.memoryStorage(),
    limits:{
        fileSize: 30*1024*1024 //3Mb
    }
})

module.exports = upload