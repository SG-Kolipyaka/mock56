const mongoose =require("mongoose")

const mediaSchema = new mongoose.Schema({
  datefield: { type: String, required: true },
  title: { type: String, required: true },
  mediaSource: { type: String, required: true },
  mediaType: { type: String,required: true },
  keyword: { type: String, required: true },
 
    
  },{
    versionKey:false
  });
  
  const MediaInfo = mongoose.model('media', mediaSchema);


  module.exports={
    MediaInfo
  }