
class Users{
    constructor (){
        this.users = [];
    }

    isUnique(name,room){
        return this.users.filter((user)=> user.name === name && user.room === room )[0];
    }
    addUser(id, name, room){
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser(id){
        var user = this.getUser(id);

        if(user){
            this.users = this.users.filter( (user) => user.id !== id );
        }
        return user;
    }

    getUser(id){
        var users = this.users.filter((user) => user.id === id )[0];
        return users;
    }

    getUserList(room){
        var users = this.users.filter((user) => user.room === room );
        var names = users.map( (user) =>  user.name );
        return names;
    }
}

module.exports = {Users};