// var ctoProduct = [];
// ctoProduct.push(cto);

// for(i = 0; i < ctoProduct.length; i++) {
//     ctoProduct[i] = String(ctoProduct[i])+',';
// }
// const name = ctoProduct.split(',');

// var item = new Array();
// item.addData = function(n, cto) {
//     item.push(...Array(n).fill(cto));
// }

// item.deleteData = function() {
//     ctoProduct.splice(0, ctoProduct.length);
// }

var obj = [1,134,156,752];
var test = [];
for(i = 0; i < obj.length; i++) {
    obj[i] = String(obj[i])+',';
    test.push(obj[i]);
}

console.log(test[2]);


