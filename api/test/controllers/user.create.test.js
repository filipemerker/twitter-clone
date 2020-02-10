const { create } = require('../../controllers/user')

describe('User creation', () => {
  const response = {}
  const res = {
    status: code => {
      response.status = code

      return { json: ({ data }) => response.data = data }
    }
  }

  it('Should send a status code 200 if user was created', () => {
    const user = {
      username: 'tester',
      password: '@4U&sk~k%WGD2&v:'
    }
    const req = {
      body: { user }
    }

    return (
      create(req, res)
        .then(() => expect(response.status).toBe(200))
    )
  })


  it('Should send the user data if user was created', () => {
    const user = {
      username: 'tester',
      password: '@4U&sk~k%WGD2&v:'
    }
    const req = {
      body: { user }
    }

    return (
      create(req, res)
        .then(() => expect(response.data).toEqual(user))
    )
  })
})