// import or export로 CTO 변수 받아옴
// import로 받아온 변수의 이름은 cto
// user가 요소를 선택하게 해주는 함수도 받아와야함

var ctoProduct = [];
ctoProduct.push(cto);

for(i = 0; i < ctoProduct.length; i++) {
    ctoProduct[i] = String(ctoProduct[i])+',';
}
const name = ctoProduct.split(',');

var item = new Array();
item.addData = function(n, cto) {
    item.push(...Array(n).fill(cto));
}

item.deleteData = function() {
    ctoProduct.splice(0, ctoProduct.length);
}


