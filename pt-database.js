const BaseDatabase = require('./base-database')
const PT = require('./pt')

class PTDatabase extends BaseDatabase { 
    // constructor(){         
    //         super(PT)        
    // }
    findByName(name){
        const objects=this.load()
        return objects.find(o=>o.firstName == name)
    } 
}


module.exports = new PTDatabase(PT)