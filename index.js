const version = require('./package.json').version;
const fastify = require('fastify')({
    logger: true
  })
  
// Declare a route
fastify.get('/:al', function (request, reply) {
  reply.send({ version: version , gelen:request.params.al })
})

// Run the server!
fastify.listen(process.env.PORT || 3000, '0.0.0.0',function (err) {
  if (err) {
      fastify.log.error(err)
      throw Error(err);
  }
})

