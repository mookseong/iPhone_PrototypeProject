import {iPad_Pro} from "../../Data/product/iPad.js";


function Basket() {
    var products = [];
    this.addProduct = function(amount, product) {       // 물건 추가
        products.push(...Array(amount).fill(product));  // amount 만큼 배열에 Function 추가
    }
    this.calcTotal = function() {
        console.log("선택한 제품 :");
        console.log("총 "+products.length + "개를 선택하였습니다.");
        return products.map(product => product.getPrice()).reduce((a,b) => a+b, 0); // 제품의 가격을 모두 더함
    } // 이 부분에서 커링함수 적용 가능할 거 같음. 생각해보기
    // 총 수량과 총 가격을 const 객체로 만들어보기
    this.finishShopping = function() {
        console.log("지불 할 금액은 "+this.calcTotal()+"만원 입니다.");   // 지불할 금액 출력
    }
    this.deleteProduct = function() {                   // 물건 삭제
        products.splice(0, products.length);            // 0부터 제품 수량까지 돌면서 삭제
    }


}
console.log(iPad_Pro)
console.log(iPad_Pro.Name)
console.log(iPad_Pro.Color)
console.log(iPad_Pro.Performance.CPU)


// 1. 사용자가 원하는대로 프로퍼티 값을 바꿔준 객체를 받아와야 함
// 2. 그 객체의 name과 price를 뽑아서 basket.js로 가져와야 함
// 3. 그 name과 price를 가지고 Product의 새로운 객체를 생성해야 함
// 4. 객체를 addProduct를 통해 basket에 넣어주고 사용자가 '계산하기'를 선택하면 finishShopping이 실행돼야 함
// 요약 : CTO 객체를 어디서 정의하고 어떻게 받아올 것인지 고민해볼 것