const fastify = require('../fastify')()

const opts = {
  schema: {
    out: {
      type: 'object',
      properties: {
        hello: {
          type: 'string'
        }
      }
    }
  }
}
fastify.register(require('./plugin'), opts, function (err) {
  if (err) throw err
})

fastify.listen(8000, function (err) {
  if (err) {
    throw err
  }
  console.log(`server listening on ${fastify.server.address().port}`)
})
