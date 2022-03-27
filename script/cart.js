let cartarr=JSON.parse(localStorage.getItem("cartkey")) || [];
showcart();
showbill();

  function showcart() {
      document.querySelector("#cartlog").innerHTML="";

      cartarr.map(function(el,ind) {
        let card=document.createElement("div");
        let img1=document.createElement("img");
        img1.src=el.image_url;
        let name1=document.createElement("p");
        name1.innerText=el.name;
        let price1=document.createElement("p");
        price1.innerText=el.price;
        let strprice=document.createElement("p");
        strprice.innerText=el.strikedoffprice;
        strprice.style.textDecoration="line-through";
        let btn=document.createElement("button");
        btn.innerText="Remove from Cart";
        btn.onclick=function() {
          removefromcart(el,ind);
        }
        card.append(img1,name1,price1,strprice,btn);
        document.querySelector("#cartlog").append(card);

      })
  
  }

  function removefromcart(el,ind) {
    cartarr.splice(ind,1);
    localStorage.setItem("cartkey",JSON.stringify(cartarr));
    showcart();
    showbill();
  }

  function addpromo() {
    let promo=document.querySelector("#promo").value;
    let discount=Number(promo[promo.length-2]+promo[promo.length-1]);
    showbill(discount);

  }

  function showbill(discount) {
    let sum=0;
    if(cartarr!=[]) {
    for(let i=0;i<cartarr.length;i++) {
        sum+=Number(cartarr[i].price);
    }
  }
  if(discount){
    sum=sum-sum*discount/100;
  }
    
    document.querySelector("#count").innerText="Items in Cart:"+cartarr.length;
    document.querySelector("#total").innerText="Total Price:"+sum;


  }
  