const query=require('../mysql')

async function getUser(user){
    const users =await query.client.executeAsync(user)
    return users
}
async function userWithData (user,data){
    const newUser =await query.client.executeDataWithAsync(user,data)
    return newUser
}

exports.userData={
    // Get all user with details
    async  user(req,res){
    
        try {
            let userList = await getUser('SELECT * FROM user')  
            res.send(userList)
        } catch (error) {
            res.send({massage:'Invalid'})
        }finally{
            console.log('get data.')
        }
    },
     //Create user Account    
    async  addUser(req,res,next){
        let newuser={
        name:req.body.name,
        email:req.body.email,
        telephone:req.body.telephone
        }
        userWithData ('INSERT INTO user SET ?',newuser)
        .then(u=>res.send({massage:'New user added.'})).catch(err=>{
            console.log(err)
            res.send({massage:'Invalid'})
            next()
        })
    },
    // Get user with id
    async  userWithId(req,res){
         getUser(`SELECT * FROM user WHERE id=${req.params.id}`)
        .then(u=>res.send(u)).catch(err=>{
            console.log(err)
            res.send({massage:'Invalid'})
        })
    },
    //Update user with user id
    async  updateUser(req,res){
        let newuser={
            name:req.body.name,
            email:req.body.email,
            telephone:req.body.tele
        }
        userWithData (`UPDATE user SET ? WHERE id=${req.params.id}`,newuser)
        .then(u=>res.send({massage:'User Updated Successfully.'})).catch(err=>{
            console.log(err)
            res.send({massage:'Invalid'})
        })
            
        
    },
    // Delete user
    async  deleteUser(req,res){
            
        getUser (`DELETE FROM user  WHERE id= ${req.params.id}`)
        .then(u=>res.send({massage:'User Deleted Successfully.'})).catch(err=>{
            console.log(err)
            res.send({massage:'Invalid'})
        })
            
        
    },

}
