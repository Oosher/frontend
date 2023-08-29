import Joi from "joi";




const schema =  {
                
                    first:Joi.string().min(2).max(256).required(),
                    last:Joi.string().min(2).max(256).required(),

                    phone:Joi.string().ruleset.regex(/^0(5|[2-4]|[8-9]|7[0-9])[0-9]{8}$/).rule({message:"phone number is invalid"}).required(),



                    password:Joi.string()
                    .ruleset.regex(
                        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
                    )
                    .rule({
                    message:
                        'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
                    }).required(),

                    imageUrl: Joi.string().ruleset.regex(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/).rule({message: "the url is not valid"}).required(),
                    imageAlt:Joi.string().ruleset.min(3).rule({message:"must include an image alt"}).required(),


                    email: Joi.string()
                    .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
                    .rule({ message: 'email must be valid' })
                    .required(),
                    
                    country:Joi.string().min(2).max(256).required(),

                    city:Joi.string().min(2).max(256).required(),

                    street:Joi.string().min(2).max(256).required(),

                    houseNumber:Joi.string().ruleset.regex(/^[1-9]\d*$/).rule({message:"House number must be bigger than 0"}).required(),

                    zip:Joi.string().ruleset.regex(/^\d{5}(?:[-\s]\d{4})?$/).rule({message:"zip code is invalid"}).required(),

                    name:Joi.object({
                        first:Joi.string(),
                        last:Joi.string(),
                    }).allow(""),

                    old:Joi.string()
                    .ruleset.regex(
                        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
                    )
                    .rule({
                    message:
                        'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
                    }).allow(""),
                    new:Joi.string()
                    .ruleset.regex(
                        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
                    )
                    .rule({
                    message:
                        'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
                    }).allow(""),

    };




export default schema;