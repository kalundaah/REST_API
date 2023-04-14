//
const fs = require('fs');

const schema = fs.readFileSync('./data.schema.json', 'utf8');
const schemaObj = JSON.parse(schema);
const dataObj = {};
Object.keys(schemaObj).forEach(table => {
    dataObj[table] = [];
});
//This fetches the client data from the json
const getClients = (req, res)=>{
    res.status(200).json({success: true, data: dataObj["clients"]});
};
//This checks for the string 'clientId' in the body of the postman and takes in new data to the json
const createClient = (req, res) =>{
    const clientId = req.body;
    if(!clientId){ //if it is empty return 400 invalid request
        return res.status(400).json({success: false, message: 'Please provide an ID'});
    } //if it has data change the data to string notation then push to the json
    dataObj["clients"].push(req.body);
    const data = JSON.stringify(dataObj);
    fs.writeFileSync('./data.json', data + "\n",{flag: "a"});
    res.status(201).json({success: true, data: dataObj["clients"]});
};
//This fetches the room data from the json
const getRooms = (req, res)=>{
    res.status(200).json({success: true, data: dataObj["rooms"]});
};

//This checks for the string 'roomId' in the body of the postman and takes in new data to the json
const createRoom = (req, res) =>{
    const roomId = req.body;
    if(!roomId){ //if it is empty return 400 invalid request
        return res.status(400).json({success: false, message: 'Please provide an ID'});
    } //if it has data change the data to string notation then push to the json
    dataObj["rooms"].push(req.body);
    const data = JSON.stringify(dataObj);
    fs.writeFileSync('./data.json', data + "\n",{flag: "a+"});
    res.status(201).json({success: true, data: dataObj["rooms"]});
};
//This fetches the room data from the json
const getBookings = (req, res)=>{
    res.status(200).json({success: true, data: dataObj["bookings"]});
};
//This checks for the string both 'roomId' and  'clientId' in the body of the postman and takes in new data to the json
const createBooking = (req, res) =>{
    const {clientId, roomId,checkin,checkout,checkouttime} = req.body;
    if(!clientId || !roomId || !checkout || !checkouttime){ //if it is empty return 400 invalid request
        return res.status(400).json({success: false, message: 'Please provide an ID'});
    } //if it has data change the data to string notation then push to the json
    dataObj["clients"].push(req.body.clientId);
    dataObj["rooms"].push(req.body.roomId);
    const date = new Date();
    const tddat = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    const tdtim = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    dataObj["checkin"].push(tddat);
    dataObj["checkintime"].push(tdtim);
    dataObj["checkout"].push(req.body.checkout);
    dataObj["checkouttime"].push(req.body.checkouttime);
    const book = req.body.roomId.toString() + req.body.clientId.toString(); //the roomId and clientId have to turn to a string in order to concatunate
    dataObj["bookings"].push(book);
    const data = JSON.stringify(dataObj);
    fs.writeFileSync('./data.json', data + "\n",{flag: "a+"});
    console.log(`${clientId} has been added at this date ${tddat} and time ${tdtim} `);
    res.status(201).json({success: true, data: dataObj["bookings"]});
};
//This fetches the checkin data from the json
const getCheckin = (req, res)=>{
    res.status(200).json({success: true, data: dataObj["checkin"]});
};
const createCheckin = (req, res) =>{
    const checkIn = req.body;
    if(!checkIn){ //if it is empty return 400 invalid request
        return res.status(400).json({success: false, message: 'Please provide a check in'});
    } //if it has data change the data to string notation then push to the json
    dataObj["checkin"].push(req.body);
    const data = JSON.stringify(dataObj);
    fs.writeFileSync('./data.json', data + "\n",{flag: "a"});
    res.status(201).json({success: true, data: dataObj["checkin"]});
};
//This fetches the checkin data from the json
const getCheckout = (req, res)=>{
    res.status(200).json({success: true, data: dataObj["checkout"]});
};
const createCheckout = (req, res) =>{
    const checkout = req.body;
    if(!checkout){ //if it is empty return 400 invalid request
        return res.status(400).json({success: false, message: 'Please provide a check in'});
    } //if it has data change the data to string notation then push to the json
    dataObj["checkout"].push(req.body);
    const data = JSON.stringify(dataObj);
    fs.writeFileSync('./data.json', data + "\n",{flag: "a+"});
    res.status(201).json({success: true, data: dataObj["checkout"]});
};
//This fetches the checkin data from the json
const getChecktime = (req, res)=>{
    res.status(200).json({success: true, data: dataObj["Checktime"]});
};
const createChecktime = (req, res) =>{
    const Checktime = req.body;
    if(!Checktime){ //if it is empty return 400 invalid request
        return res.status(400).json({success: false, message: 'Please provide a check in'});
    } //if it has data change the data to string notation then push to the json
    dataObj["Checktime"].push(req.body);
    const data = JSON.stringify(dataObj);
    fs.writeFileSync('./data.json', data + "\n",{flag: "a+"});
    res.status(201).json({success: true, data: dataObj["Checktime"]});
};


module.exports = { 
    getClients,
    createClient, 
    getRooms, 
    createRoom,
    getBookings,
    createBooking,
    getCheckin,
    createCheckin,
    getCheckout,
    createCheckout,
    getChecktime,
    createChecktime,
}