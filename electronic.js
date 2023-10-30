      function displayJuiceDetails(juiceType) {
         document.getElementById("juiceType").innerHTML = juiceType;
         document.getElementById("juiceTypePurchase").innerHTML = juiceType;
         document.getElementById("juiceTypePayment").innerHTML = juiceType;
         document.getElementById("juiceDetailsContainer").style.display = "block";
      }

      function displayPurchase() {
         document.getElementById("purchaseContainer").style.display = "block";
         document.getElementById("juiceDetailsContainer").style.display = "none";
      }

      function displayPayment() {
         var customerName = document.getElementById("customerName").value;
         var juiceType = document.getElementById("juiceTypePurchase").innerHTML;
         var Firstclass = document.getElementById("Firstclass").checked ? "Firstclass" : "Secondclass";
         var price = Firstclass === "Firstclass" ? "Rs-200\-" : "Rs-170\-";
         document.getElementById("customerDetails").innerHTML = customerName + " (" + Firstclass + ")";
         document.getElementById("price").innerHTML = price;
         document.getElementById("paymentContainer").style.display = "block";
         document.getElementById("purchaseContainer").style.display = "none";
      }

      function returnHome() {
         document.getElementById("paymentContainer").style.display = "none";
         document.getElementById("homeContainer").style.display = "block";
      }
   