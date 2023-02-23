function FDAResult(target) {
    result = [];

    this.loadData = function (url) {
        // taken from: https://www.taniarascia.com/how-to-connect-an-api-with-javascript
        var request = new XMLHttpRequest()

        request.open('GET', url, true)
        request.onload = function () {
            //begin accessing JSON data here
            var data = JSON.parse(this.response)
            data = data.results;
            if (request.status >= 200 && request.status < 400) {
                data.forEach(recall => result.push("<br />" + recall.reason_for_recall))
            } else {
                console.log('error');
            }
        }
        request.send()
        
    }
    this.loadArrayToTarget = function () {
        // if the result is loaded, put it into target
        if (result.length > 0) {
            target.innerHTML = result.join(" ");
        } else {
            //wait one second and try again if result empty
            setTimeout(this.loadArrayToTarget, 1000);
            
        }
    }
}