import crypto from 'node:crypto'

const secret = 'my-secret-123'
const hash = crypto.createHmac('sha256', secret)
    .digest('hex')
console.info(hash)