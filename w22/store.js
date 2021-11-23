const storeService = (function (){

    function loadJson(url, callback) {

        $.getJSON(url, callback)

    }

    function getStore(sno) {

    }





    return {loadJson, getStore}
})