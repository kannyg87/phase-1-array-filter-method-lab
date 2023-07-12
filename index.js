// Code your solution here
function findMatching(arr, str){
    let strlowercase = str.toLowerCase();

        const newArr = arr.filter(elemnt => 
        elemnt.toLowerCase() === strlowercase)
        return newArr

}

function fuzzyMatch(arr, str) {
    return arr.filter(element =>
      element.toLowerCase().startsWith(str.toLowerCase())
    );
  }
  

  function matchName(arr, str){
    return arr.filter(element =>element.name=== str)

  }