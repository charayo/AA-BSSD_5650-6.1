function CatFactAdapter(target){//implement FDAResult

    //Holds a reference to anew CatFact
    let catFact = new CatFact(target)

    return{
        //create a new object that aliases CatFact methods as FDAResult methods
        loadData: function(argument){
            catFact.loadFact(argument)
        },
        loadArrayToTarget: function(){
            catFact.loadTarget();
        }
    }
}