'use strict'
/** @typedef {typeof import('@adonisjs/lucid/src/Lucid/Model')} Model*/
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @type {Model} */
const User = use('App/Models/User')

class UserController {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response}) {
    const data = request.only(['username', 'email', 'password'])

    const emailNotAvailable = await User.findBy('email', data.email)

    if( emailNotAvailable ) {
      return response.badRequest({ field: 'email', 'message': 'Email not available' })
    }

    const user = await User.create(data);

    return response.created(user)
  }
}

module.exports = UserController
