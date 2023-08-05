import Joi from "joi";



const loginSchema = {
        email: Joi.string()
                        .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
                        .rule({ message: 'email must be valid' })
                        .required(),


        password:Joi.string()
                            .ruleset.regex(
                                /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
                            )
                            .rule({
                            message:
                                'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
                            }).required(),

                    

}




export default loginSchema;