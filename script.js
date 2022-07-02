var car2_det, pict, temp1_var, brand_name, year, price, engine, milage, temp2_var, gear;

// Describe this function...
function get_pic() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  temp1_var = pict.shift();
  temp2_var = pict[0];
  let element_car1_pic = document.getElementById('car1_pic');
  element_car1_pic.setAttribute("src", temp1_var);
  let element_car2_pic = document.getElementById('car2_pic');
  element_car2_pic.setAttribute("src", temp2_var);
}

// Describe this function...
function get_year() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  temp1_var = year.shift();
  temp2_var = year[0];
  let element_car1_year = document.getElementById('car1_year');
  element_car1_year.innerText = temp1_var;
  let element_car2_year = document.getElementById('car2_year');
  element_car2_year.innerText = temp2_var;
}

// Describe this function...
function get_price() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  temp1_var = price.shift();
  temp2_var = price[0];
  let element_car1_price = document.getElementById('car1_price');
  element_car1_price.innerText = temp1_var;
  let element_car2_price = document.getElementById('car2_price');
  element_car2_price.innerText = temp2_var;
}

// Describe this function...
function get_milage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  temp1_var = milage.shift();
  temp2_var = milage[0];
  let element_car1_milage = document.getElementById('car1_milage');
  element_car1_milage.innerText = temp1_var;
  let element_car2_milage = document.getElementById('car2_milage');
  element_car2_milage.innerText = temp2_var;
}

// Describe this function...
function get_gear() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  temp1_var = gear.shift();
  temp2_var = gear[0];
  let element_car1_gear = document.getElementById('car1_gear');
  element_car1_gear.innerText = temp1_var;
  let element_car2_gear = document.getElementById('car2_gear');
  element_car2_gear.innerText = temp2_var;
}



document.getElementById('compare_btn').addEventListener('click', (event) => {
  get_pic();
  get_year();
  get_price();
  get_milage();
  get_gear();

});
pict = ['https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200', 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80', '', ''];
year = ['2019', '2018', '', '2010'];
price = ['100000', '120000', '', ''];
milage = ['5000', '4000', '', ''];
gear = ['Auto', 'Manual', '', ''];

car2_det = [pict, brand_name, year, price, engine, milage, null, null];
