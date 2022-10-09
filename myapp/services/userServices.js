var express = require('express');
var con = require('../data/connect');
function registerUser(user, req, res, next){
    var teste = con.connect();
    if(true){
        return "ok"
    }else{
        return "erro"
    }
    return 0;
}
function listAllUsers(){
    
}

function listUserById(id){
    
}

function deleteUser(id){
    
}
function updateUser(user){
    
}

module.exports = {registerUser, listAllUsers, listUserById, deleteUser, updateUser}