let cart = [];


function openWin(id) {
const win = document.getElementById(id);
win.style.display = 'block';
dragElement(win);
updateCartDisplay();
}
function closeWin(id) { document.getElementById(id).style.display = 'none'; }
function toggleStartMenu() { const menu = document.getElementById('start-menu'); menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'; }


function dragElement(elmnt) {
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
const header = elmnt.querySelector('.window-title');
if(header){ header.onmousedown = dragMouseDown; }
function dragMouseDown(e){ e.preventDefault(); pos3 = e.clientX; pos4 = e.clientY; document.onmouseup = closeDragElement; document.onmousemove = elementDrag; }
function elementDrag(e){ e.preventDefault(); pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY; pos3 = e.clientX; pos4 = e.clientY; elmnt.style.top = (elmnt.offsetTop - pos2) + 'px'; elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px'; }
function closeDragElement(){ document.onmouseup = null; document.onmousemove = null; }
}


function addToCart(product) {
cart.push(product);
showAlert(product + ' added to cart!');
updateCartDisplay();
}


function updateCartDisplay() {
const cartDiv = document.getElementById('cartContent');
if(cart.length === 0){ cartDiv.innerHTML = 'Cart is empty.'; return; }
cartDiv.innerHTML = cart.map((p,i) => `<div>${i+1}. ${p}</div>`).join('') +
'<button class="checkout-btn" onclick="checkout()">Checkout</button>';
}


function checkout() {
showAlert('Thank you for your purchase!\nItems: ' + cart.join(', '));
cart = [];
updateCartDisplay();
}


function showAlert(message) {
const alertBox = document.getElementById('alertBox');
alertBox.innerHTML = '<div>'+message+'</div><button onclick="closeAlert()">OK</button>';
alertBox.style.display = 'block';
}
function closeAlert(){ document.getElementById('alertBox').style.display = 'none'; }
