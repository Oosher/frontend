import Joi from "joi";



export default function useData(setData,schema,setErrors) {

    const updateData =({target})=>{
        if (!target.name.includes(".")){
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
    }else{
        const name = target.name.split(".");
        setData((prev)=>{return {...prev ,[name[0]]:{...prev[name[0]],[name[1]]:target.value}}});
        const inputSchema = Joi.object({[name[1]]:schema[name[1]]});
        console.log(name[1]);
        const {error} = inputSchema.validate({[name[1]]:target.value});

        if (error) {
            setErrors((prev)=>{return{...prev,[name[1]]:error.message}}) ;
        }
        else{
            setErrors((prev)=>{
                let obj = {...prev};
                delete obj[name[1]];
                return obj;
            });
        }
    }
    }
    return {
        updateData,

    }
}
