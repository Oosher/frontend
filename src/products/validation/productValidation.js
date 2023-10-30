
import Joi from "joi";

const validate ={
    normalValidate:Joi.string().min(2).required(), 
    
    imageValidation:Joi.string().ruleset.regex(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/).rule({message: "the url is not valid"}).required(),

}

const productSchema = {
        productName: validate.normalValidate ,
        productDescription:validate.normalValidate ,
        stock:Joi.number().required(),
        price:Joi.number().required(),
        image1:validate.imageValidation,
        image2:validate.imageValidation,
        image3:validate.imageValidation, 
        image4:validate.imageValidation,
        image5:validate.imageValidation, 
        image6:validate.imageValidation, 
        image7:validate.imageValidation,
        image8:validate.imageValidation,
        image9:validate.imageValidation,
        image10:validate.imageValidation ,
        imageAlt1:validate.normalValidate ,
        imageAlt2:validate.normalValidate ,
        imageAlt3:validate.normalValidate , 
        imageAlt4:validate.normalValidate ,
        imageAlt5:validate.normalValidate , 
        imageAlt6:validate.normalValidate , 
        imageAlt7:validate.normalValidate ,
        imageAlt8:validate.normalValidate ,
        imageAlt9:validate.normalValidate ,
        imageAlt10:validate.normalValidate ,
        category: validate.normalValidate,

                    

}






export default productSchema;