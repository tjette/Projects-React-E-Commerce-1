const User = require('../../models/User')

module.exports = function (app, passport) {
  app.post('/api/signup', (req, res, next) => {
    const authenticator = passport.authenticate('local-signup', (err, user, info) => {
      if (err) {
        return next(err)
      } else if (!user) {
        return res.status(404).json(info.message)
      } else {
        user.save((err) => {
          if (err) {
            return res.status(500).json(err)
          } else {
            req.logIn(user, (err) => {
              if (err) {
                return res.status(500).json(err)
              } else {
                return res.json({data: user})
              }
            })
          }
        })
      }
    })
    authenticator(req, res, next)
  })

  // ****** LOG IN (SIGN IN)*******
  app.post('/api/login', (req, res, next) => {
    // this is another way of passing in a required module its arguments for a given method
    const authenticator = passport.authenticate('local-login', (err, user, info) => {
      if (err) res.json({error: err.message})
      if (!user) {
        return res.status(404).json(info.message) // info is an object
      }
      req.logIn(user, (err) => {
        if (err) res.json({error: err.message}) // uses json to send back error to client
        console.log(user)
        return res.json({
          message: 'Successfully logged in. Welcome back!',
          data: user
        })
      })
    })
    authenticator(req, res, next)// set function equal to a variable above, then call this function here
  })

  app.get('/api/get_user', (req, res, next) => {
    console.log(Object.keys(req).sort) // endpoint makes more sense as "get_user" rather than "login"
    if (req.user) { // only exists (part of the req object) if someone has successfully logged in
      console.log('user IS logged in')
      res.json({data: req.user, isAuthed: true}) // if the user is in, show them
    } else { // otherwise user gets an error (pop up message) and can't login
      console.log('NOT logged in')
      res.json({
        isAuthed: false,
        message: 'You are not logged in!'
      })
    }
  })

  app.get('/api/logout', (req, res) => {
    req.logout()
    return res.status(200).json({
      message: 'Logout successful'
    })
  })
}
