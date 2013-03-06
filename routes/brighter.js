

/** BRIGHTER PLANET API KEY **/
process.env.CM1_KEY = 'e708a57d0d60cd12483d7811e8e34edf';

//Sample Brighter planet data query
var CM1 = require('CM1');

exports.findAll = function(req, res) {
	console.log(req.param('id'));
	console.log(req.param('test'));
	var model = CM1.model('flight', {
	origin_airport: 'JFK',
	destination_airport: 'Berlin',
	airline: 'Luftansa'
	});

	model.getImpacts(function(err, impacts) {
	if(err) return console.log('Argh, falied!', err);
	res.send('Carbon for my international flight: ' +
	          impacts.carbon);

	console.log('Carbon for my international flight: ',
	          impacts.carbon);
	console.log('Methodology: ', impacts.methodology);
	});
};

// exports.findById = function(req, res) {
// 	var item = new Firebase('https://enviro.firebaseio.com/wines/'+req.params.id);
// 	item.on('value', function(snapshot){
// 		res.send(snapshot.val());
// 	});
//     //res.send({id:req.params.id, name: "The Name", description: "description"});
// };

 
// exports.addWine = function(req, res) {
// 	var wine = req.body;
// 	console.log('Adding wine: ' + JSON.stringify(wine));
//     pushRef.set(wine, function(error) {
//       if (error) {
//         console.log('Data could not be saved.' + error);
//       } else {
//         console.log('Data saved successfully.' + pushRef.name() + " wine: " + wine);
//         res.send(wine);
//       }
//     });
// }
 
// exports.updateWine = function(req, res) {
// 	var id = req.params.id;
// 	var wine = req.body;
// 	console.log('Updating wine: ' + id);
// }
 
// exports.deleteWine = function(req, res) {
// 	var id = req.params.id;
// 	console.log('Deleting wine: ' + id);
// }