const BASE_URL = 'https://marvel-api-linnea.herokuapp.com'

export const SIGNIN = 'sessions'

export const SIGNUP = 'signup'

export const EDIT_USER = (id) => `https://marvel-api-linnea.herokuapp.com/sessions/${id}`

export const API_URL = (slug) => `${BASE_URL}/${slug}`
