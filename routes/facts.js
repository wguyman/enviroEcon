var Firebase = require('../firebase-node');
var listRef = new Firebase('https://enviro.firebaseio.com/wines');
var pushRef = listRef.push();

var enviroRef = new Firebase('https://enviro.firebaseio.com/econ/usa/');

/*** CLIMATE ***/
var typeEnviroRef = enviroRef.child("Climate");
typeEnviroRef.child("Total Economic Cost (million USD PPP) in 2010").set(46605);
typeEnviroRef.child("Total Economic Cost (million USD PPP) in 2030").set(115685);
typeEnviroRef.child("Total Additional Mortality in 2010").set(-1493);
typeEnviroRef.child("Total Additional Mortality in 2030").set(-3243);
typeEnviroRef.child("Total Additional Affected Population (1000s) in 2010").set(175);
typeEnviroRef.child("Total Additional Affected Population (1000s) in 2010").set(407);

// **2010**

//Environmental Disasters
var disastorsRef = typeEnviroRef.child('ENVIRONMENTAL DISASTERS');
var yearRef = disastorsRef.child(2010);
yearRef.child("Total Economic Cost (million USD PPP)").set(3595);
yearRef.child("Total Additional Mortality").set(6);
yearRef.child("Total Additional Affected Population (1000s)").set(19);

var dis = yearRef.child("DROUGHT");
dis.child("Vulnerability Level").set("High");
dis.child("Cost (million USD PPP)").set(500);
dis.child("Additional Mortality").set(0);
dis.child("Additional Affected Population (1000s)").set(0);

dis = yearRef.child("FLOODS AND LANDSLIDES");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(600);
dis.child("Additional Mortality").set(5);
dis.child("Additional Affected Population (1000s)").set(15);

dis = yearRef.child("STORMS");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(2500);
dis.child("Additional Mortality").set(1);
dis.child("Additional Affected Population (1000s)").set(4);

dis = yearRef.child("WILDFIRES");
dis.child("Vulnerability Level").set("Low");
dis.child("Cost (million USD PPP)").set(-5);
dis.child("Additional Mortality").set(0);
dis.child("Additional Affected Population (1000s)").set(0);

//Habitat
disastorsRef = typeEnviroRef.child('HABITAT CHANGE');
yearRef = disastorsRef.child(2010);
yearRef.child("Total Economic Cost (million USD PPP)").set(43200);
yearRef.child("Total Additional Affected Population (1000s)").set(155);

dis = yearRef.child("BIODIVERSITY");
dis.child("Vulnerability Level").set("High");
dis.child("Cost (million USD PPP)").set(25000);
dis.child("CONTRACTION OF BIOLOGICAL ZONES (KM²) (CUMULATIVE)").set(-25000);
dis.child("DECLINE IN BIOLOGICAL RICHNESS").set(70);

dis = yearRef.child("DESERTIFICATION");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(200);
dis.child("Additional Affected Population (1000s)").set(55);
dis.child("ADDITIONAL LAND DEGRADED (KM²) (CUMULATIVE)").set(1750);

dis = yearRef.child("HEATING AND COOLING");
dis.child("Vulnerability Level").set("Low");
dis.child("Cost (million USD PPP)").set(-650);
dis.child("CHANGE IN ENERGY LOAD (GWH)").set(-5750);

dis = yearRef.child("LABOUR PRODUCTIVITY");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(15000);
dis.child("SHARE OF WORKFORCE PARTICULARLY AFFECTED (%)").set(6);

dis = yearRef.child("PERMAFROST");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(650);
dis.child("Additional Affected Population (1000s)").set(90);

dis = yearRef.child("SEA-LEVEL RISE");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(4250);
dis.child("Additional Affected Population (1000s)").set(10);
dis.child("NET LOSS OF LAND (KM²) (CUMULATIVE)").set(10000);

dis = yearRef.child("WATER");
dis.child("Vulnerability Level").set("Low");
dis.child("Cost (million USD PPP)").set(-1250);
dis.child("LOSS IN WATER RUNOFF (KM³)").set(-1);

//Health Impact
disastorsRef = typeEnviroRef.child('HEALTH IMPACT');
yearRef = disastorsRef.child(2010);
yearRef.child("Total Additional Mortality").set(-1499);

dis = yearRef.child("HEAT AND COLD ILLNESSES");
dis.child("Vulnerability Level").set("Low");
dis.child("Additional Mortality").set(-1500);

dis = yearRef.child("MALARIA AND VECTOR-BORNE");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Additional Mortality").set(1);

//Industrial Stress
disastorsRef = typeEnviroRef.child('NDUSTRY STRESS');
yearRef = disastorsRef.child(2010);
yearRef.child("Total Economic Cost (million USD PPP)").set(-190);

