'use strict'

class User {
  get rules () {
    return {
      username: 'required|string',
      email: 'required|email',
      password: 'required|min:6'
    }
  }
}

module.exports = User
