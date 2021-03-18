import * as functions from 'firebase-functions'

const mysecrets = (functions.config().mysecrets)

export {mysecrets}