dis = yearRef.child("AGRICULTURE");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Additional Mortality").set(1000);

dis = yearRef.child("FISHERIES");
dis.child("Vulnerability Level").set("Low");
dis.child("Additional Mortality").set(-300);

dis = yearRef.child("FORESTRY");
dis.child("Vulnerability Level").set("Low");
dis.child("Additional Mortality").set(-90);

dis = yearRef.child("HYDRO ENERGY");
dis.child("Vulnerability Level").set("Low");
dis.child("Additional Mortality").set(-300);

dis = yearRef.child("TOURISM");
dis.child("Vulnerability Level").set("Low");
dis.child("Additional Mortality").set(-1500);

dis = yearRef.child("TRANSPORT");
dis.child("Vulnerability Level").set("Low");
dis.child("Additional Mortality").set(1000);

//** 2030=

//Environmental Disasters
disastorsRef = typeEnviroRef.child('ENVIRONMENTAL DISASTERS');
yearRef = disastorsRef.child(2030);
yearRef.child("Total Economic Cost (million USD PPP)").set(11735);
yearRef.child("Total Additional Mortality").set(6);
yearRef.child("Total Additional Affected Population (1000s)").set(41);

dis = yearRef.child("DROUGHT");
dis.child("Vulnerability Level").set("High");
dis.child("Cost (million USD PPP)").set(1250);
dis.child("Additional Mortality").set(0);
dis.child("Additional Affected Population (1000s)").set(0);

dis = yearRef.child("FLOODS AND LANDSLIDES");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(2250);
dis.child("Additional Mortality").set(5);
dis.child("Additional Affected Population (1000s)").set(35);

dis = yearRef.child("STORMS");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(8250);
dis.child("Additional Mortality").set(1);
dis.child("Additional Affected Population (1000s)").set(6);

dis = yearRef.child("WILDFIRES");
dis.child("Vulnerability Level").set("Low");
dis.child("Cost (million USD PPP)").set(-15);
dis.child("Additional Mortality").set(0);
dis.child("Additional Affected Population (1000s)").set(0);

//Habitat
disastorsRef = typeEnviroRef.child('HABITAT CHANGE');
yearRef = disastorsRef.child(2030);
yearRef.child("Total Economic Cost (million USD PPP)").set(100950);
yearRef.child("Total Additional Affected Population (1000s)").set(365);

dis = yearRef.child("BIODIVERSITY");
dis.child("Vulnerability Level").set("High");
dis.child("Cost (million USD PPP)").set(45000);
dis.child("CONTRACTION OF BIOLOGICAL ZONES (KM²) (CUMULATIVE)").set(-50000);
dis.child("DECLINE IN BIOLOGICAL RICHNESS").set(200);

dis = yearRef.child("DESERTIFICATION");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(700);
dis.child("Additional Affected Population (1000s)").set(150);
dis.child("ADDITIONAL LAND DEGRADED (KM²) (CUMULATIVE)").set(3500);

dis = yearRef.child("HEATING AND COOLING");
dis.child("Vulnerability Level").set("Low");
dis.child("Cost (million USD PPP)").set(-1000);
dis.child("CHANGE IN ENERGY LOAD (GWH)").set(-5750);

dis = yearRef.child("LABOUR PRODUCTIVITY");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(50000);
dis.child("SHARE OF WORKFORCE PARTICULARLY AFFECTED (%)").set(6);

dis = yearRef.child("PERMAFROST");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(1250);
dis.child("Additional Affected Population (1000s)").set(200);

dis = yearRef.child("SEA-LEVEL RISE");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(9000);
dis.child("Additional Affected Population (1000s)").set(15);
dis.child("NET LOSS OF LAND (KM²) (CUMULATIVE)").set(25000);

dis = yearRef.child("WATER");
dis.child("Vulnerability Level").set("Low");
dis.child("Cost (million USD PPP)").set(-4000);
dis.child("LOSS IN WATER RUNOFF (KM³)").set(-1);

//Health Impact
disastorsRef = typeEnviroRef.child('HEALTH IMPACT');
yearRef = disastorsRef.child(2030);
yearRef.child("Total Additional Mortality").set(-3249);

dis = yearRef.child("HEAT AND COLD ILLNESSES");
dis.child("Vulnerability Level").set("Low");
dis.child("Additional Mortality").set(-3250);

dis = yearRef.child("MALARIA AND VECTOR-BORNE");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Additional Mortality").set(1);

