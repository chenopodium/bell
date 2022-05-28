
var dA = new Detector( "Detector A", 80,  222, 80,  100,  [45, 10.7],
     "Change angles A...");

var dB =  new Detector( "Detector B", 870, 222, 80,  100,  
    [200.4, 237.7], "Change angles B...");

var source = {name: "Source", x:450, y: 230, w:100, h: 50,  
    N: 10000,
    desc: "Change number of trials and how photons are produced..."};

var mA = new Measurement("Measurement A", 80,  500, 50,  50,  
     "Change detection efficiency...");

var mB = new Measurement("Measurement B", 800,  500,50,  50,  
     "Change detection efficiency...");

var corr = {name: "Correlations", x:460, y: 470, w:150, h: 100,  
    desc: "Change correlation function, such as window size (if any)..."};

var run = {name: "Run", x:450, y: 335, w:25, h: 25,  
    desc: "Run the experiment with the current settings",
    run: function() {
        exp = new Experiment(source.N);
        info("Running the experiment");
        exp.run().then(info("Experiment is done"));
    }};


var objects= [dA, dB, mA, mB, source, corr,run];


function applyConfig( config) {
    info("Applying config to detectors");
    config.show();
    var angles = config.angles;
    dA.setAngles([angles[0], angles[1]]);
    dB.setAngles([angles[2], angles[3]]);

    dA.setDetectionTrigger(config.detectionRatio);
    dB.setDetectionTrigger(config.detectionRatio);
}