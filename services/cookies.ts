import Cookies from 'universal-cookie'

const cookies = new Cookies(null, { path: '/', domain: '.punkga.me' })

export const cookiesInstance = cookies
