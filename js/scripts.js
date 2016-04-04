//business logic
function Place(local, time) {
  this.location = local;
  this.timeOfYear = time;
  this.landmarks = [];

  // this.image = $(this); trying to add an image(dom element) with a method
}

//  // here as reference for prototype
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }


// user interface logic
$(document).ready(function() {


  var America = new Place("Kansas", "Autumn");
  var England = new Place("London", "Summer");
  var Moon = new Place("Tranquility", "Winter");

  for (var prop in America) {
    console.log("obj." + prop + " = " + America[prop]);
  }

  // Output:
  // "obj.a = 1"
  // "obj.b = 2"
  // "obj.c = 3"

  $("input").click(function() {
    console.log(this)
    var that = this;

    if ($(that).val() === "america"){
      console.log(America)
    } else if ($(that).val() === "england") {
      console.log(England)
    } else if ($(that).val() === "moon") {
      console.log(Moon)
    }


  });
});
