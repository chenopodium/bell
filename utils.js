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
function showPopup( obj, e) {
   
  var popup = document.getElementById("defaultPopup");
  popup.classList.toggle("show");
  popup.style.left = (e.clientX ) + 'px';
  //popup.style.left = 100 + 'px';
  popup.style.top  = (e.clientY-200) + 'px';
  //popup.style.top  = 100 + 'px';
  p("Showing popup "+obj.name+ " at "+popup.style.left+"/"+popup.style.top+ " display: "+popup.display);
  popup.innerHTML =obj.desc;
  info(obj.desc);
}
function hidePopup(  ) {
   
    var popup = document.getElementById("defaultPopup");
    popup.classList.toggle("show");
    
    popup.innerHTML ="";
   
  }
function log(s){
    $("#log").text(s);
    p(s);
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