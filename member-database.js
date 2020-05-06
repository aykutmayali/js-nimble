const BaseDatabase = require('./base-database')
const Member = require('./member')

class MemberDatabase extends BaseDatabase { 
    // constructor(){         
    //         super(Member)        
    // }
    findByName(name){
        const objects=this.load()
        return objects.find(o=>o.firstName == name)
    } 
}

module.exports = new MemberDatabase(Member)