//Industrial Stress
disastorsRef = typeEnviroRef.child('NDUSTRY STRESS');
yearRef = disastorsRef.child(2030);
yearRef.child("Total Economic Cost (million USD PPP)").set(3000);

dis = yearRef.child("AGRICULTURE");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Additional Mortality").set(2500);

dis = yearRef.child("FISHERIES");
dis.child("Vulnerability Level").set("Low");
dis.child("Additional Mortality").set(-1000);

dis = yearRef.child("FORESTRY");
dis.child("Vulnerability Level").set("Low");
dis.child("Additional Mortality").set(-300);

dis = yearRef.child("HYDRO ENERGY");
dis.child("Vulnerability Level").set("Low");
dis.child("Additional Mortality").set(-700);

dis = yearRef.child("TOURISM");
dis.child("Vulnerability Level").set("Low");
dis.child("Additional Mortality").set(-3250);

dis = yearRef.child("TRANSPORT");
dis.child("Vulnerability Level").set("Low");
dis.child("Additional Mortality").set(5750);


/*** Carbon ***/
typeEnviroRef = enviroRef.child("Carbon");
typeEnviroRef.child("Total Economic Cost (million USD PPP) in 2010").set(102260);
typeEnviroRef.child("Total Economic Cost (million USD PPP) in 2030").set(282550);
typeEnviroRef.child("Total Additional Mortality in 2010").set(76750);
typeEnviroRef.child("Total Additional Mortality in 2030").set(112000);
typeEnviroRef.child("Total Additional Affected Population (1000s) in 2010").set(1365);
typeEnviroRef.child("Total Additional Affected Population (1000s) in 2010").set(2240);

//**2010

//Environmental Disasters
disastorsRef = typeEnviroRef.child('ENVIRONMENTAL DISASTERS');
yearRef = disastorsRef.child(2010);
yearRef.child("Total Economic Cost (million USD PPP)").set(3560);

dis = yearRef.child("OIL SANDS");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(60);
dis.child("TONNES TOXIC WASTE (1000S)").set(1250);


dis = yearRef.child("OIL SPILLS");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(3500);
dis.child("GALLONS OF OIL SPILL (1000S)").set(15000);

//HABITAT CHANGE
disastorsRef = typeEnviroRef.child('HABITAT CHANGE');
yearRef = disastorsRef.child(2010);
yearRef.child("Total Economic Cost (million USD PPP)").set(81700);

dis = yearRef.child("BIODIVERSITY");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(80000);
dis.child("DECLINE IN BIOLOGICAL RICHNESS").set(250);

dis = yearRef.child("CORROSION");
dis.child("Vulnerability Level").set("High");
dis.child("Cost (million USD PPP)").set(200);

dis = yearRef.child("WATER");
dis.child("Vulnerability Level").set("High");
dis.child("Cost (million USD PPP)").set(1500);
dis.child("VOLUME OF WATER TO TREAT (MILLIONS M³)").set(30000);

//HEALTH IMPACT
disastorsRef = typeEnviroRef.child('HEALTH IMPACT');
yearRef = disastorsRef.child(2010);
yearRef.child("Total Additional Mortality").set(76750);
yearRef.child("Total Additional Affected Population (1000s)").set(1365);

dis = yearRef.child("AIR POLLUTION");
dis.child("Vulnerability Level").set("Severe");
dis.child("Additional Mortality").set(55000);
dis.child("Additional Affected Population (1000s)").set(850);

dis = yearRef.child("INDOOR SMOKE");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Additional Mortality").set(15000);
dis.child("Additional Affected Population (1000s)").set(200);

dis = yearRef.child("OCCUPATIONAL HAZARDS");
dis.child("Vulnerability Level").set("Acute");
dis.child("Additional Mortality").set(3250);
dis.child("Additional Affected Population (1000s)").set(300);

dis = yearRef.child("SKIN CANCER");
dis.child("Vulnerability Level").set("Acute");
dis.child("Additional Mortality").set(3500);
dis.child("Additional Affected Population (1000s)").set(15);

//Industry Stress
disastorsRef = typeEnviroRef.child('INDUSTRY STRESS');
yearRef = disastorsRef.child(2010);
yearRef.child("Total Economic Cost (million USD PPP)").set(17000);

dis = yearRef.child("AGRICULTURE");
dis.child("Vulnerability Level").set("Acute");
dis.child("Cost (million USD PPP)").set(6750);

dis = yearRef.child("FISHERIES");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(250);

dis = yearRef.child("FORESTRY");
dis.child("Vulnerability Level").set("Severe");
dis.child("Cost (million USD PPP)").set(10000);

//**2030

