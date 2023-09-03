
const mapProductToModel = (product) =>({ 
 productName: product?.name,
 productDescription: product?.description, 
 stock: product?.stock, 
 price: product?.price, 
 image1: product?.imageArray[0].imageUrl, 
 image2: product?.imageArray[1].imageUrl, 
 image3: product?.imageArray[2].imageUrl, 
 image4: product?.imageArray[3].imageUrl, 
 image5: product?.imageArray[4].imageUrl, 
 image6: product?.imageArray[5].imageUrl, 
 image7: product?.imageArray[6].imageUrl, 
 image8: product?.imageArray[7].imageUrl, 
 image9: product?.imageArray[8].imageUrl, 
 image10: product?.imageArray[9].imageUrl, 
 imageAlt1: product?.imageArray[0].imageAlt, 
 imageAlt2: product?.imageArray[1].imageAlt, 
 imageAlt3: product?.imageArray[2].imageAlt, 
 imageAlt4: product?.imageArray[3].imageAlt, 
 imageAlt5: product?.imageArray[4].imageAlt, 
 imageAlt6: product?.imageArray[5].imageAlt, 
 imageAlt7: product?.imageArray[6].imageAlt, 
 imageAlt8: product?.imageArray[7].imageAlt, 
 imageAlt9: product?.imageArray[8].imageAlt, 
 imageAlt10: product?.imageArray[9].imageAlt, 
 select:product?.category,
 id:product?._id,
 });



 export default mapProductToModel;