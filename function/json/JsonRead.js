export const JsonInfo = function (data) {
    console.log(data.title);
    for (let i in data.option){
        console.log(data.option[i])
    }
    console.log('\n')
}