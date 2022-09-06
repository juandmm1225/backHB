const db = require("../models/index");
const repoModel= require("../models/repos")(db.sequelize, db.Sequelize.DataTypes);

exports.createRepo= async (request,response)=>{
    const newRepo = {  
        name: request.body.name,
        repoId: request.body.repoId,
        username: request.body.username,
        owner: request.body.owner,
        url: request.body.url,
        gitUrl: request.body.gitUrl,
        fav: request.body.fav }

        const resultResponse = await repoModel.create(newRepo);

        return resultResponse;
        
}

exports.editRepo= async (request,response)=>{
    const newRepo = {  
        name: request.body.name,
        repoId: request.body.repoId,
        username: request.body.username,
        owner: request.body.owner,
        url: request.body.url,
        gitUrl: request.body.gitUrl,
        fav: request.body.fav }

        const repo = await repoModel.findOne({ repoId: request.body.repoId });

        if (repo) {
            await repo.update();
            return;
               
        }
        return repo;
        
}

exports.deleteRepo= async (request,response)=>{
    const newRepo = {  
        repoId: request.body.repoId }

        const repo = await repoModel.findOne({ repoId: request.body.repoId });

        if (repo) {
            await repo.destroy();
            return;
               
        }
        return repo;
}

exports.listRepo= async (request,response)=>{
    const newRepo = { 
           repoId: request.body.repoId 
         }

        const resultResponse = await repoModel.findAll(newRepo);

        return resultResponse;
        
}