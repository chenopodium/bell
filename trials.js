class Trials {

    constructor () {
        this.clear();
    }
    clear() {
        this.trials={};
        this.N =0;
        this.success=0;
        this.totals={};
               
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (i<2 && j<2) {
                    this.totals[i+"_"]=0;
                    this.totals[i+""+j]=0;
                    this.totals["_"+j]=0;
                }
                for (var k = 0; k < 2; k++) {
                    for (var l = 0; l < 2; l++) {                       
                        this.trials[""+i+""+j+""+k+""+l]=0;
                    }
                }
            }
        }
    }
    add(a, b, x, y) {
        var key = ""+a+""+b+""+x+""+y;
        this.trials[key]++;
        if (this.N % 1000==0) info("Adding count to "+key+"="+ this.trials[key]+", N is "+this.N);
        if (a!= 2 && b != 2) {
            this.success++;
        }
        key=""+a+""+b;
        if (a<2 && b<2) this.totals[key]++;
        // also count JUST a and JUST b
        if (a<2) this.totals[a+"_"]++;
        if (b<2) this.totals["_"+b]++;
        this.N++;        
    }
    getTotal(a, b) {
        return this.totals[a+""+b];
    }
    getTotalA(a) {
        return this.totals[a+"_"];
    }
    getTotalB(b) {
        return this.totals["_"+b];
    }
    get(a, b, x, y) {
        var key = ""+a+""+b+""+x+""+y;
        return this.trials[key];
    }
    count(key) {
        return this.trials[key];
    }
    same() {
        var s = this.trials["0011"]+this.trials["0000"];
        s +=this.count("1000")+this.count("1011");
        s +=this.count("0100")+this.count("0111");
        info("Same: "+s+" ="+s*100/this.success+"%");
        return s;
    }
    diff() {
        var d= this.count("1110")+this.count("1101");
        info("Diff: "+d+" ="+Math.round(d*100/this.success)+"%");
        return d;
    }
    richard() {
        return this.same()+this.diff();
    }
    J(){
       // J = (a1_b2_oe + a1_b2_ou + a2_b1_eo + a2_b1_uo + a2_b2_oo) - a1_b1_oo;
        this.J= this.count("0110")+this.count("0112")+this.count("1001")+this.count("1020")+
        this.count("1111")-this.count("0011");
        this.JtoN=this.J/this.N;
        return this.J;
    }
    /*
    We can now count the number z of trials in which x = y and a and b are not BOTH= 1, 
    together with trials in which x ≠ y and both a, b = 1. 
    Those two kinds of trials are both called trials resulting in “success”,
     the others have the result “fail”.
     */
    show() {
        var s=this.N+" Trials with "+this.success+" success trials:<br>";
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                for (var k = 0; k < 2; k++) {
                    for (var l = 0; l < 2; l++) {
                        var key = ""+i+""+j+""+k+""+l;
                        var skey = "a"+i+"b"+j+" "+k+""+l;
                        s+="["+skey+"] = "+ this.trials[key]+"="+
                            this.trials[key]*100/this.N+"%<br>";
                    }
                }
                if (i<2 && j <2) s+="Totals a"+i+"b"+j+"="+this.getTotal(i, j)+"<br>";
            }
        }
        return s;
    }
}