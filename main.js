var cloths = ["Jacket + Warm Pants", "Spring Jacket + Jeans", "T-Shirt + Shorts", "Hoodie + Pants"]
var seasons = ["winter", "spring", "summer", "fall"]
function start(){
    var input = readLine("Hey! Give me a season that you have right now and I will give you clothing that match your weather! ");
    var result = season(input);
    console.log(result)
}
function season(input){
    for(var i = 0; i < seasons.length; i++){
        if(input.toLowerCase() === seasons[i]){
            console.log(input)
            return cloths[i];
        }
    }
}