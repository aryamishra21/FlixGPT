export const checkValidateData=(isSignInForm,name,email,password)=>{
    const isEmailValid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    let errors={}
    if(isSignInForm){
        if(!name?.length || name===null){
            errors.name='Name is required'
        }
    }
    if(!isEmailValid){
        if(email.length==0){
        errors.email='Email is required'
        }
        else{
            errors.email='Email is not valid'
        }
    }
    if(!isPasswordValid){
        if(password.length==0){
        errors.password='Password is required'
        }
        else{
            errors.password="Password is not valid"
        }
    }
    return errors
}