export const Mac_Option = {
    MacProcess: function (Model) {
        console.log("원하는 프로세스를 선택하세요.");
        switch (Model) {
            case "Pro_Low":
                console.log("원하는 프로세스를 선택하세요.");
                break;
            case 4:
                alert( '비교하려는 값과 일치합니다.' );
                break;
            case 5:
                alert( '비교하려는 값보다 큽니다.' );
                break;
            default:
                alert( "어떤 값인지 파악이 되지 않습니다." );
        }
    },
    MacColor : function () {
        console.log("맘에 드는 마감을 선택하세요.")
        console.log('1.스페이스 그레이\t2.실버\n');
    },
    MacStorage: function () {
        console.log('원하는 용량을 선택하세요.');
        console.log('1.128G \t2.256G "\n3.512G\t4.1Tb\n5. 2TB\n');
    },
    trade_in: function () {
        console.log('보상 판매할 iPhone이 있으신가요?\n');
    }
};


