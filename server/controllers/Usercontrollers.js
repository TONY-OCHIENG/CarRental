
export const userAccountCreation = (request,response) => {
    const {firstname, lastname, email,password} = request.body
    console.log(firstname,lastname,email,password)
}