










const normalizeUser = (user)=>({

    name:{
        first:user.first,
        last:user.last,
    },
    email:user.email,
    password:user.password,
    phone:user.phone,

    imageUrl:user.imageUrl,

    imageAlt:user.imageAlt,

    address:{
        country: user.country,
        city: user.city,
        street: user.street,
        zip: +user.zip,
        houseNumber: +user.houseNumber,
    }
});




export default normalizeUser;