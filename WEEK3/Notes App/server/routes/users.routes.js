const userController = require('../controllers/user.controller')


module.exports = app =>{
    // app.post('/api/register',userController.registerOld)
    app.post('/api/registerNew',userController.register)
    app.post('/api/login',userController.login)
    app.post('/api/logout',userController.logout)
    app.get('/api/loggedUser',userController.getLoggedUser)


}