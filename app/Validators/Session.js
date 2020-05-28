'use strict'

class Session {
  get rules () {
    return {
      email: 'required|email',
      password: 'required|string'
    }
  }
}

module.exports = Session
