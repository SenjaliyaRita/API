class User {
    constructor(id,name,mobileno,emailid,password,address="",  date = new Date()) {
        this.id=id
        this.name = name
        this.mobileno = mobileno
        this.emailid = emailid
        this.password = password
        this.address=address
        this.date = date
    }
}
module.exports= User