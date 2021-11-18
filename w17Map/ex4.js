

const storeService = (function () {

    let storeArr = []

    function loadData(url, callback) {

        fetch(url)
            .then(  response => response.json())
            .then(  data => {

                console.log(`data::::::::::::::${data}`)

             storeArr = data

            callback(data)
            })

    }

    return{loadData}

})()