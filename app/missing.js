module.exports = function findMissing (arr1, arr2) {
	if (arr1.length === 0 && arr2.length === 0){
		return 0;
	}
  var num;
  for (var i in arr2){
  	if(arr1.length === arr2.length) {
		return 0;
	}
    else if (arr1.indexOf(arr2[i]) == -1){
      var num = arr2[i];
    }
  }
  return num;
}
