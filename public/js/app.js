
var count = 0;
var ttl_amt = 0;

window.onload = function () {
    let cart = document.getElementsByClassName('cart-main');
    let ttl = document.getElementsByClassName('total-tag');
    let inr = document.getElementsByClassName('fa-inr');
    let user = document.getElementsByClassName('login');
    cart[0].style.display = 'none';
    user[0].style.display = 'none';
    ttl[0].style.display = 'none';
    inr[0].style.display = 'none';
}

function cartShow() {
    let cart = document.getElementsByClassName('cart-main');
    let user = document.getElementsByClassName('login');
    if(cart[0].style.display === 'none') {
        cart[0].style.display = "block";
        user[0].style.display = "none";
    } else {
        cart[0].style.display = 'none';
    }
}

function loginShow() {
    let cart = document.getElementsByClassName('cart-main');
    let user = document.getElementsByClassName('login');
    if(user[0].style.display === 'none') {
        user[0].style.display = "block";
        cart[0].style.display = 'none';
    } else {
        user[0].style.display = 'none';
    }
}

function additem(id) {

    let cart_amt = document.getElementsByClassName('total-val');
    let ttl = document.getElementsByClassName('total-tag');
    let inr = document.getElementsByClassName('fa-inr');
    let c = document.getElementsByClassName('cart-count-val');
    let cart_item = document.querySelectorAll('.price');
    let cart_desc = document.querySelectorAll('.cart-desc');
    let amt = [];
    let desc = [];

    cart_item.forEach((element) => {
        amt.push(element.textContent);
    });

    cart_desc.forEach((element) => {
        desc.push(element.textContent);
    });

    let cart = document.getElementsByClassName('cart-main');
    let img = document.createElement('img');
    
    
    let div = document.createElement('div');
    let span = document.createElement('span');
    let a = document.createElement('a');
    let inp = document.createElement('input');
    let a1 = document.createElement('a');
    let span1 = document.createElement('span');

    function cart_store() {
        let dat = {"item" : div, "image" : img};
        let st = JSON.stringify(dat);
        dat = localStorage.setItem("cart", dat);
    }

    div.className+='cart-items-added';
    span.className+='cart-price';
    a.className+='cart-plus-btn';
    inp.className+='cart-quantity';
    a1.className+='cart-minus-btn';
    span1.className+='cart-desc';
    inp.value = 1;

    span.innerHTML = amt[id];
    a.innerHTML = '+';
    a1.innerHTML = '-';
    span1.innerHTML = desc[id];

    span.appendChild(a);
    span.append(inp);
    span.append(a1);

    div.appendChild(span);
    div.append(span1);

    img.className+='set-image';
    img.setAttribute('src','../public/Background.jpg');

    cart_store();

    count++;
    c[0].innerHTML = count;
    cart_amt[0].style.display = 'block';
    ttl[0].style.display = 'block';
    inr[0].style.display = 'block';

    a.onclick = function () {
        let val = parseInt(document.getElementsByClassName('cart-quantity')[0].value);
        val++;
        inp.value = val;
        console.log(val);
        c[0].innerHTML = parseInt(val);
    }

    a1.onclick = function () {
        let val = parseInt(document.getElementsByClassName('cart-quantity')[0].value);
        let rem = document.getElementsByClassName('cart-main');
        val--;
        inp.value = val;
        c[0].innerHTML = parseInt(val);
        console.log(val);
        if(parseInt(val) <= 0) {
            val = 0;
            inp.value = val;
            c[0].innerHTML = parseInt(val);
        }

        if(val === 0) {
            rem[0].removeChild(img);
            rem[0].removeChild(div);
            cart_amt[0].innerHTML = " ";
            cart_amt[0].style.display = 'none';
            ttl[0].style.display = 'none';
            inr[0].style.display = 'none';
        }
    }

    switch(parseInt(id)) {
        case 0: cart[0].appendChild(img);
                cart[0].append(div);
                ttl_amt = parseInt(ttl_amt) + parseInt(amt[id]);
                cart_amt[0].innerHTML = ttl_amt;
        break;
        case 1: cart[0].appendChild(img);
                cart[0].append(div);
                ttl_amt = parseInt(ttl_amt) + parseInt(amt[id]);
                cart_amt[0].innerHTML = ttl_amt;
        break;
        case 2: cart[0].appendChild(img);
                cart[0].append(div);
                ttl_amt = parseInt(ttl_amt) + parseInt(amt[id]);
                cart_amt[0].innerHTML = ttl_amt;
        break;
        case 3: cart[0].appendChild(img);
                cart[0].append(div);
                ttl_amt = parseInt(ttl_amt) + parseInt(amt[id]);
                cart_amt[0].innerHTML = ttl_amt;
        break;
        case 4: cart[0].appendChild(img);
                cart[0].append(div);
                ttl_amt = parseInt(ttl_amt) + parseInt(amt[id]);
                cart_amt[0].innerHTML = ttl_amt;
        break;
        case 5: cart[0].appendChild(img);
                cart[0].append(div);
                ttl_amt = parseInt(ttl_amt) + parseInt(amt[id]);
                cart_amt[0].innerHTML = ttl_amt;
        break;
        case 6: cart[0].appendChild(img);
                cart[0].append(div);
                ttl_amt = parseInt(ttl_amt) + parseInt(amt[id]);
                cart_amt[0].innerHTML = ttl_amt;
        break;
        case 7: cart[0].appendChild(img);
                cart[0].append(div);
                ttl_amt = parseInt(ttl_amt) + parseInt(amt[id]);
                cart_amt[0].innerHTML = ttl_amt;
        break;
    }
}