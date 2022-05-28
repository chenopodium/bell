class Experiment {
    constructor(N) {
        this.N = N;
    }

    eberhard_test(a, b) {
        for (var i= 0; i < this.N;i++) {
            var angle = randAngle();
            var q = asin(Math.random());
            var photonA = new Photon(angle, q);
            var photonB = new Photon(angle+90, q);
            var debug = i %2000==0;
            
            if (debug) {
                info("=================================================");
                info("Created photons with angles "+photonA.angle+" and "+photonB.angle);
            }
            // determine setting a and b       
            var radA = dA.rad[a];        
            var radB = dB.rad[b];
            if (debug) {
                info("Angle a is "+a+"="+dA.angles[a]+", angleB is "+b+"="+dB.angles[b]);
            }
            // polarize a
            photonA.polarize(radA, debug);
            // measure a
            var detA= dA.detect(photonA, radA, debug);
            var x = mA.measure(photonA, detA, debug);
            // polarize b
            photonB.polarize(radB, debug);
            // measure b
            var detB= dB.detect(photonB, radB, debug);
            var y = mB.measure(photonB, detB, debug);
            if (debug) {
                info("detA="+detA+"; Measurement a is "+x+"; detB="+detB+";  Measurement b is "+y);
            }
            this.trials.add(a, b, x, y);
        }
    }
    async run() {
        this.trials = new Trials(this.N);
        info("About to run the experiment "+this.N+" times");       
       
        this.eberhard_test(0,0);
        this.eberhard_test(0,1);
        this.eberhard_test(1,0);
        this.eberhard_test(1,1);
                    
        info(this.trials.show());
        var rich = this.trials.richard();
        var per = (Math.round(rich*100/this.trials.success * 100) / 100).toFixed(2);
        info("Total success based on Richards Email: "+rich+"="+per+"%");
        info("J="+this.trials.J()+", JtoN="+this.trials.JToN);
         
    }
}