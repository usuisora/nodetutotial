var events = require("events");
var util = require("util");

var Person = function(name){
    this.name = name
};

util.inherits(Person,events.EventEmitter);

var james = new Person('James')
var kellu = new Person('Kellu')
var grony = new Person('Grony')

var people = [james,kellu,grony]
people.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name + ' says '+ mssg)
    })
})

grony.emit('speak','hi dudes')

kellu.emit('speak','i love the pasta')