/**
 * [Self calling function]
 * @param  {[Array]} arr [Master array that needs to be flattened]
 * @return {[none]}     
 */
(function(arr){
	var flattenedArray=[];
	function flattenArray(inputArray){
		for(var i= 0,len = inputArray.length; i < len ; i++){
			if(inputArray[i].constructor === Array){
				/*Using recursion to iterate over nested Arrays*/
				flattenArray(inputArray[i])
			}
			else {
				flattenedArray.push(inputArray[i])
			}
		}
	}
	flattenArray(arr);
	console.log(flattenedArray);
}([1,[1,'asdf',['himanshu','saraswat',32,[1,4,7,8]]],3]))