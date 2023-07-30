const path=require("path")
const multer=require("multer")


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/")
    },
    filename:function(req,file,cb){
        let ext=path.extname(file.originalname)
        cb(null,Date.now()+ext)
    }
})

const uploads = multer({
    storage: storage, 
    fileFilter: function (req, file, callback) {
      const allowedMimes = ["image/png", "image/jpg", "image/jpeg", "image/gif", "video/mp4", "video/mov", "video/avi"];
      if (allowedMimes.includes(file.mimetype)) {
        callback(null, true);
      } else {
        console.log("Only images (png, jpg, jpeg, gif) and videos (mp4, mov, avi) are allowed.");
        callback(null, false);
      }
    }
  });

module.exports={
    uploads
}