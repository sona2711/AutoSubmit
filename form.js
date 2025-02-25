const sendBtn = document.querySelector("#submit_btn");
const input = document.getElementById("excel_file");
const textArea = document.querySelector("#jsonFile");
const dataList = [];



if(input){
    input.addEventListener("change", function (event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function (e) {
            let data = new Uint8Array(e.target.result);
            let workbook = XLSX.read(data, { type: "array" });
    
            let sheetName = workbook.SheetNames[0];
            let sheet = workbook.Sheets[sheetName];
    
            let jsonData = XLSX.utils.sheet_to_json(sheet); 
            dataList.push(jsonData)
            sendBtn.addEventListener("click", createFileSender(dataList))
             console.log(dataList)
            textArea.innerText = JSON.stringify(jsonData, null, 2);
        };
    
        reader.readAsArrayBuffer(file);
    });
}



function createFileSender(data){
    if(data){
        for(let i = 0; i < data.length; i++){
            for(const [key, value] of Object.entries(data[i])){
                let userInfo = value;
                for(const [key, value] of Object.entries(userInfo)){

                console.log(key, value)
              }

            }
        } 
    }
}