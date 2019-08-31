exports.getStorage = function(){
    let obj;

    let appState = {
        lang: "br"
    }

    try {
        obj = JSON.parse(localStorage.getItem('gianw'));
    }
    catch (err) {
        obj = appState;
        localStorage.setItem("gianw", JSON.stringify(obj));

    }

    if (!obj) {
        obj = appState;
        localStorage.setItem("gianw", JSON.stringify(obj));
    }

    return obj;
};


exports.setStorage = function(data){
    localStorage.setItem("gianw", JSON.stringify(data));
};
