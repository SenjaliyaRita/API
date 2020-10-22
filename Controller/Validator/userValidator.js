exports.addUserValidator = (req, res, next) => {

    const { name, mobileno, emailid,password,address} = req.body
    let errors = {}
  
    if (name === '') errors.caption = 'Name can not be blank.'
    if (mobileno === '') errors.description = 'Mobile No can not be blank.'
    if (emailid === '') errors.description = 'Email can not be blank.'
    if (password === '') errors.description = 'Password can not be blank.'

    if (Object.keys(errors).length === 0) {
      next()
    } else {
      res.status(400).json(errors)
    }
  }
