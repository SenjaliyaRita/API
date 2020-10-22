const { promiseImpl } = require('ejs')
const { resolve } = require('path')
const users = require('../data-source/users')
const User = require('../models/User')

exports.login = (username,password) => {
    var user=null
    for (let i in users) {
        if (users[i].emailid == username && users[i].password==password) {
            user = users[i]
          break;
        }
      }
    return new Promise((resolve,reject)=>{
        if(user!=null){
            resolve(user)
        }
        else{
            reject({msg:'User Not Found'})
        }
    })
}

exports.addUser = (name, mobileno, emailid,password,address ) => {
    const newId = users.length === 0 ?  1  :users[users.length-1].id + 1 
    const newUser = new User(
        newId,
        name,
        mobileno,
        emailid,
        password,
        address
      )
    
      users.push(newUser)
    
      return new Promise((resolve,reject) => {
        if(newUser){
            resolve(newUser)
        }
        else{
            reject()
        }
    })
}

exports.getUserList = ()=>{
    return new Promise((resolve)=>{

        resolve(users)
    })
}

