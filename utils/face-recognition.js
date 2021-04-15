const Clarifai = require("clarifai");

const faceRecognition = async (image) => {
  var input = 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwSZo4s_l5T4SFSV_o1OBT88Z0MoyApi4Ag&usqp=CAU";

  const app = new Clarifai.App({
    apiKey: "2a9a0218e5f64e888bf0de59786b7df7",
  });

  const claraData = await app.models.predict(Clarifai.FACE_DETECT_MODEL, image);
  console.log(claraData.outputs[0].data);
  return {imageLink: image, dataSet: claraData.outputs[0].data.regions};
};

module.exports = faceRecognition;

// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4ACAm0YKY3Ke0IUOMWkHzp-rpxvPPUr-8g&usqp=CAU"