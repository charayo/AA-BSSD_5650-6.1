function CatFact(target) {
    result = null;

    this.loadFact = function (url) {
        // taken from: https://www.taniarascia.com/how-to-connect-an-api-with-javascript
        var request = new XMLHttpRequest()

        request.open('GET', url, true)
        request.onload = function () {
            //begin accessing JSON data here
            var data = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                result = data.fact;
            } else {
                console.log('error');
            }
        }
        request.send()
    }
    this.loadTarget = function () {
        // if the result is loaded, put it into target
        if (result != null) {
            target.innerHTML = result;
        } else {
            //wait one second and try again if result empty
            setTimeout(this.loadTarget, 1000);
        }
    }
}