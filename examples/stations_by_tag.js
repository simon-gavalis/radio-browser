'use strict'

const RadioBrowser = require('../')
const station = require('./station')

let filter = {
    by: 'tag', // stations by tag,
    searchterm: 'ska',
	limit: 5    // max 5 stations
}

RadioBrowser.getStations(filter)
    .then(data => {
        data.forEach((item) => station(item));
    })
    .catch(err => console.error(err))
