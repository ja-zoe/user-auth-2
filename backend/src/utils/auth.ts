import jwt from "jsonwebtoken"

const createAccessToken = (username: String) => {
    if(process.env.ACCESS_TOKEN_SECRET){
        const token = jwt.sign(
            {username: username}, 
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '5min'}
        )
        return token
    } else {
        console.error('Access token secret not defined in environment variables')
    }

}

const createRefreshToken = (username: String) => {
    if(process.env.REFRESH_TOKEN_SECRET) {
        const token = jwt.sign(
            { username: username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1hr' }
        )
        return token
    } else {
        console.error('Refresh token secret not defined in environment variables')
    }
}

export { createAccessToken, createRefreshToken }