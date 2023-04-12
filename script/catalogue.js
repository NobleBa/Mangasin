function plus(stock_actuel, quanti_actuel) {
  if (quanti_actuel.value < parseInt(stock_actuel.textContent, 10)) {
    quanti_actuel.value++;;
  }
}

function moins(quanti_actuel) {
  if (quanti_actuel.value > 0) {
    quanti_actuel.value--;
  }
}

function panier(stock_actuel, quanti_actuel) {
  stock = parseInt(stock_actuel.textContent, 10);
  if ((stock >= quanti_actuel.value) && (quanti_actuel.value > 0)) {
    stock_actuel.textContent = stock - quanti_actuel.value;
    quanti_actuel.value = 0;

  }
}

function AffichageStock() {
  stockAff = document.getElementsByClassName("stock");
  var i;
  for (i = 0; i < stockAff.length; i++) {
    if (stockAff[i].style.visibility == 'hidden') {
      stockAff[i].style.visibility = 'visible';
    }
    else {
      stockAff[i].style.visibility = 'hidden';
    }
  }
}


