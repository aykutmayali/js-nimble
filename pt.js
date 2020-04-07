class PT{
    constructor(sports,Documents,usingBrand,seesionFee,location){
        this.sports= sports || "CrossFit"
        this.Documents= Documents || []
        this.usingBrand= usingBrand || "Nike" 
        this.seesionFee= sessionFee || 100
        this.location= location || "Istanbul Avrupa"        
    }
    setPrice(number){
        console.log("Session fee for this PT is {0}",number)
    }
    setDate(startDate,endDate){
        console.log(" for this PT free between {0},{1} dates",startDate,endDate)
    }
}