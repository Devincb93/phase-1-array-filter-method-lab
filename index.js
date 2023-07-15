// Code your solution here
function findMatching(drivers, obj) {
        return drivers.filter(element => obj.toLowerCase() === element.toLowerCase())
    }
function fuzzyMatch(drivers, obj) {
    return drivers.filter(element => obj[0] === element[0])
}
function matchName(drivers, obj) {
    return drivers.filter(element => obj === element.name)
}