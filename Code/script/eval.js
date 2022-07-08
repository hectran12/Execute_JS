let listCode = [];

function eval_code (code, name_function) {
    try {
        let function_code = `
            function ${name_function}() {

                ${code}
            }
        `;
        
        eval(code);

        add_code(function_code);
        loadHistory();
    } catch {
        alert("Lỗi thực thi code");
    }
}

function getAllHistory() {
    return listCode;
}

function resetStt () {
    let listCode_cloner = [];
    listCode.forEach(add);
    listCode = listCode_cloner;
    loadHistory();

    function add(value, index) {
        if(value != undefined) {
            listCode_cloner.push(value);
        }
    }
}
function loadHistory () {
    loadTables(listCode);
}

function add_code (str) {
    return listCode.push(str);
}

function removeCode (stt) {
    delete listCode[stt];
    //loadHistory();
    resetStt();
}
