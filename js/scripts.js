//business logic
// function ToDoList(task) {
//   this.task = [];
//
// }

//  // here as reference for prototype
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }


// user interface logic
$(document).ready(function() {

  //make array with inputs
  var ToDoList = {
    items: [],
  };

  $("form").submit(function(e){
    e.preventDefault()
    ToDoList.items.push( $("#task").val() )



  //put input in dom

    $(".output").append("<p>"+ $("#task").val() + "</p>")
    console.log( "tasks: " + ToDoList.items )
  })




  //remove elemetns from dom and array
  $(".output").on("click", "p",function() {

    var that = this;
    $(that).remove();


    // remove item from array
    ToDoList.items.splice(ToDoList.items.indexOf( $(this).text() ), 1)

      console.log( "tasks: " +  ToDoList.items )
  });
});
