const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

//for concatenating two arrays creating a dummy array
const data1 = [
  { name: "johnh", age: 34, profession: "developer" },
{ name: "janeh", age: 37, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developer = data.filter(user => user.profession == "developer");
  const developernames = developer.map(user => user.name);
  console.log("THE DEVELOPER NAMES FOUND FROM THE ARRAY **** ");
  console.log(developernames);
}

// 2. Add Data
function addData() {
  console.log("hi");
  var uname = prompt("Enter  name:");
 var newObject = {name: uname};
 newObject.age = prompt("Enter age:");
 newObject.profession = prompt("Enter profession:");
  data.push(newObject);
  console.log("****HERE IS THE NEWLY ADDED VERSION OF 'data'*****")
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
 // let dataremoved=[];

 // for (var i = data.length - 1; i >= 0; --i) {
   // if (data[i].field == "admin") {
      //    dataremoved=data.splice(i,1);
    //}
  //  let data2=[];
  //  for(var j=0;j=data.length-1;j++)
  //  {data2=data.splice(data.findIndex(item => item.field === "admin"), 1);}
    
  // console.log("The last array item having profession admin is:",data2);
  const newArr = data.filter(object => {
    return object.profession !== "admin";
  });
  console.log("Array after removing people with 'admin' profession is: ");
  console.log(newArr)
  while (data.length > 0) {
    data.pop();
  }
  for (let i = 0; i < newArr.length; i++) {
    data.push(newArr[i]);
}
  console.log("The updated 'data' array is:");
  console.log(data);

}
//alert()

//console.log(dataremoved);

//}

// 4. Concatenate Array
function concatenateArray() {

  const concat = data.concat(data1);
  console.log(concat);
  alert("The concatenated array is:"+concat);
}

// 5. Average Age
function averageAge() {
  const n=data.length;
  const totalage = data.map(user => user.age );
  console.log(totalage);

  var sum = 0;
for( var i = 0; i < totalage.length; i++ ){
    sum += parseInt( totalage[i], 10 ); //don't forget to add the base
}

var avg = sum/totalage.length;

alert( "The sum of all the people's age is: " + sum + " The average age is: " + avg );
console.log(avg);
  //const sum = totalage.reduce((a, b) => a + b, 0);
  //const avg = (sum / totalage.length) || 0;

//console.log(`The sum is: ${sum}. The average is: ${avg}.`);
  //const totalAge = totalage.reduce((a, b) => a + b.age);
  //const avg=totalAge/n;
  //const avg=
  //console.log(avg);
  //const totalage = data.filter(user => user.age );
 
 // let arr=data.map(user => user.name );
 // console.log(arr);
 // function getAverageAge(users) {
 //   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  ///}
 // alert( getAverageAge(arr) );
 // console.log( getAverageAge(arr));

//
}

// 6. Age Check
function checkAgeAbove25() {
  const adult = data.filter(user => user.age >= 25);
  console.log(adult);

}

// 7. Unique Professions
function uniqueProfessions() {
  const profession = data.map(user => user.profession );
  console.log("Following is the array after extracting professions of all the people")
  console.log(profession);
  function removeDuplicate(arr){
    return[...new Set(arr)];
  }
  //let finalprofession = [];

 // let f = false;
 // let ct = 0;
 
//for (let j = 0; j < profession.length; j++) {
   // for (let k = 0; k < finalprofession.length; k++) {
//         if (profession[j] == finalprofession[k]) {
//             f = true;
//         }
//     }
//     ct++;
//     if (ct == 1 && f == false) {
//         finalprofession.push(profession[j]);
//     }
//     start = false;
//     ct = 0;
// }
 console.log("The distinct professions identified are :")
console.log(removeDuplicate(profession));

}

// 8. Sort by Age
function sortByAge() {
  sortedData = data.sort(function(a,b){
    return a.age - b.age;
  })

  //return sortedData;
  console.log(sortedData);

}

// 9. Update Profession
function updateJohnsProfession() {
  const modifieddata = data.map(obj => {
    if (obj.name == "john") {
        return { ...obj, profession: "manager" };
    }
    return obj;
});
 console.log("The array snapshot after updating John's profession:!!!!!!!!!");
console.log(modifieddata);
while (data.length > 0) {
  data.pop();
}
for (let i = 0; i < modifieddata.length; i++) {
  data.push(modifieddata[i]);
  
}
console.log("The updated 'data' after the value manipulation array is:>>>>>>>");
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  const developer = data.filter(user => user.profession == "developer");
  const developernames = developer.map(user => user.name);
  console.log("The names of developers in the array is:",developernames);
  const admin = data.filter(user => user.profession == "admin");
  const adminnames = admin.map(user => user.name);
  console.log("The names of admin roles in the array is:",adminnames);
  const n=developernames.length;
  const n1=adminnames.length;
  console.log(n);
  console.log(n1);
  alert("Total developer count is:"+n);
  alert("Total admin count is:"+n1);
}
