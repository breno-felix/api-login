const { adapt } = require('../adapters/express-router-adapter')
const LoginRouterComposer = require('../composers/login-router-composer')

module.exports = (router) => {
  const loginRouter = LoginRouterComposer.compose()
  router.post('/login', adapt(loginRouter))
}
