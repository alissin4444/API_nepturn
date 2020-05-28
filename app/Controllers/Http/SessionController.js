'use strict'

'use strict'
/** @typedef {typeof import('@adonisjs/lucid/src/Lucid/Model')} Model*/
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/auth/src/Schemes/Session')} Auth */

/** @type {Model} */
const User = use('App/Models/User')

class SessionController {
  /**
   *
   * @param {Object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {Auth} ctx.auth
   */
  async store ({ auth, request, response }) {
    const { email, password } = request.all();

    const { token } = await auth.attempt(email, password)

    const user = await User.query().where('email', email).select(['id', 'username', 'email']).first()

    return response.ok({ user, token })
  }
}

module.exports = SessionController
