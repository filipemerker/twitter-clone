describe('User creation', () => {

  it('Should return a user object', () => {
    expect(typeof user).toBe('object')
  })

  it('Should return a user with a name', () => {
    expect(user.name).toBeTruthy()
  })
})