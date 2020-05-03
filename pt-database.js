const BaseDatabase = require('./base-database')
const PT = require('./pt')

class PTDatabase extends BaseDatabase { 
    // constructor(){         
    //         super(PT)        
    // }
}


module.exports = new PTDatabase(PT)