const mongoose = require('mongoose');
const request = require('request');
// const fixieRequest = request.defaults({'proxy': process.env.FIXIE_URL});
const express = require('express');
const moment = require('moment');
const router = express.Router();
var data = require('../models/apidata');

mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw/node-angular');
var mongodbUri = 'mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw';

var promise = mongoose.connect(mongodbUri, {
  useMongoClient: true,
  /* other options */
});

promise.then(function(db) {});

// var db = mongoose.connection;

router.get('/data', function(req, res) {
	console.log('Requesting data...');
	// Find data from yesterday with MomentJS (subtract 1 from Today's date)
	data.find({"updated": moment().subtract(1, 'days').format('L')})
		// .sort({"_id": -1})
		.exec(function(err, yesterday) {
			if (err) {
				console.log('Error getting data..');
			} 
			if (yesterday) {
				console.log('Pulling yesterday\'s data! Date: ' + yesterday[0].updated);

				const apiURL = 'http://www.conquercancer.ca/site/PageServer?pagename=2018_api_data&pgwrap=n';
			    request(apiURL, function(err, response, body) {
			        if (!err && response.statusCode == 200) {
			            var locals = JSON.parse(body);
			            
			            const apiOneWalk = 'http://www.onewalk.ca/site/PageServer?pagename=api_data&pgwrap=n';
			            request(apiOneWalk, function(err, response, body) {
			                if (!err && response.statusCode == 200) {
			                    var locals2 = JSON.parse(body);
			                    
			                    const apiRidePerth = 'http://www.conquercancer.org.au/site/PageServer?pagename=api_data&pgwrap=n';
			                    request(apiRidePerth, function(err, response, body) {
			                        if (!err && response.statusCode == 200) {
			                            var locals3 = JSON.parse(body);
			                            
			                            const apiOneDay = 'http://participate.theoneday.org.au/site/PageServer?pagename=api_data&pgwrap=n';
			                            request(apiOneDay, function(err, response, body) {
			                                if (!err && response.statusCode == 200) {
				                                var locals4 = JSON.parse(body);

	                                            // console.log(yesterday[0].to18Donations);

	                                            // Find today's data
	                                            data.findOne({"updated": moment().format('L')})
	                                            	// .sort({"_id": -1})
	                                            	.exec(function(err, latestdata) {
	                                            		if (err) {
	                                            			console.log('There was an error getting Today\'s data: ');
	                                            			console.log(err);
	                                            		}
	                                            		if (latestdata) {
	                                            			console.log("Getting latest data! Date: " + latestdata.updated);
	                                            			// console.log("Getting latest data! Date: " + latestdata);
	                                            			// =========================== Ride Toronto 2018 =========================== //
				                                            var removeDollarTo18v1 = latestdata.to18Donations;
				                                            var removeDollarTo18v2 = yesterday[0].to18Donations;
				                                            var removeRegTo18v1 = latestdata.to18RegFee;
				                                            var removeRegTo18v2 = yesterday[0].to18RegFee;
				                                            // =========================== Ride Toronto 2017 =========================== //
				                                            var removeDollarTo17v1 = latestdata.to17Donations;
				                                            var removeDollarTo17v2 = yesterday[0].to17Donations;

				                                            // =========================== Ride Montreal 2018 =========================== //
				                                            var removeDollarMo18v1 = latestdata.mo18Donations;
				                                            var removeDollarMo18v2 = yesterday[0].mo18Donations;
				                                            var removeRegMo18v1 = latestdata.mo18RegFee;
				                                            var removeRegMo18v2 = yesterday[0].mo18RegFee;
				                                            // =========================== Ride Montreal 2018 =========================== //
				                                            var removeDollarMo17v1 = latestdata.mo17Donations;
				                                            var removeDollarMo17v2 = yesterday[0].mo17Donations;

				                                            // =========================== Ride Alberta 2018 =========================== //
				                                            var removeDollarAb18v1 = latestdata.ab18Donations;
				                                            var removeDollarAb18v2 = yesterday[0].ab18Donations;
				                                            var removeRegAb18v1 = latestdata.ab18RegFee;
				                                            var removeRegAb18v2 = yesterday[0].ab18RegFee;
				                                            // =========================== Ride Alberta 2017 =========================== //
				                                            var removeDollarAb17v1 = latestdata.ab17Donations;
				                                            var removeDollarAb17v2 = yesterday[0].ab17Donations;
					                                            
				                                            // =========================== Ride Vancouver 2018 =========================== //
				                                            var removeDollarVa18v1 = latestdata.va18Donations;
				                                            var removeDollarVa18v2 = yesterday[0].va18Donations;
				                                            var removeRegVa18v1 = latestdata.va18RegFee;
				                                            var removeRegVa18v2 = yesterday[0].va18RegFee;
				                                            // =========================== Ride Vancouver 2017 =========================== //
				                                            var removeDollarVa17v1 = latestdata.va17Donations;
				                                            var removeDollarVa17v2 = yesterday[0].va17Donations;
				                                            
				                                            // =========================== Ride Perth 2018 =========================== //
				                                            var removeDollarPr18v1 = latestdata.pr18Donations;
				                                            var removeDollarPr18v2 = yesterday[0].pr18Donations;
				                                            var removeRegPr18v1 = latestdata.pr18RegFee;
				                                            var removeRegPr18v2 = yesterday[0].pr18RegFee;
				                                            // =========================== Ride Perth 2017 =========================== //
				                                            var removeDollarPr17v1 = latestdata.pr17Donations;
				                                            var removeDollarPr17v2 = yesterday[0].pr17Donations;
				                                            var removeRegPr17v1 = latestdata.pr17RegFee; 
				                                            var removeRegPr17v2 = yesterday[0].pr17RegFee; 
				                                                
				                                            // =========================== OneWalk Toronto 2018 =========================== //
				                                            var removeDollarOwTo18v1 = latestdata.owTo18Donations;
				                                            var removeDollarOwTo18v2 = yesterday[0].owTo18Donations;
				                                            var removeRegOwTo18v1 = latestdata.owTo18RegFee;
				                                            var removeRegOwTo18v2 = yesterday[0].owTo18RegFee;
				                                            var owTo18NightWalkers = locals2.getEventTotal.toronto.to18.nightWlk;
				                                            var owTo182day = locals2.getEventTotal.toronto.to18.twoDayWlk;
				                                            var owTo1815kmWalkers = locals2.getEventTotal.toronto.to18.Wlkr15km;
				                                            var owTo1825kmWalkers = locals2.getEventTotal.toronto.to18.Wlkr25km;
				                                            var owTo1840kmWalkers = locals2.getEventTotal.toronto.to18.Wlkr40km;
				                                            // =========================== OneWalk Toronto 2017 =========================== //
				                                            var removeDollarOwTo17v1 = latestdata.owTo17Donations;
				                                            var removeDollarOwTo17v2 = yesterday[0].owTo17Donations;
				                                            var owTo1715kmWalkers = locals2.getEventTotal.toronto.to17.Wlkr15km;
				                                            var owTo1725kmWalkers = locals2.getEventTotal.toronto.to17.Wlkr25km;
				                                            var owTo1740kmWalkers = locals2.getEventTotal.toronto.to17.Wlkr40km;

				                                            // =========================== OneDay Brisbane 2018 =========================== //
				                                            var removeDollarBr18v1 = latestdata.br18Donations;
				                                            var removeDollarBr18v2 = yesterday[0].br18Donations;
				                                            var removeRegBr18v1 = latestdata.br18RegFee;
				                                            var removeRegBr18v2 = yesterday[0].br18RegFee;

				                                            // =========================== OneDay Brisbane 2017 =========================== //


				                                            // =========================== OneDay Melbourne 2018 =========================== //
				                                            var removeDollarMl18v1 = latestdata.ml18Donations;
				                                            var removeDollarMl18v2 = yesterday[0].ml18Donations;
				                                            var removeRegMl18v1 = latestdata.ml18RegFee;
				                                            var removeRegMl18v2 = yesterday[0].ml18RegFee;

				                                            // =========================== OneDay Melbourne 2017 =========================== //
				                                            var removeDollarMl17v1 = latestdata.ml17Donations;
				                                            var removeDollarMl17v2 = yesterday[0].ml17Donations;
				                                            
				                                            // Remove Dollar Sign from Data Brought In
				                                            var numberTo18v1 = Number(removeDollarTo18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberTo18v2 = Number(removeDollarTo18v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberTo17v1 = Number(removeDollarTo17v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberTo17v2 = Number(removeDollarTo17v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegTo18v1 = Number(removeRegTo18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegTo18v2 = Number(removeRegTo18v2.replace(/[^0-9\.-]+/g,""));
				                                                
				                                            var numberPr18v1 = Number(removeDollarPr18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberPr18v2 = Number(removeDollarPr18v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberPr17v1 = Number(removeDollarPr17v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberPr17v2 = Number(removeDollarPr17v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegPr18v1 = Number(removeRegPr18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegPr18v2 = Number(removeRegPr18v2.replace(/[^0-9\.-]+/g,""));
				                                            
				                                            var numberMo18v1 = Number(removeDollarMo18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberMo18v2 = Number(removeDollarMo18v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberMo17v1 = Number(removeDollarMo17v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberMo17v2 = Number(removeDollarMo17v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegMo18v1 = Number(removeRegMo18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegMo18v2 = Number(removeRegMo18v2.replace(/[^0-9\.-]+/g,""));
				                                            
				                                            var numberAb18v1 = Number(removeDollarAb18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberAb18v2 = Number(removeDollarAb18v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberAb17v1 = Number(removeDollarAb17v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberAb17v2 = Number(removeDollarAb17v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegAb18v1 = Number(removeRegAb18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegAb18v2 = Number(removeRegAb18v2.replace(/[^0-9\.-]+/g,""));
				                                            
				                                            var numberVa18v1 = Number(removeDollarVa18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberVa18v2 = Number(removeDollarVa18v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberVa17v1 = Number(removeDollarVa17v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberVa17v2 = Number(removeDollarVa17v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegVa18v1 = Number(removeRegVa18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegVa18v2 = Number(removeRegVa18v2.replace(/[^0-9\.-]+/g,""));
				                                            
				                                            var numberOwTo18v1 = Number(removeDollarOwTo18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberOwTo18v2 = Number(removeDollarOwTo18v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberOwTo17v1 = Number(removeDollarOwTo17v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberOwTo17v2 = Number(removeDollarOwTo17v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegOwTo18v1 = Number(removeRegOwTo18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegOwTo18v2 = Number(removeRegOwTo18v2.replace(/[^0-9\.-]+/g,""));

				                                            var numberBr18v1 = Number(removeDollarBr18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberBr18v2 = Number(removeDollarBr18v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegBr18v1 = Number(removeRegBr18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegBr18v2 = Number(removeRegBr18v2.replace(/[^0-9\.-]+/g,"")); 
				                                            
				                                            var numberMl18v1 = Number(removeDollarMl18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberMl18v2 = Number(removeDollarMl18v2.replace(/[^0-9\.-]+/g,"")); 
				                                            var numberMl17v1 = Number(removeDollarMl17v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberMl17v2 = Number(removeDollarMl17v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegMl18v1 = Number(removeRegMl18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegMl18v2 = Number(removeRegMl18v2.replace(/[^0-9\.-]+/g,""));
				                                            
				                                            // Subtract Real Time Data vs Static Data        
				                                            var to18DonationSub = numberTo18v1 - numberTo18v2;
				                                            var to17DonationSub = numberTo17v1 - numberTo17v2;
				                                            var to18RfiSub = locals.getEventTotal.toronto.to18.rfi - yesterday[0].to18RFI;
				                                            var to18CrewSub = locals.getEventTotal.toronto.to18.crews - yesterday[0].to18Crews;
				                                            
				                                            var to18RegSub = numberRegTo18v1 - numberRegTo18v2;
				                                            var to18VRDaily = locals.getEventTotal.toronto.to18.virtual - yesterday[0].to18VR
				                                            var to18Riders2Daily = locals.getEventTotal.toronto.to18.riders2 - yesterday[0].to18Riders2;
				                                            var to18OneDayDaily = locals.getEventTotal.toronto.to18.oneday - yesterday[0].to18OneDay;

				                                            var to18TotalParticipants = parseFloat(locals.getEventTotal.toronto.to18.riders) + parseFloat(locals.getEventTotal.toronto.to18.riders2) + parseFloat(locals.getEventTotal.toronto.to18.oneday);

				                                            var to18TotalRiders = locals.getEventTotal.toronto.to18.riders;

				                                            var to18RiderSub = to18TotalRiders - yesterday[0].to18Riders;
				                                            
				                                            var pr18DonationSub = numberPr18v1 - numberPr18v2;
				                                            var pr17DonationSub = numberPr17v1 - numberPr17v2;
				                                            var pr18RfiSub = locals3.getEventTotal.perth.pr18.rfi - yesterday[0].pr18RFI;
				                                            var pr18CrewSub = locals3.getEventTotal.perth.pr18.crews - yesterday[0].pr18Crews;
				                                            var pr18RiderSub = locals3.getEventTotal.perth.pr18.riders - yesterday[0].pr18Riders;
				                                            var pr18RegSub = numberRegPr18v1 - numberRegPr18v2;
				                                            
				                                            var mo18DonationSub = numberMo18v1 - numberMo18v2;
				                                            var mo17DonationSub = numberMo17v1 - numberMo17v2;
				                                            var mo18RfiSub = locals.getEventTotal.montreal.mo18.rfi - yesterday[0].mo18RFI;
				                                            var mo18CrewSub = locals.getEventTotal.montreal.mo18.crews - yesterday[0].mo18Crews;
				                                            var mo18RiderSub = locals.getEventTotal.montreal.mo18.riders - yesterday[0].mo18Riders;
				                                            var mo18RegSub = numberRegMo18v1 - numberRegMo18v2;
				                                            var mo18VRDaily = locals.getEventTotal.montreal.mo18.virtual - yesterday[0].mo18VR;
				                                            
				                                            var ab18DonationSub = numberAb18v1 - numberAb18v2;
				                                            var ab17DonationSub = numberAb17v1 - numberAb17v2;
				                                            var ab18RfiSub = locals.getEventTotal.alberta.ab18.rfi - yesterday[0].ab18RFI;
				                                            var ab18CrewSub = locals.getEventTotal.alberta.ab18.crews - yesterday[0].ab18Crews;
				                                            var ab18RiderSub = locals.getEventTotal.alberta.ab18.riders - yesterday[0].ab18Riders;
				                                            var ab18RegSub = numberRegAb18v1 - numberRegAb18v2;
				                                            var ab18VRDaily = locals.getEventTotal.alberta.ab18.virtual - yesterday[0].ab18VR;
				                                                
				                                            var va18DonationSub = numberVa18v1 - numberVa18v2;
				                                            var va17DonationSub = numberVa17v1 - numberVa17v2;
				                                            var va18RfiSub = locals.getEventTotal.vancouver.va18.rfi - yesterday[0].va18RFI;
				                                            var va18CrewSub = locals.getEventTotal.vancouver.va18.crews - yesterday[0].va18Crews;
				                                            var va18RiderSub = locals.getEventTotal.vancouver.va18.riders - yesterday[0].va18Riders;
				                                            var va18RegSub = numberRegVa18v1 - numberRegVa18v2;
				                                            var va18VRDaily = locals.getEventTotal.vancouver.va18.virtual - yesterday[0].va18VR;
				                                            
				                                            var owto18DonationSub = numberOwTo18v1 - numberOwTo18v2;
				                                            var owto17DonationSub = numberOwTo17v1 - numberOwTo17v2;
				                                            var owto18RfiSub = locals2.getEventTotal.toronto.to18.rfi - yesterday[0].owTo18RFI;
				                                            var owto18RegSub = numberRegOwTo18v1 - numberRegOwTo18v2;
				                                            var owto18TotalWalkers = parseFloat(owTo18NightWalkers) + parseFloat(owTo1815kmWalkers) + parseFloat(owTo1825kmWalkers) + parseFloat(owTo1840kmWalkers) + parseFloat(owTo182day);
				                                            var owto18CrewsDailySub = locals2.getEventTotal.toronto.to18.crews - yesterday[0].owTo18Crews;
				                                            var owto18WalkersDailySub = owto18TotalWalkers - yesterday[0].owTo18Walkers;
				                                            var owTo182dayDailySub = locals2.getEventTotal.toronto.to18.Wlkr15km - yesterday[0].owTo182day;
					                                        var owTo1815kmWalkersDailySub = locals2.getEventTotal.toronto.to18.Wlkr15km - yesterday[0].owTo1815kmWalkers;
					                                        var owTo1825kmWalkersDailySub = locals2.getEventTotal.toronto.to18.Wlkr25km - yesterday[0].owTo1825kmWalkers;
					                                        var owTo1840kmWalkersDailySub = locals2.getEventTotal.toronto.to18.Wlkr40km - yesterday[0].owTo1840kmWalkers;
					                                        var owTo18NightWalkersDailySub = locals2.getEventTotal.toronto.to18.nightWlk - yesterday[0].owTo18NightWalkers;
				                                            
				                                            // ONEDAY - DAILY - Brisbane
				                                            var br18DonationSub = numberBr18v1 - numberBr18v2;
				                                            var br18RegSub = numberRegBr18v1 - numberRegBr18v2;
				                                            var br18RiderSub = locals4.getEventTotal.brisbane.br18.riders - yesterday[0].br18Riders;

				                                            var br18WalkerSub = locals4.getEventTotal.brisbane.br18.walkers - yesterday[0].br18Walkers;

				                                            // ONEDAY - DAILY - Melbourne
				                                            var ml18DonationSub = numberMl18v1 - numberMl18v2;
				                                            var ml18RegSub = numberRegMl18v1 - numberRegMl18v2;
				                                            var ml18RiderSub = locals4.getEventTotal.melbourne.ml18.riders - yesterday[0].ml18Riders;
				                                             var ml18WalkerSub = locals4.getEventTotal.melbourne.ml18.walkers - yesterday[0].ml18Walkers;

				                                            var ml17DonationSub = numberMl17v1 - numberMl17v2;
				                                            
				                                            // Add Dollar Sign back into Data    
				                                            var newToDonDaily = '$' + to18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newTo17DonDaily = '$' + to17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newToRegDaily = '$' + to18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); 
				                                            var newPrDonDaily = '$' + pr18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newPr17DonDaily = '$' + pr17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newPrRegDaily = '$' + pr18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newMoDonDaily = '$' + mo18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newMo17DonDaily = '$' + mo17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newMoRegDaily = '$' + mo18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newAbDonDaily = '$' + ab18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newAb17DonDaily = '$' + ab17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newAbRegDaily = '$' + ab18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newVaDonDaily = '$' + va18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newVa17DonDaily = '$' + va17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newVaRegDaily = '$' + va18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newOwToDonDaily = '$' + owto18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newOwTo17DonDaily = '$' + owto17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newOwToRegDaily = '$' + owto18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

				                                            var newBrDonDaily = '$' + br18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newBrRegDaily = '$' + br18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

				                                            var newMlDonDaily = '$' + ml18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); 
				                                            var newMlRegDaily = '$' + ml18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newMl17DonDaily = '$' + ml17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

				                                            latestdata.updated = moment().format('L');
				                                            latestdata.nightly = 'false',
				                                            // RIDE - Toronto
	                                            			latestdata.to18Donations = locals.getEventTotal.toronto.to18.totalDonation;
			                                            	latestdata.to18RegFee = locals.getEventTotal.toronto.to18.regFee;
			                                                latestdata.to18Crews = locals.getEventTotal.toronto.to18.crews;
			                                                latestdata.to18RFI = locals.getEventTotal.toronto.to18.rfi;
			                                                latestdata.to18Riders = to18TotalRiders;
			                                                latestdata.to18VR = locals.getEventTotal.toronto.to18.virtual;
			                                                latestdata.to18Riders2 = locals.getEventTotal.toronto.to18.riders2;
                                                			latestdata.to18OneDay = locals.getEventTotal.toronto.to18.oneday;
                                                			latestdata.to18TotalParticipants = to18TotalParticipants;
			                                                
			                                                latestdata.to17Donations = locals.getEventTotal.toronto.to17.totalDonation;
			                                                latestdata.to17RegFee = locals.getEventTotal.toronto.to17.regFee;
			                                                latestdata.to17Crews = locals.getEventTotal.toronto.to17.crews;
			                                                latestdata.to17RFI = locals.getEventTotal.toronto.to17.rfi;
			                                                latestdata.to17Riders = locals.getEventTotal.toronto.to17.riders;
			                                                latestdata.to17VR = locals.getEventTotal.toronto.to17.virtual;
			                                                
			                                                // RIDE - Montreal
			                                                latestdata.mo18Donations = locals.getEventTotal.montreal.mo18.totalDonation;
			                                                latestdata.mo18RegFee = locals.getEventTotal.montreal.mo18.regFee;
			                                                latestdata.mo18Crews = locals.getEventTotal.montreal.mo18.crews;
			                                                latestdata.mo18RFI = locals.getEventTotal.montreal.mo18.rfi;
			                                                latestdata.mo18Riders = locals.getEventTotal.montreal.mo18.riders;
			                                                latestdata.mo18VR = locals.getEventTotal.montreal.mo18.virtual;
			                                                
			                                                latestdata.mo17Donations = locals.getEventTotal.montreal.mo17.totalDonation;
			                                                latestdata.mo17RegFee = locals.getEventTotal.montreal.mo17.regFee;
			                                                latestdata.mo17Crews = locals.getEventTotal.montreal.mo17.crews;
			                                                latestdata.mo17RFI = locals.getEventTotal.montreal.mo17.rfi;
			                                                latestdata.mo17Riders = locals.getEventTotal.montreal.mo17.riders;
			                                                latestdata.mo17VR = locals.getEventTotal.montreal.mo17.virtual;
			                                                
			                                                // RIDE - Alberta
			                                                latestdata.ab18Donations = locals.getEventTotal.alberta.ab18.totalDonation;
			                                                latestdata.ab18RegFee = locals.getEventTotal.alberta.ab18.regFee;
			                                                latestdata.ab18Crews = locals.getEventTotal.alberta.ab18.crews;
			                                                latestdata.ab18RFI = locals.getEventTotal.alberta.ab18.rfi;
			                                                latestdata.ab18Riders = locals.getEventTotal.alberta.ab18.riders;
			                                                latestdata.ab18VR = locals.getEventTotal.alberta.ab18.virtual;
			                                                
			                                                latestdata.ab17Donations = locals.getEventTotal.alberta.ab17.totalDonation;
			                                                latestdata.ab17RegFee = locals.getEventTotal.alberta.ab17.regFee;
			                                                latestdata.ab17Crews = locals.getEventTotal.alberta.ab17.crews;
			                                                latestdata.ab17RFI = locals.getEventTotal.alberta.ab17.rfi;
			                                                latestdata.ab17Riders = locals.getEventTotal.alberta.ab17.riders;
			                                                latestdata.ab17VR = locals.getEventTotal.alberta.ab17.virtual;
			                                                
			                                                // RIDE - Vancouver
			                                                latestdata.va18Donations = locals.getEventTotal.vancouver.va18.totalDonation;
			                                                latestdata.va18RegFee = locals.getEventTotal.vancouver.va18.regFee;
			                                                latestdata.va18Crews = locals.getEventTotal.vancouver.va18.crews;
			                                                latestdata.va18RFI = locals.getEventTotal.vancouver.va18.rfi;
			                                                latestdata.va18Riders = locals.getEventTotal.vancouver.va18.riders;
			                                                latestdata.va18VR = locals.getEventTotal.vancouver.va18.virtual;
			                                                
			                                                latestdata.va17Donations = locals.getEventTotal.vancouver.va17.totalDonation;
			                                                latestdata.va17RegFee = locals.getEventTotal.vancouver.va17.regFee;
			                                                latestdata.va17Crews = locals.getEventTotal.vancouver.va17.crews;
			                                                latestdata.va17RFI = locals.getEventTotal.vancouver.va17.rfi;
			                                                latestdata.va17Riders = locals.getEventTotal.vancouver.va17.riders;
			                                                latestdata.va17VR = locals.getEventTotal.vancouver.va17.virtual;
			                                                
			                                                // ONEWALK - Toronto
			                                                latestdata.owTo18Donations = locals2.getEventTotal.toronto.to18.totalDonation;
			                                                latestdata.owTo18RegFee = locals2.getEventTotal.toronto.to18.regFee;
			                                                latestdata.owTo18Crews = locals2.getEventTotal.toronto.to18.crews;
			                                                latestdata.owTo18Walkers = owto18TotalWalkers;
			                                                latestdata.owTo18NightWalkers = owTo18NightWalkers;
			                                                latestdata.owTo182day = owTo182day;
			                                                latestdata.owTo1815kmWalkers = owTo1815kmWalkers;
			                                                latestdata.owTo1825kmWalkers = owTo1825kmWalkers;
			                                                latestdata.owTo1840kmWalkers = owTo1840kmWalkers;
			                                                latestdata.owTo18RFI = locals2.getEventTotal.toronto.to18.rfi;
			                                                
			                                                latestdata.owTo17Donations = locals2.getEventTotal.toronto.to17.totalDonation;
			                                                latestdata.owTo17RegFee = locals2.getEventTotal.toronto.to17.regFee;
			                                                latestdata.owTo17Crews = locals2.getEventTotal.toronto.to17.crews;
			                                                latestdata.owTo17Walkers = locals2.getEventTotal.toronto.to17.walkers;
			                                                latestdata.owTo1715kmWalkers = owTo1715kmWalkers;
			                                                latestdata.owTo1725kmWalkers = owTo1725kmWalkers;
			                                                latestdata.owTo1740kmWalkers = owTo1740kmWalkers;
			                                                latestdata.owTo17RFI = locals2.getEventTotal.toronto.to17.rfi;
			                                                
			                                                // RIDE - Perth
			                                                latestdata.pr18Donations = locals3.getEventTotal.perth.pr18.totalDonation;
			                                                latestdata.pr18RegFee = locals3.getEventTotal.perth.pr18.regFee;
			                                                latestdata.pr18Crews = locals3.getEventTotal.perth.pr18.crews;
			                                                latestdata.pr18RFI = locals3.getEventTotal.perth.pr18.rfi;
			                                                latestdata.pr18Riders = locals3.getEventTotal.perth.pr18.riders;
			                                                
			                                                latestdata.pr17Donations = locals3.getEventTotal.perth.pr17.totalDonation;
			                                                latestdata.pr17RegFee = locals3.getEventTotal.perth.pr17.regFee;
			                                                latestdata.pr17Crews = locals3.getEventTotal.perth.pr17.crews;
			                                                latestdata.pr17RFI = locals3.getEventTotal.perth.pr17.rfi;
			                                                latestdata.pr17Riders = locals3.getEventTotal.perth.pr17.riders;

			                                                 // ONEDAY - Brisbane
			                                                latestdata.br18Donations = locals4.getEventTotal.brisbane.br18.totalDonation;
			                                                latestdata.br18RegFee = locals4.getEventTotal.brisbane.br18.regFee;
			                                                latestdata.br18Walkers = locals4.getEventTotal.brisbane.br18.walkers;
			                                                latestdata.br18Riders = locals4.getEventTotal.brisbane.br18.riders;

			                                                latestdata.br17Donations = locals4.getEventTotal.brisbane.br17.totalDonation;
			                                                latestdata.br17RegFee = locals4.getEventTotal.brisbane.br17.regFee;
			                                                latestdata.br17Walkers = locals4.getEventTotal.brisbane.br17.walkers;
			                                                latestdata.br17Riders = locals4.getEventTotal.brisbane.br17.riders;
			                                                
			                                                // ONEDAY - Melbourne
			                                                latestdata.ml18Donations = locals4.getEventTotal.melbourne.ml18.totalDonation;
			                                                latestdata.ml18RegFee = locals4.getEventTotal.melbourne.ml18.regFee;
			                                                latestdata.ml18Walkers = locals4.getEventTotal.melbourne.ml18.walkers;
			                                                latestdata.ml18Riders = locals4.getEventTotal.melbourne.ml18.riders;
			                                                
			                                                latestdata.ml17Donations = locals4.getEventTotal.melbourne.ml17.totalDonation;
			                                                latestdata.ml17RegFee = locals4.getEventTotal.melbourne.ml17.regFee;
			                                                latestdata.ml17Walkers = locals4.getEventTotal.melbourne.ml17.walkers;
			                                                latestdata.ml17Riders = locals4.getEventTotal.melbourne.ml17.riders;
			                                                
			                                                // DAILY - RIDE - Toronto
			                                                latestdata.to18DonDaily = newToDonDaily;
			                                                latestdata.to18RegFeeDaily = newToRegDaily;
			                                                latestdata.to18RFIDaily = to18RfiSub;
			                                                latestdata.to18CrewDaily = to18CrewSub;
			                                                latestdata.to18RidersDaily = to18RiderSub;
			                                                latestdata.to18VRDaily = to18VRDaily;
			                                                latestdata.to18Riders2Daily = to18Riders2Daily;
			                                                latestdata.to18OneDayDaily = to18OneDayDaily;
			                                                
			                                                latestdata.to17DonDaily = newTo17DonDaily;
			                                                
			                                                // DAILY - RIDE - Perth
			                                                latestdata.pr18DonDaily = newPrDonDaily;
			                                                latestdata.pr18RegFeeDaily = newPrRegDaily;
			                                                latestdata.pr18RFIDaily = pr18RfiSub;
			                                                latestdata.pr18CrewDaily = pr18CrewSub;
			                                                latestdata.pr18RidersDaily = pr18RiderSub;
			                                                
			                                                latestdata.pr17DonDaily = newPr17DonDaily;
			                                                
			                                                // DAILY - RIDE - Montreal
			                                                latestdata.mo18DonDaily = newMoDonDaily;
			                                                latestdata.mo18RegFeeDaily = newMoRegDaily;
			                                                latestdata.mo18RFIDaily = mo18RfiSub;
			                                                latestdata.mo18CrewDaily = mo18CrewSub;
			                                                latestdata.mo18RidersDaily = mo18RiderSub;
			                                                latestdata.mo18VRDaily = mo18VRDaily;
			                                                
			                                                latestdata.mo17DonDaily = newMo17DonDaily;

			                                                // DAILY - RIDE - Alberta
			                                                latestdata.ab18DonDaily = newAbDonDaily;
			                                                latestdata.ab18RegFeeDaily = newAbRegDaily;
			                                                latestdata.ab18RFIDaily = ab18RfiSub;
			                                                latestdata.ab18CrewDaily = ab18CrewSub;
			                                                latestdata.ab18RidersDaily = ab18RiderSub;
			                                                latestdata.ab18VRDaily = ab18VRDaily;
			                                                
			                                                latestdata.ab17DonDaily = newAb17DonDaily;

			                                                // DAILY - RIDE - Vancouver
			                                                latestdata.va18DonDaily = newVaDonDaily;
			                                                latestdata.va18RegFeeDaily = newVaRegDaily;
			                                                latestdata.va18RFIDaily = va18RfiSub;
			                                                latestdata.va18CrewDaily = va18CrewSub;
			                                                latestdata.va18RidersDaily = va18RiderSub;
			                                                latestdata.va18VRDaily = va18VRDaily;
			                                                
			                                                latestdata.va17DonDaily = newVa17DonDaily;

			                                                // DAILY - ONEWALK - Toronto
			                                                latestdata.owto18DonDaily = newOwToDonDaily;
			                                                latestdata.owto18RegDaily = newOwToRegDaily;
			                                                latestdata.owto18RFIDaily = owto18RfiSub;
			                                                latestdata.owto18WalkersDaily = owto18WalkersDailySub;
			                                                latestdata.owto182dayDaily = owTo182dayDailySub,
														    latestdata.owto18NightWalkersDaily = owTo18NightWalkersDailySub,
														    latestdata.owto1815kmWalkersDaily = owTo1815kmWalkersDailySub,
														    latestdata.owto1825kmWalkersDaily = owTo1825kmWalkersDailySub,
														    latestdata.owto1840kmWalkersDaily = owTo1840kmWalkersDailySub,
			                                                latestdata.owto18CrewsDaily = owto18CrewsDailySub;
			                                                
			                                                latestdata.owto17DonDaily = newOwTo17DonDaily;

			                                                // DAILY - ONEDAY - Melbourne
			                                                latestdata.ml18DonDaily = newMlDonDaily;
			                                                latestdata.ml18RegDaily = newMlRegDaily;
			                                                latestdata.ml18RidersDaily = ml18RiderSub;
			                                                latestdata.ml18WalkersDaily = ml18RiderSub;

			                                             	latestdata.ml17DonDaily = newMl17DonDaily;

			                                             	// DAILY - ONEDAY - Brisbane
			                                                latestdata.br18DonDaily = newBrDonDaily;
			                                                latestdata.br18RegDaily = newBrRegDaily;
			                                                latestdata.br18RidersDaily = br18RiderSub;
			                                                latestdata.br18WalkersDaily = br18WalkerSub;

			                                             	// latestdata.br17DonDaily = newBr17DonDaily;

				                                            latestdata.save(function (err){
				                                            	if (err) return handleError(err);
				                                            	console.log('Data saved to MongoDB!');
				                                            });
	                                            		}
	                                            		else {

	                                            		}
	                                            	});
			                                }
			                                if (err) {
									        	console.log('There was an error getting theoneday.org.au\'s data: ');
									        	console.log(err);
									        }
									        else {

									        }
			                            });
			                        }
			                        if (err) {
							        	console.log('There was an error getting conquercancer.org.au\'s data: ');
							        	console.log(err);
							        }
							        else {
							        	
							        }
			                    });
			                }
			                if (err) {
					        	console.log('There was an error getting onewalk.ca\'s data: ');
					        	console.log(err);
					        }
					        else {
					        	
					        }
			            });
			        }
			        if (err) {
			        	console.log('There was an error getting conquercancer.ca\'s data: ');
			        	console.log(err);
			        }
			        else {
			        	
			        }
			    });
			}
			else {

				console.log('Sorry there was an error getting yesterday\'s data: ');
				console.log(err);
				// console.log(data);
			}
		});
		

	data.findOne()
		.sort({"_id": -1})
		.exec(function(err, data) {
			if (err) {
				console.log('Error getting data..');
			} 
			if (data) {
				// console.log(data);
				res.json(data);
			}
			else {
				console.log('No data found!');
			}
		});
});

module.exports = router;