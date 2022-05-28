class Eberhard {
    constructor() {
        this.a1 = dA.angles[0];
        this.a2 = dA.angles[1];
        this.b1 = dB.angles[s0];
        this.b2 = dB.angles[1];
        this.a1b1= Math.abs(a1-b1);
        this.a1b2= Math.abs(a1-b2);
        this.a2b1= Math.abs(a2-b1);
        this.a2b2= Math.abs(a2-b2);
        info("a1b1="+a1b1+", a1b2="+a1b2+", a2b1="+a2b1+", a2b2="+a2b2);
    }
    corr(a, b) {
        var key =a+""+b;
        return trials.count(key+"00")+trials.count(key+"11");        
    }
    totalA(a) {
        return trials
    }
}