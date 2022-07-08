
function loadTables (arr) {
    document.getElementById("task").innerHTML = "";

    // load th
    document.getElementById("task").innerHTML += `

        <tr>
            <th>Số thứ tự</th>
            <th>Code</th>
            <th>Chức năng</th>
        </tr>

    `;
    arr.forEach(addElement);

}

function addElement (value, index) {
    document.getElementById("task").innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${value}</td>
            <td>
            <button onclick='copy("${btoa(value)}")'>Copy</button>
            <button onclick='removeCode(${index})'>Delete</button>
            </td>
        </tr>
    `;
}

function copy (base64) {
    let dec = atob(base64);
    navigator.clipboard.writeText(dec).then(res=> {
        alert("Copy code thành công!");
    })
}