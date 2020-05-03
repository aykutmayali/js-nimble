const BaseDatabase = require('./base-database')
const Member = require('./member')

class MemberDatabase extends BaseDatabase { 
    // constructor(){         
    //         super(Member)        
    // }
}

module.exports = new MemberDatabase(Member)