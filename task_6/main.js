let arr = [10, 20, 30, 50, 235, 3000];


for(let i=0; i < arr.length; i++){
    if(String(arr[i])[0]=="1" ||  String(arr[i])[0]=="2" || String(arr[i])[0]=="5"){
        alert(arr[i]);
    }
}