import JWT from "jsonwebtoken"

const generateToken = async (id) => {
    console.log('id', id)
    return await JWT.sign({id}, process.env.JWTSECRET, {expiresIn:'2hrs'})
}

export default generateToken