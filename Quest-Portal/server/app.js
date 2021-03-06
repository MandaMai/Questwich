const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const User = require('./model/user');
const Post = require('./model/post');
const Quest = require('./model/quest');

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))
const url = 'mongodb://localhost/QuestWich';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

app.post('/api/user/login', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) return "Not able to connect to QuestWich Database at this time: " + err;
        User.find({
            email : req.body.email, password : req.body.password
        }, function(err, user){
            if(err) throw err;
            if(user.length === 1){  
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                return res.status(400).json({
                    status: 'fail',
                    message: 'Login Failed'
                })
            }
             
        })
    });
})

app.post('/api/post/getAllPost', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) return "Not able to connect to Post Collection at this time: " + err;
        Post.find({},[],{ sort: { _id: -1 } },(err, doc) => {
            if(err) {
                return releaseEvents.status(400).json({
                    status: 'fail',
                    data: doc
                })
            }
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/post/createPost', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) return "Not able to connect to Post Collection at this time: " + err;
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        })
        post.save((err, doc) => {
            if(err) {
                return releaseEvents.status(400).json({
                    status: 'fail',
                    data: doc
                })
            }
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/post/updatePost', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) return "Not able to connect to Post Collection at this time: " + err;
        Post.update(
            {_id: req.body.id },
            { title : req.body.title, description: req.body.description },
            (err, doc) => {
                if(err) {
                    return releaseEvents.status(400).json({
                        status: 'fail',
                        data: doc
                    })
                }
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/post/deletePost', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) throw err;
        Post.findByIdAndRemove(req.body.id,
            (err, doc) => {
                if(err) {
                    return releaseEvents.status(400).json({
                        status: 'fail',
                        data: doc
                    })
                }
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/quest/getAllQuest', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) return "Not able to connect to Quest Collection at this time: " + err;
        Quest.find({},[],{ sort: { _id: -1 } },(err, doc) => {
            if(err) {
                return releaseEvents.status(400).json({
                    status: 'fail',
                    data: doc
                })
            }
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/quest/createQuest', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) return "Not able to connect to Quest Collection at this time: " + err;
        const quest = new Quest({
            name: req.body.name,
            description: req.body.description,
            progress: req.body.progress,
            icon: req.body.icon,
            endGoalDate: req.body.endGoalDate,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            totalCampaign: req.body.totalCampaign
        })
        quest.save((err, doc) => {
            if(err) {
                return releaseEvents.status(400).json({
                    status: 'fail',
                    data: doc
                })
            }
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/quest/updateQuest', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) return "Not able to connect to Quest Collection at this time: " + err;
        Quest.update(
            {_id: req.body.id },
            { 
                name: req.body.name,
                description: req.body.description,
                progress: req.body.progress,
                icon: req.body.icon,
                endGoalDate: req.body.endGoalDate,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                totalCampaign: req.body.totalCampaign
             },
            (err, doc) => {
                if(err) {
                    return releaseEvents.status(400).json({
                        status: 'fail',
                        data: doc
                    })
                }
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/quest/deleteQuest', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) return "Not able to connect to Quest Collection at this time: " + err;
        Quest.findByIdAndRemove(req.body.id,
            (err, doc) => {
                if(err) {
                    return releaseEvents.status(400).json({
                        status: 'fail',
                        data: doc
                    })
                }
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/user/createUser', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) return "Not able to connect to User Collection at this time: " + err;
        const quest = new Quest({
            //update fields here
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            biography: req.body.biography,
            birthdate: req.body.birthdate,
            totalProgressCompleted: req.body.totalProgressCompleted

        })
        quest.save((err, doc) => {
            if(err) {
                return releaseEvents.status(400).json({
                    status: 'fail',
                    data: doc
                })
            }
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/user/updateUser', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) return "Not able to connect to Quest Collection at this time: " + err;
        Quest.update(
            {_id: req.body.id },
            { 
                //update user
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                biography: req.body.biography,
                birthdate: req.body.birthdate,
                totalProgressCompleted: req.body.totalProgressCompleted
             },
            (err, doc) => {
                if(err) {
                    return releaseEvents.status(400).json({
                        status: 'fail',
                        data: doc
                    })
                }
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/user/getUser', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) return "Not able to connect to Quest Collection at this time: " + err;
        User.find({
            email : req.body.email, password : req.body.password
        }, function(err, user){
            if(err) throw err;
            if(user.length === 1){  
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                return res.status(400).json({
                    status: 'fail',
                    message: 'Login Failed'
                })
            }
             
        })
    });
})



app.listen(3000, () => console.log('blog server running on port 3000!'))