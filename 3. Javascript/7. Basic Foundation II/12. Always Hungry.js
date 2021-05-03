function myFun12(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            counter++;
        }
    }
    if (counter == 0) {
        console.log("I'm hungry");
    }
}
let a = ["food", "food", 2, 0, -2, "fd", "food"]
let b = [5, 0, "fd"];
myFun12(a);
myFun12(b);