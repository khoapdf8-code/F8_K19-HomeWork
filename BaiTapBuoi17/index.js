//Exercise 1
function isEvenNumber(num){
    return num % 2 === 0;
}
console.log(`output cho bai tap 1 voi input 4: ${isEvenNumber(4)}`); // true
console.log(`output cho bai tap 1 voi input 7: ${isEvenNumber(7)}`); // false
 //Exercise 2
 function getElectricityBill(kwh){
    if (kwh <= 50) {
        return kwh * 1.678;
    } 
    else if (kwh <= 100) {
        return 50 * 1.678 + (kwh - 50) * 1.734;
    }
    else if (kwh <= 200) {
        return 50 * 1.678 + 50 * 1.734 + (kwh - 100) * 2.014;
    }
    else if (kwh <= 300) {
        return 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + (kwh - 200) * 2.536;
    }
    else if (kwh <= 400) {
        return 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + 100 * 2.536 + (kwh - 300) * 2.834;
    }  
    else{
        return 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + 100 * 2.536 + 100 * 2.834 + (kwh - 400) * 2.927;
    }
 }
console.log(`output cho bai tap 2 voi input 70: ${getElectricityBill(70)}`); 
// Mong đợi: (50 * 1678) + (20 * 1734) = 118580

console.log(`output cho bai tap 2 voi input 120: ${getElectricityBill(120)}`); 
// Mong đợi: (50 * 1678) + (50 * 1734) + (20 * 2014) = 210880
//Exercise 3
function cleanName(name, keyword){
    const cleanedName = name.trim().toLowerCase();
    const cleanedKeyword = keyword.trim().toLowerCase();
    return cleanedName.includes(cleanedKeyword);

}
console.log(`output cho bai tap 3 voi input '   NGUYEN Van An   ' va 'an': ${cleanName('   NGUYEN Van An   ', 'an')}`); // Mong đợi: true (vì 'nguyen van an' có chứa 'an')
console.log(`output cho bai tap 3 voi input '   Tran Thi B ', 'hoang': ${cleanName('   Tran Thi B ', 'hoang')}`);   // Mong đợi: false
