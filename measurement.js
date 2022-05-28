class Measurement {
    constructor(name, x, y, w, h,desc) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.w =w ;
        this.h = h;      
        this.desc= desc;
    }
    measure(photon, detected) {
        
        if (detected>0) return 1;
        else return 0;
    }
}