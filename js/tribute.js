function bouncer(arr)
{
   var res= arr.filter(function(elem){
        return Boolean(elem);
   });

 return arr;
}

bouncer([7, "ate", "", false, 9]);
