
//Push zero to end

 function pushZerosToEnd(arr,n){
    let count=0;
    for (let i=0;i<n;i++){
        if(arr[i] !=0)
        arr[count++]=arr[i];
    }
    while(count<n)
    arr[count++]=0;
 }       

 //First non repeating character
 
 function firstNotRepeatingCharacter(s) {
    for (let j = 0; j < s.length; j++) {
        if(s.indexOf(s.charAt(j)) == s.lastIndexOf(s.charAt(j))) {
            return s.indexOf(s.charAt(j));
        }
    }
    return -1;   
}


