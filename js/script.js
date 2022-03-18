//Business logic
//constructor

function Pizza(size, crust, topping, quantity){
    this.mySize = size;
    this.myCrust = crust;
    this.myTop = topping;
    this.myQuantity = quantity;
}

//User interface
//submit button
$(document).ready(function(){
    $("#send").click(function(event){
        event.preventDefault();

        let mquantity = document.getElementById("quantity").value;

        if(mquantity == ""){
            alert("choose the quantity")
        }else{
            $("#send").hide();
            $(".checkout").show();
            $(".display").slideDown();
            $("#home").slideDown();
            $("#grand").slideDown();
        }

        function getSize(){
            var sizeCost = document.getElementById("pizza").value;
            return parseInt(sizeCost) 
        }
        function getCrust(){
            var crustCost = document.getElementById("crust").value;
            return parseInt(crustCost) 
        }
        function getNumber(){
            var myNumber = document.getElementById("quantity").value;
            return parseInt(myNumber) 
        }
        
        function getTopping() {
            var myTopping = document.getElementById("topping").value;
            return parseInt(myTopping);
          }
          
       // Object for new customer;

        var newCustomer = new Pizza(getSize(), getCrust(), getTopping(), getNumber());
        
        // Total cost for the new customer:
        var totalCost = ((newCustomer.mySize + newCustomer.myCrust + newCustomer.myTop)*(newCustomer.myQuantity));
        // alert("Your charges are " + totalCost)
        $(".display").append("<h3> Your Total Bill is: " + totalCost +"</h3>")
    });

    //delivery location
    $("#home").click(function(){
        $("#grand").hide();
        $(".display").hide();
        $(".checkout").hide();
        $(".userdeliver").show();
    })
    

});
function clearTextarea() {
    $("#myForm").reset(); //reset textarea inputs
  }