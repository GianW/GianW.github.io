exports.getStorage = function(){
    let obj;

    let appState = {
        lang: "en"
    }

    let objStorage = getObjStorage();

    if (objStorage !== null) {
        try {
            obj = JSON.parse(objStorage.getItem('gianw'));
        }
        catch (err) {
            obj = appState;
            objStorage.setItem("gianw", JSON.stringify(obj));

        }

        if (!obj) {
            obj = appState;
            objStorage.setItem("gianw", JSON.stringify(obj));
        }
    }else{
        obj = appState;
    }

    return obj;
};

exports.setStorage = function(data){
    let objStorage = getObjStorage();
    if (objStorage !== null) {
        objStorage.setItem("gianw", JSON.stringify(data));
    }
};

function getObjStorage(){
    if (typeof window !== 'undefined' && window.localStorage !== "undefined"){
        return window.localStorage;
    }else{
        return null;
    }
};