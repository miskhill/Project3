// export const port = 4000
// export const dbURI = 'mongodb://localhost/lolmatch-api'
// export const secret = 'william is cool'


export const DB_URI = process.env.DB_URI || 'mongodb+srv://miskhill:williamiscool@cluster0.ltwf1if.mongodb.net/?retryWrites=true&w=majority'
export const PORT = process.env.PORT || 4000
export const secret = process.env.SECRET || 'william is cool'
export const host = process.env.host || '0.0.0.0'



