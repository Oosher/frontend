import Joi from "joi";



export default function useData(setData,schema,setErrors) {

    const updateData =({target})=>{

        setData((prev)=>{return {...prev ,[target.name]:target.value}});
        
        const inputSchema = Joi.object({[target.name]:schema[target.name]});
        const {error} = inputSchema.validate({[target.name]:target.value});

        if (error) {
            setErrors((prev)=>{return{...prev,[target.name]:error.message}}) ;
        }
        else{
            setErrors((prev)=>{
                let obj = {...prev};
                delete obj[target.name];
                return obj;
            });
        }
        

    }
    return {
        updateData,

    }
}
