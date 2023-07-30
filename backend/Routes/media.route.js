const { Router } = require('express');
const { MediaInfo } = require("../Models/media.model");
const {uploads}=require("../Middlewares/upload")


const mediaRouter = Router();




mediaRouter.post("/add",uploads.single("mediaType"),async(req,res)=>{
  const {datefield,title,mediaSource,keyword}=req.body
  try{
const mediaData=new MediaInfo({
  datefield,title,mediaSource,keyword
})
if(req.file){
  mediaData.mediaType=req.file.path
}
await mediaData.save()
res.send("data added")
  }catch(er){
    res.send("hgh")
  }
})


mediaRouter.get("/", async (req, res) => {
  try {
    const { title, datefield, mediaSource, keyword } = req.query;
    const query = {};

    // Check for each query parameter and add them to the query object if provided
    if (title) {
      query.title = title;
    }

    if (datefield) {
      query.datefield = datefield;
    }

    if (mediaSource) {
      query.mediaSource = mediaSource;
    }

    if (keyword) {
      query.keyword = keyword;
    }

    const media = await MediaInfo.find(query);
    res.send(media);
  } catch (err) {
    res.send(err);
  }
});

module.exports = {
  mediaRouter
};


  // {
  //   "datefield": "20-2-2022",
  //   "title": "media 1",
  //   "mediaSource": "Instagram",
  //   "mediaType": "hhg",   
  //   "keyword":"visargan"
  // }