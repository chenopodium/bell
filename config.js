class Config {
    constructor(name, doubleEmission, detectionRatio, angles) {
        this.name=name;
        this.angles = angles;
        this.doubleEmission=doubleEmission;
        this.detectionRatio= detectionRatio;        
        this.normalizeUU = false;
        this.simulateBlindTime=false;
        this.normalizeAcc=true;
    }
    show() {
        var s ="Double emission rate: "+ this.doubleEmission+"<br>";
        s +="Detection rate: "+ this.detectionRatio+"<br>";
        s +="simulateBlindTime: "+ this.simulateBlindTime+"<br>";
        s +="normalizeAcc: "+ this.normalizeAcc+"<br>";
        s +="angles: "+this.angles.toString();
        info(s);
        return s;
    }
    
}

var angles= [ 123.93, 150.62, 41.03, 11.28];
var configs= [];
/*
IPI: 22561 27420 7470 2053 J:-301    J/N:-0.003010
eberhard.c DEGREES An: 123.93 150.62 41.03 11.28
*/
var dr = (2*Math.sqrt(2) - 2);
configs.push(new Config("default",0.002, dr, angles));
