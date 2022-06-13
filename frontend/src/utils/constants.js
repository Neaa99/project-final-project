const BASE_URL = 'https://marvel-api-linnea.herokuapp.com'

export const SIGNIN = 'sessions'

export const SIGNUP = 'signup'

export const EDIT_USER = (AuthId) => `https://marvel-api-linnea.herokuapp.com/sessions/${AuthId}`

export const API_URL = (slug) => `${BASE_URL}/${slug}`
