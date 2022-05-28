var asinCache= {};
function asin(angle) {
    if (angle in asinCache) return asinCache[angle];
    var as = Math.asin(angle);;
    asinCache[angle]=as;
    return as;
}
function is(e, obj) {
    if (obj.h === undefined) obj.h = obj.w;
    var a = e.pageX;
    var b = e.pageY;
   //p("Checking obj"+obj.name+" with x/y "+obj.x+"/"+obj.y+" and mouse "+a+"/"+b);
    if (a > obj.x-obj.w/2 && a < obj.x+obj.w/2  
    && b > obj.y-obj.h/2 && b < obj.y+obj.h/2) {        
        return true;
    }
    return false;
}
function showDetails( obj, e) {
   
  var details = document.getElementById("defaultDetails");
  
  details.innerHTML =obj.desc;  
}
function hideDetails(  ) {
   
    var details = document.getElementById("defaultDetails");
    details.innerHTML ="";   
  }
function log(s){
    $("#log").text(s);
    p(s);
}
function clearInfo(){
   
    $("#info").html("");
    
}
function rad(degrees) {
  return degrees * (Math.PI/180);
}
function randInt(max) {
    return Math.floor(Math.random() * (max+1));
}
function randAngle() {
    return Math.random() * 360;
}
function info(s){
    var t =$("#info").html() ;
    $("#info").html(t+"<br>"+s);
    p(s);
}
function p(s) {
    console.log(s);
}