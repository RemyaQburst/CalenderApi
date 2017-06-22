var google = require('googleapis');
var googleAuth = require('google-auth-library');
var clientId = "240218725784-ns0kl2p90l4tkeal4j5gt863mabljvtc.apps.googleusercontent.com";
var clientSecret = "0EVRV4IhJBaRG8W4wXBfawE9";
var redirectUrl = "http://localhost:8000";
var auth = new googleAuth();
var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
var resource = {
    summary: 'test',
    location: 'phase3',
    start: {
        dateTime: new Date() // events starts time
    },
    end: {
        dateTime: new Date() // events ends time
    },
    attendees: ['visakhn@qburst.com', 'mithunf@qburst.com']
};

var calendar = google.calendar('v3');
calendar.events.insert({
    auth: oauth2Client,
    calendarId: 'primary',
    sendNotifications: true,
    resource: resource
}, function(err, resp) {
    if (err) {
        console.log('There was an error : ' + err);
        return;
    }
    console.log(resp, 'Event created:', resp.htmlLink);
});