// Code your solution here
function findMatching(drivers, firstAnswer) {
    if (firstAnswer = (drivers.filter(((drivers) => drivers.toLowerCase() === firstAnswer.toLowerCase())))) {
        return firstAnswer;
    }  
}

function fuzzyMatch(drivers, firstLetter) {
    if (firstLetter = (drivers.filter(((drivers) => drivers.slice(0,2) === firstLetter)))) {
        return firstLetter;
    }  
}

function matchName(drivers, info) {
    if (info = (drivers.filter(((drivers) => drivers.name === info)))) {
        return info;
    }  
}