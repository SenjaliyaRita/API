const userService = require('../Services/userServices')

exports.login = (req,res) => {
    const { username,password } = req.body
    userService.login( username, password)
    .then(result=>{
        return res.status(200).json(result)
    })
    .catch(err=>{
        return res.status(400).json(err)
    })
}

exports.addUser = (req,res) => {
    const { name, mobileno, emailid,password,address } = req.body
        userService.addUser(name, mobileno, emailid,password,address )
        .then(result => {
           return res.status(200).json(result)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
    }

exports.getUserList = (req,res)=>{

    userService.getUserList()
    .then(result=>{
        return res.status(200).json(result)
    })
    .catch((err)=>{
        return res.status(400).json(err)
    })
}

exports.deleteUser = (req,res)=> {
    const { id } = req.body
    userService.deleteUser(id)
    .then(result=>{
        return res.status(200).json(result)
    })
    .catch((err)=>{
        return res.status(400).json(err)
    })
}