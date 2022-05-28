class Photon {
    constructor(angle, q) {
        this.angle = angle;
        this.rad= rad(angle);
        this.q = q; // from Pierre's model
        this.det_lev=1;
        this.pol_out=0;
    }
    polarize(a_pol, debug) {
        var ad = this.rad - a_pol;                       // angle diff photon polarisation/polarizer angle (-PI..PI range)
        var s = ad + this.q;                           // angle sum define out (-PI..PI+PI/2 range)
        
        var o=0;
        var rp=0;
        if(debug === true) info( "polarize: s="+s+", rp="+rp+", ad="+ad+", q="+this.q);
        if (s >=  Math.PI)    { 
            o = OUT_O; 
            rp = ad -    Math.PI; 
        }
        else if (s >=  Math.PI/2)  { 
            o = OUT_E; 
            rp = ad -  Math.PI/2; 
        }
        else if (s >=  0)      { 
            o = OUT_O; 
            rp = ad;         
        }
        else if (s >= -Math.PI/2)  { 
            o = OUT_E; 
            rp = ad +  Math.PI/2; 
        }
        else /* (s >= -IPI) */ { 
            o = OUT_O; 
            rp = ad +    Math.PI; 
        }  
        // note: last test skipped as always true
      
        // define results
        this.pol_out = o;
        this.det_lev = Math.abs(rp);   

        if(debug === true) {
            info ("polarize "+a_pol+": pol_out="+this.pol_out+", det_level="+this.det_lev+", rp="+rp);
        }
    }
}