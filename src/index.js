
exports.min = function min (array) {
  if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
    let newArr = (a , b) =>{
        if(a>b) return 1;
        if(a<b) return -1;
        if (a==b) return 0;
      }; 
    let newArrSort = array.sort(newArr);
            return newArrSort[0];
    } else {
  return 0;
    }
};

exports.max = function max (array) {
  if (array != null && array.length != null && array.length > 0) {
    let newArr = (a , b) =>{
        if(a>b) return 1;
        if(a<b) return - 1;
        if (a==b) return 0;
        }; 
    let newArrSort = array.sort(newArr);
        for (let i = 0; i<newArrSort.length; i++){
            if(newArrSort[i] == ""){
                return 'empty';
            }else{
                return newArrSort[newArrSort.length-1];
            } 
        }
    } else {
  return 0;
}
};

exports.avg = function avg (array) {
  if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
    let sumArr = 0;
    for(let i = 0; i<array.length; i++){
    sumArr +=array[i];
    }
    return sumArr/array.length;
} else {
  return 0;
}
};
