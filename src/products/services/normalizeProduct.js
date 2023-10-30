





export const normalizeProduct = (product) =>({

    name:product.productName,

    description : product.productDescription,

    imageArray:[
        {imageUrl:product.image1,imageAlt:product.imageAlt1},
        {imageUrl:product.image2,imageAlt:product.imageAlt2},
        {imageUrl:product.image3,imageAlt:product.imageAlt3},
        {imageUrl:product.image4,imageAlt:product.imageAlt4},
        {imageUrl:product.image5,imageAlt:product.imageAlt5},
        {imageUrl:product.image6,imageAlt:product.imageAlt6},
        {imageUrl:product.image7,imageAlt:product.imageAlt7},
        {imageUrl:product.image8,imageAlt:product.imageAlt8},
        {imageUrl:product.image9,imageAlt:product.imageAlt9},
        {imageUrl:product.image10,imageAlt:product.imageAlt10}],

        stock:product.stock,

        price:product.price,

        category:product.category,

        id:product?.id,

    



})