function DogImageAdapter(target){//implement FDAResult

    //Holds a reference to anew DogImage
    let dogImage = new DogImage(target)

    return{
        //create a new object that aliases CatFact methods as FDAResult methods
        loadData: function(argument){
            dogImage.loadImage(argument)
        },
        loadArrayToTarget: function(){
            dogImage.loadImageToTarget();
        }
    }
}