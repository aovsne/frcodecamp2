
// Truncate a String
function truncateString(str, num) {
  if(num > 3){
    if(str.length > num){
      str = str.slice(0,num-3);
      str = str.concat('...');
    }
    return str;
  }else{
    str = str.slice(0,num);
    str = str.concat('...');
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


// Chunky Monkey
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var holdArray = [];
  var count = 0;
  
  while(count<arr.length){
    holdArray.push(arr.slice(count,count+size));
    count = count + size;
    
  }
  return holdArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


// Slasher Flick
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr = arr.slice(howMany);
  return arr;
}

slasher([1, 2, 3], 2);
