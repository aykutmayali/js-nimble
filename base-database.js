const fs = require('fs')
const flatted = require('flatted')

class BaseDatabase{
    constructor(model){
        this.model=model
        this.filename=model.name
    }

     save(objects){
        fs.writeFileSync('./${this.filename}.json',flatted.stringify(objects,null,2))
    }
     
     load(filename){
        const file=fs.readFileSync('./${this.filename}.json','utf8')
        const objects=flatted.parse(file)
        return objects.map(this.model.create)
    }
    
     insert(object){
        const objects=this.load()
        save(objects.concat(object))
    }
    
     remove(index){
        const objects=this.load()
        objects.splice(index,1)
        save(objects)
    }    
    
}
module.exports=BaseDatabase