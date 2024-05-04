const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');
const fs = require('fs');
const axios = require('axios');

// const serviceMerge = async (body, mouth) => {

//     try {
//       const b64 = await mergeImages([body, mouth], { 
//         Canvas: Canvas, 
//         Image: Image,
//         width: 1000,
//         height: 1000 });
//       const base64Data = b64.replace(/^data:image\/png;base64,/);
//       const buffer = Buffer.from(base64Data, 'base64');
//       fs.writeFileSync('imagen_fusionada.png', buffer);
//       let imgmerge = b64;
//       console.log(imgmerge);
//     } catch (error) {
//       console.error('Error al fusionar imágenes:', error);
//     }
  
//     serviceMerge().then(res =>{
//       axios.request({
//         url: apiUrl,
//         method: "POST",
//         data : {res}
//       }).catch((error) =>{
//         console.log(error.message)
//       })
//     })
// }
//   export default {getTAT}

// const serviceMerge = async (body, mouth) => {
//   try {
//     const b64 = await mergeImages([body, mouth], { 
//       Canvas: Canvas, 
//       Image: Image,
//       width: 1000,
//       height: 1000 });
//     const base64Data = b64.replace(/^data:image\/png;base64,/);
//     const buffer = Buffer.from(base64Data, 'base64');
//     fs.writeFileSync('imagen_fusionada.png', buffer);
//     let imgmerge = b64;
//     console.log(imgmerge);
//   } catch (error) {
//     console.error('Error al fusionar imágenes:', error);
//   }

// }



// mergeImages(['./imgs/body.png', './imgs/mouth.png'], { 
//   Canvas: Canvas, 
//   Image: Image,
//   width: 1000,
//   height: 1000 })
//   .then(b64 => {
//     const base64Data = b64.replace(/^data:image\/png;base64,/);
//     const buffer = Buffer.from(base64Data, 'base64');
//     fs.writeFileSync('imagen_fusionada.png', buffer);
//     let imgmerge = b64;
//     console.log(imgmerge);
//   })
//   .catch(error => {
//     console.error('Error al fusionar imágenes:', error);
//   });






