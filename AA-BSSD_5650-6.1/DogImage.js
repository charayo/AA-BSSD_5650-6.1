function DogImage(target){
    result = null;
    target = target;

    this.loadImage = function(url){
        var request = new XMLHttpRequest()

        request.open('GET', url, true)
        request.onload = function () {
            //begin accessing JSON data here
            var data = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                result = data.message;
            } else {
                console.log('error');
            }
        }
        request.send()
    }

    this.loadImageToTarget = function(){
         // if the result is loaded, put it into target
         if (result != null) {
            let dogImg = document.createElement("img");
            dogImg.src = result;
            target.append(dogImg);
        } else {
            //wait one second and try again if result empty
            setTimeout(this.loadImageToTarget, 1000);
        }
    }
}