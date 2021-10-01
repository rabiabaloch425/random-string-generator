module.exports ={
 RandomChar: function(num){
  var string = "abcdefghijklmnopqrestuvwxyz";
  var str = '';
   var i = 0;
  while(i < num){
   str += string.charAt(Math.floor(Math.random() * string.length) );
   i++;
  }
  return str;
 }
}
