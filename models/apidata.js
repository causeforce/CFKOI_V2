var mongoose = require('mongoose');
const moment = require('moment');
var Schema = mongoose.Schema;

var dataSchema = new Schema({
    updated: String,
    nightly: String,
    to18Donations: String,
    to18RegFee: String,
    to18Crews: String,
    to18RFI: String,
    to18Riders: String,
    to18Riders2: String,
    to18OneDay: String,
    to18VR: String,
    to18TotalParticipants: String,
    mo18Donations: String,
    mo18RegFee: String,
    mo18Crews: String,
    mo18RFI: String,
    mo18Riders: String,
    mo18VR: String,
    ab18Donations: String,
    ab18RegFee: String,
    ab18Crews: String,
    ab18RFI: String,
    ab18Riders: String,
    ab18VR: String,
    va18Donations: String,
    va18RegFee: String,
    va18Crews: String,
    va18RFI: String,
    va18Riders: String,
    va18VR: String,
    to17Donations: String,
    to17RegFee: String,
    to17Crews: String,
    to17RFI: String,
    to17Riders: String,
    to17VR: String,
    mo17Donations: String,
    mo17RegFee: String,
    mo17Crews: String,
    mo17RFI: String,
    mo17Riders: String,
    mo17VR: String,
    ab17Donations: String,
    ab17RegFee: String,
    ab17Crews: String,
    ab17RFI: String,
    ab17Riders: String,
    ab17VR: String,
    va17Donations: String,
    va17RegFee: String,
    va17Crews: String,
    va17RFI: String,
    va17Riders: String,
    va17VR: String,
    owTo18Donations: String,
    owTo18RegFee: String,
    owTo18Crews: String,
    owTo18Walkers: String,
    owTo18NightWalkers: String,
    owTo182day: String,
    owTo1815kmWalkers: String,
    owTo1825kmWalkers: String,
    owTo1840kmWalkers: String,
    owTo18RFI: String,
    owTo17Donations: String,
    owTo17RegFee: String,
    owTo17Crews: String,
    owTo17Walkers: String,
    owTo1715kmWalkers: String,
    owTo1725kmWalkers: String,
    owTo1740kmWalkers: String,
    owTo17RFI: String,
    pr18Donations: String,
    pr18RegFee: String,
    pr18Crews: String,
    pr18RFI: String,
    pr18Riders: String,
    pr17Donations: String,
    pr17RegFee: String,
    pr17Crews: String,
    pr17RFI:String,
    pr17Riders: String,
    br18Donations: String,
    br18RegFee: String,
    br18Walkers: String,
    br18Riders: String,
    br17Donations: String,
    br17RegFee: String,
    br17Walkers: String,
    br17Riders: String,
    ml18Donations: String,
    ml18RegFee: String,
    ml18Walkers: String,
    ml18Riders: String,
    ml17Donations: String,
    ml17RegFee: String,
    ml17Walkers: String,
    ml17Riders: String,
    to18DonDaily: String,
    to18RegFeeDaily: String,
    to18RFIDaily: String,
    to18CrewDaily: String,
    to18RidersDaily: String,
    to18VRDaily: String,
    to18Riders2Daily: String,
    to18OneDayDaily: String,
    to17DonDaily: String,
    pr18DonDaily: String,
    pr18RegFeeDaily: String,
    pr18RFIDaily: String,
    pr18CrewDaily: String,
    pr18RidersDaily: String,
    pr17DonDaily: String,
    mo18DonDaily: String,
    mo17DonDaily: String,
    mo18CrewDaily: String,
    mo18RidersDaily: String,
    mo18VRDaily: String,
    mo18RegFeeDaily: String,
    mo18RFIDaily: String,
    ab18DonDaily: String,
    ab17DonDaily: String,
    ab18RegFeeDaily: String,
    ab18RFIDaily: String,
    ab18CrewDaily: String,
    ab18RidersDaily: String,
    ab18VRDaily: String,
    va18DonDaily: String,
    va18CrewDaily: String,
    va18RidersDaily: String,
    va18VRDaily: String,
    va17DonDaily: String,
    va18RegFeeDaily: String,
    va18RFIDaily: String,
    owto18DonDaily: String,
    owto17DonDaily: String,
    owto18RegDaily: String,
    owto18RFIDaily: String,
    owto18WalkersDaily: String,
    owto182dayDaily: String,
    owto18NightWalkersDaily: String,
    owto1815kmWalkersDaily: String,
    owto1825kmWalkersDaily: String,
    owto1840kmWalkersDaily: String,
    owto18CrewsDaily: String,
    br18DonDaily: String,
    br18RegDaily: String,
    br18RidersDaily: String,
    br18WalkersDaily: String,
    ml18DonDaily: String,
    ml17DonDaily: String,
    ml18RegDaily: String,
    ml18RidersDaily: String,
    ml18WalkersDaily: String
}, {versionKey: false});

module.exports = mongoose.model('ApiData', dataSchema);