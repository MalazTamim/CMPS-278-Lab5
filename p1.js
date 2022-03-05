function getSize(){
    var slider = document.getElementById('slider');
    return slider.value;
}

function getMeat(){
    var total_list = document.getElementById("meat_toppings_fieldset").getElementsByTagName("input");
    var checked_list = [];

    j=0;

    for (i=0; i<total_list.length; i++){
        if(total_list[i].checked){
            checked_list[j] = total_list[i];
            j++
        }
    }
    return checked_list;
}

function getVeg(){      
    var total_list = document.getElementById("veggies_fieldset").getElementsByTagName("input");
    var checked_list = [];

    j=0;

    for (i=0; i<total_list.length; i++){
        if(total_list[i].checked){
            checked_list[j] = total_list[i];
            j++
        }
    }
    return checked_list;
}


function getCheese(){
    var total_list = document.getElementsByName("cheese quantity");

    for (i=0; i<total_list.length; i++){
        if(total_list[i].checked){
            if(total_list[i].value === "Regular Cheese") return 1;
            else if (total_list[i].value == "No Cheese") return 2;
            else return 3;
        }
    }

}

function ChangePizzaSize(){
    var pizzaSizePrice = document.getElementById('pizzaSizePrice');
    var pizza = document.getElementById("pizza");
    var value = document.getElementById('slider').value;


    if (value == 1) {
        size= 'Small';     
        price = 6;

        pizza.style.width = '100px';
        pizza.style.height = '100px';

      } else if (value == 2) {
        size=  'Medium';
        price = 10;
        pizza.style.width = '150px';
        pizza.style.height = '150px';


      } else if (value == 3) {
        size=  'Large';
        price = 14;

        pizza.style.width = '200px';
        pizza.style.height = '200px';

      } else if (value == 4) {
        size=  'X-Large';
        price = 16;
        pizza.style.width = '250px';
        pizza.style.height = '250px';

      }

      pizzaSizePrice.textContent = size + ' ' + price + '$';  

}

slider.addEventListener("change", ChangePizzaSize);

function calculateTotal(){
    var value = document.getElementById('slider').value;

    if(value==1){
    pizzaPrice=6;
    }
    else if (value==2){
    pizzaPrice =10;
    }
    else if (value==3){
        pizzaPrice = 14;
    }
    else if (value==4){
        pizzaPrice = 16;
    }

    if (getCheese()==3){
        cheesePrice=3;
    }
    else{
        cheesePrice =0;
    }

    return pizzaPrice + getMeat().length*2 + getVeg().length + cheesePrice;
}


function fillSummary(){
    fname = document.getElementById("fname");
    lname = document.getElementById("lname");
    email = document.getElementById("email");
    phoneNumber = document.getElementById("Phone number");
    city = document.getElementById("citylist");
    address = document.getElementById("address");

    orderSummary = document.getElementById("orderList");
    deliverTo = document.getElementById("dlvrTo");
    Total = document.getElementById("total");

    orderSummary.textContent = '';
    deliverTo.textContent = fname.value + ' ' + lname.value + ', ' + email.value + ', ' + phoneNumber.value + ', ' + city.value ;


    value = slider.value;
    
    if (value == 1) {
        size= 'Small';     
       

      } else if (value == 2) {
        size=  'Medium';
      


      } else if (value == 3) {
        size=  'Large';
       

      } else if (value == 4) {
        size=  'X-Large';

      }

    var ordersList = document.createElement("li");
    ordersList.append(document.createTextNode("-" + size + " " + "size"));
    orderSummary.append(ordersList);


    var total_list = document.getElementById("form1").getElementsByTagName("input");
    var checked_list = [];

    j=0;

    for (i=0; i<total_list.length; i++){
        if(total_list[i].checked){
            checked_list[j] = total_list[i];
            j++
        }
    }

    if (checked_list[checked_list.length-1].getAttribute("name")=="payment method")
   {
    for (var i = 0; i<checked_list.length-1; i++){
        var ordersList2 = document.createElement("li");
        ordersList2.append(document.createTextNode(checked_list[i].value));
        orderSummary.append(ordersList2);

    }
   }

   else{
    for (var i = 0; i<checked_list.length; i++){
        var ordersList2 = document.createElement("li");
        ordersList2.append(document.createTextNode(checked_list[i].value));
        orderSummary.append(ordersList2);

    }
   }

    total.textContent= "Total: " + calculateTotal() + " $";

}

function goToPage(nb){
    if (nb==1){
        document.getElementById("form1").style.display = "block";
        document.getElementById("form2").style.display = "none";
        document.getElementById("OrderSummary").style.display = "none";
        document.getElementById("body").style.background = "#01dddd";


    }

    else if(nb==2){
        document.getElementById("form1").style.display = "none";
        document.getElementById("form2").style.display = "block";
        document.getElementById("OrderSummary").style.display = "none";
        document.getElementById("body").style.background = "#e93a57";

    }
    else if(nb==3){
        document.getElementById("form1").style.display = "none";
        document.getElementById("form2").style.display = "none";
        document.getElementById("OrderSummary").style.display = "block";
        document.getElementById("body").style.background = "#3fc38e";



    }
}

next_section1.addEventListener("click", (e) =>{
    goToPage(2);
})

section2_next.addEventListener("click", (e) =>{
    if (!checkInfo()) {
        alert('Warning!');
        return;
      }

    fillSummary();
    goToPage(3);

})

section2_back.addEventListener("click", (e)=>{
    goToPage(1);

})

section3_back.addEventListener("click", (e) =>{
    goToPage(2);
})



function checkInfo() {
    let  inputs = document.getElementById('form2').getElementsByTagName("input");;
    for( i = 0; i < inputs.length; i++) {
      if (inputs[i].value == "") 
      {
        return false;
      }
    }
    return true;
  }