const config = require("config");
const Clarifai = require("clarifai");

const faceRecognition = async (image) => {
 
  const app = new Clarifai.App({
    apiKey: config.get('Image.clarifaiSecret')
  });

  const claraData = await app.models.predict(Clarifai.FACE_DETECT_MODEL, image);
  return {imageLink: image, dataSet: claraData.outputs[0].data.regions};
};

module.exports = faceRecognition;