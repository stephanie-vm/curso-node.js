const User = require('../models/user.model');

const userService = {}

userService.createUser = async function ({name, email}) {
    try {
        const user = new User ({name, email})
        const newUser =  await user.save()
        return newUser;
    } catch(e){
        throw new Error ('Error while save user')
    }
}

userService.getUsers = async function(){
    try {
        const users = await User.find({});
        return users;
    }catch (e){
        throw new Error ('Error while paginating users')
    }
}

userService.getUser = async function({ id }) {
    try {
        const user = await User.findById(id);
        return user;
    }catch (e){
        throw new Error ('Error while returning user')
    }
}

userService.updateUser = async function({id}, {name, email} ){
    try {
        const user = await User.findById(id);
        const updateUser = await user.set({name, email});
        await updateUser.save();
        return updateUser;
    }catch (e){
        throw new Error ('Error while update user')
    }
}
module.exports = userService;