//Environmental Disasters
disastorsRef = typeEnviroRef.child('ENVIRONMENTAL DISASTERS');
yearRef = disastorsRef.child(2030);
yearRef.child("Total Economic Cost (million USD PPP)").set(6400);

dis = yearRef.child("OIL SANDS");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(150);
dis.child("TONNES TOXIC WASTE (1000S)").set(2250);


dis = yearRef.child("OIL SPILLS");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(6250);
dis.child("GALLONS OF OIL SPILL (1000S)").set(15000);

//HABITAT CHANGE
disastorsRef = typeEnviroRef.child('HABITAT CHANGE');
yearRef = disastorsRef.child(2030);
yearRef.child("Total Economic Cost (million USD PPP)").set(252450);

dis = yearRef.child("BIODIVERSITY");
dis.child("Vulnerability Level").set("High");
dis.child("Cost (million USD PPP)").set(250000);
dis.child("DECLINE IN BIOLOGICAL RICHNESS").set(1250);

dis = yearRef.child("CORROSION");
dis.child("Vulnerability Level").set("High");
dis.child("Cost (million USD PPP)").set(200);

dis = yearRef.child("WATER");
dis.child("Vulnerability Level").set("High");
dis.child("Cost (million USD PPP)").set(2250);
dis.child("VOLUME OF WATER TO TREAT (MILLIONS M³)").set(25000);

//HEALTH IMPACT
disastorsRef = typeEnviroRef.child('HEALTH IMPACT');
yearRef = disastorsRef.child(2030);
yearRef.child("Total Additional Mortality").set(112000);
yearRef.child("Total Additional Affected Population (1000s)").set(2240);

dis = yearRef.child("AIR POLLUTION");
dis.child("Vulnerability Level").set("Severe");
dis.child("Additional Mortality").set(75000);
dis.child("Additional Affected Population (1000s)").set(1500);

dis = yearRef.child("INDOOR SMOKE");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Additional Mortality").set(25000);
dis.child("Additional Affected Population (1000s)").set(300);

dis = yearRef.child("OCCUPATIONAL HAZARDS");
dis.child("Vulnerability Level").set("Acute");
dis.child("Additional Mortality").set(4000);
dis.child("Additional Affected Population (1000s)").set(400);

dis = yearRef.child("SKIN CANCER");
dis.child("Vulnerability Level").set("Acute");
dis.child("Additional Mortality").set(8000);
dis.child("Additional Affected Population (1000s)").set(40);

//Industry Stress
disastorsRef = typeEnviroRef.child('INDUSTRY STRESS');
yearRef = disastorsRef.child(2030);
yearRef.child("Total Economic Cost (million USD PPP)").set(23700);

dis = yearRef.child("AGRICULTURE");
dis.child("Vulnerability Level").set("Severe");
dis.child("Cost (million USD PPP)").set(8000);

dis = yearRef.child("FISHERIES");
dis.child("Vulnerability Level").set("Moderate");
dis.child("Cost (million USD PPP)").set(700);

dis = yearRef.child("FORESTRY");
dis.child("Vulnerability Level").set("Severe");
dis.child("Cost (million USD PPP)").set(23700);


exports.findAll = function(req, res) {
	console.log(req.body);
	enviroRef.on('value', function(snapshot) {
		var sendData = snapshot.val();
		// Given a DataSnapshot containing a child 'fred' and a child 'wilma':
		// snapshot.forEach(function(childSnapshot) {
		//   // This code will be called twice.
		//   var name = childSnapshot.name();
		//   var childData = childSnapshot.val();
		//   // name will be 'fred' the first time and 'wilma' the second time.
		//   // childData will be the actual contents of the child.
		//   console.log("name: " + name);
		//   console.log(" data: " + childData.country);
		//   sendData[name]= childData;
		// });
	  	res.send(sendData);
	});    
};

exports.findById = function(req, res) {
	var item = new Firebase('https://enviro.firebaseio.com/wines/'+req.params.id);
	item.on('value', function(snapshot){
		res.send(snapshot.val());
	});
    //res.send({id:req.params.id, name: "The Name", description: "description"});
};

 
exports.addWine = function(req, res) {
	var wine = req.body;
	console.log('Adding wine: ' + JSON.stringify(wine));
    pushRef.set(wine, function(error) {
      if (error) {
        console.log('Data could not be saved.' + error);
      } else {
        console.log('Data saved successfully.' + pushRef.name() + " wine: " + wine);
        res.send(wine);
      }
    });
}
 
exports.updateWine = function(req, res) {
	var id = req.params.id;
	var wine = req.body;
	console.log('Updating wine: ' + id);
}
 
exports.deleteWine = function(req, res) {
	var id = req.params.id;
	console.log('Deleting wine: ' + id);
}