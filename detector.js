
class Detector {
    constructor(name, x, y, w, h, angles, desc) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.w = w ;
        this.h = h;
        this.setAngles(angles);
        this.desc= desc;
        this.det_trigger=0.5;
    }
    setDetectionTrigger(lp) {
        if (lp < 1.0) {
            var tg = 0.0;                             // tg to find
            var dx;
            lp *= Math.PI;

            for (dx=Math.PI/10; dx>0.0000001; dx/=10.0) {
                while (true) {
                    var x = tg + dx;
                    var dr = Math.sin(x) + x;
                    if (dr > lp)  break;
                    tg = x;
                }
            }
            this.det_trigger= tg/2; 
        }
        this.det_trigger= 0.5*Math.PI;  
    }
    getAngle(i) {
        return angles[i];
    }
    setAngles(angles) {
        this.angles=angles;
        this.rad=[rad(angles[0]), rad(angles[1])];
    }
    
    init() {
        this.N=0;
        this.detected=0;
        this.missed=0;
    }
    detect(photon, anglerad, debug) {
        var det = 0;
        if (photon.det_lev < this.det_trigger) {
            if(debug === true) info ("detect: photon.det_lev="+photon.det_lev+"< det_trigger "+this.det_trigger);
            if(photon.pol_out== 1) {
                det= 1;
                this.detected++;
                if(debug === true) info ("detect:photon.pol_out="+photon.pol_out+", detected");
            }
            else {
                if(debug === true) info ("detect:photon.pol_out="+photon.pol_out+", NOT detected");
            }
        }
        else {
            if(debug === true) info ("detect:photon.det_lev="+photon.det_lev+">= det_trigger "+this.det_trigger+", NOT detected");
        }
        return this.det;
    }
    percentDetected() {
        return this.detected*100/this.N;
    }
}
