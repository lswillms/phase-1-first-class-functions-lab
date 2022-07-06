const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function() {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const fareMultiplier = createFareMultiplier();

function createFareMultiplier(fareMultiplier) {
    return function() {
       return fareMultiplier*fareMultiplier
    }
}
const fareDoubler  = function(fare) {
    return fare * 2
}

const fareTripler = function(fares) {
    return fares *3
}

let arrayOfDrivers = returnFirstTwoDrivers()
let func = returnLastTwoDrivers

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers)
}

