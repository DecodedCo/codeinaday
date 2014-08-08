// Robot Object
var robot = {
    version: 1000,
    name: "DecodedBot",
    walk: function(distance,direction) {
        alert("I am walking "+distance+" steps in "+direction+" direction");
    },
    pickup: function(item) {
        alert("I am picking up the "+item);
    }
}
