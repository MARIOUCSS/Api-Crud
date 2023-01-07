const express=require('express');
const {GetUsers,NewUsuario,Oneuser,DeleteUser,UpdateUser}=require('../controllers/UsersController')

const Router=express.Router();

Router.get('/',GetUsers)
      .post('/',NewUsuario)
      .get('/:id',Oneuser)
      .delete('/:id',DeleteUser)
      .put('/:id',UpdateUser)
module.exports=Router