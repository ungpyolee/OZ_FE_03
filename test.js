function goToSchool() {
    console.log("학교에 갑니다.");
}

function arriveAtSchool_tobe() {
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log("학교에 도착했습니다.");
            resolve();
        }, 1000);
    });
}
function study() {
    console.log("열심히 공부를 합니다.");
}

goToSchool();
arriveAtSchool_tobe().then(function(){
    study();
});


function fetchItems() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        var items = [1,2,3];
        resolve(items)
        console.log(`items ${items}`)
      }, 0);
    });
}
  
async function logItems() {
    var resultItems = await fetchItems();
    console.log(`resultItems : ${resultItems}`); // [1,2,3]
}

logItems()

const numbers = [1,2,3,4,5,6];

const [,,three,,five] = numbers;

console.log(numbers[0]);

function test2() {
    setTimeout(function(){
        console.log('hi')
    },0);
}

test2();

const studentDetails = {
    firstName : undefined,
    lastName : 'Mary'
}

const {firstName : fName = 'not given', lastName} = studentDetails;

console.log(fName);
console.log(lastName);


var people = [
    {
        name : "Mike Smith",
        family : {
            mother : "Jane Smith",
            father : "Harry Smith",
            sister : "Samatha Smith"
        },
        age : 35
    },
    {
        name : "Tom Jones",
        family : {
            mother : "North Jones",
            father : "Richard Jones",
            brother : "Howard Jones"
        },
        age : 25
    }
];

for(var {name:n , family: {father : f, mother : m, sister : s, brother : b }, age : a} of people) {
    console.log(s);
}

// 불변성
const array = [1,2,3,4];
const sameArray = array;

console.log(sameArray, (array === sameArray));
sameArray.push(5);
console.log(sameArray, (array === sameArray));

const array2 = [1,2,3,4];
const differentArray = [...array2, 5, 6];

console.log(differentArray, (array2 === differentArray));

const arr1 = [1, 2, 3];
const arr2 = [4, 5];
Array.prototype.push.apply(arr1, arr2);

console.log(arr1, arr2)

const obj1 = {
    a : 'A',
    b : 'B'
};

const obj2 = {
    c : 'C',
    d : 'D'
}

const objWrap = {...obj1, ...obj2};
console.log(objWrap);
