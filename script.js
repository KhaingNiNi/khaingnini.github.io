let reborn_sound = document.getElementById("reborn");
const thanos_snap = document.getElementById("thanos_snap");
const press_fadein = document.getElementById("press_fadein");
const press_add = document.getElementById("press_add");
var input = document.getElementById("inputitems");
var button = document.getElementById("btn_add");
var ol = document.getElementsByClassName("ol")[0];
var clear_button = document.getElementById("clear_wave");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body_bg = document.getElementById("main");
var text = document.querySelectorAll(".h1color")[0];
var text2 = document.querySelectorAll(".h1color")[1];
var text3 = document.querySelectorAll(".h1color")[2];
var text4 = document.querySelectorAll(".h1color")[3];
var text5 = document.querySelectorAll(".h1color")[4];
var text6 = document.querySelectorAll(".h1color")[5];
var text7 = document.querySelectorAll(".h1color")[6];
var text8 = document.querySelectorAll(".h1color")[7];
var text9 = document.querySelectorAll(".h1color")[8];
var text10 = document.querySelectorAll(".h1color")[9];
var text11 = document.querySelectorAll(".h1color")[10];
var text12 = document.querySelectorAll(".h1color")[11];
var text13 = document.querySelectorAll(".h1color")[12];
var text14 = document.querySelectorAll(".h1color")[13];
var text15 = document.querySelectorAll(".h1color")[14];
var text16 = document.querySelectorAll(".h1color")[15];
var text17 = document.querySelectorAll(".h1color")[16];
var text18 = document.querySelectorAll(".h1color")[17];
var choose = document.querySelector("select");
var colory = document.querySelector(".bgcolory");
var colorg = document.querySelector(".bgcolorg");
var colorr = document.querySelector(".bgcolorr");
var colorb = document.querySelector(".bgcolorb");
var colorw = document.querySelector(".bgcolorw");
var h4 = document.querySelector("h4");
var theme_row = document.querySelector(".customize_theme");
var kno22 = document.querySelector(".kno2");
var kno11 = document.querySelector(".kno1");
var kno33 = document.querySelector(".kno3");
var kno44 = document.querySelector(".kno4");
var kakaka = document.querySelector(".KamisamaKiss");
var kami_btn = document.querySelector(".kami_btn");
var submitbtn = document.getElementById("buybtn");
var movieslist = document.querySelector(".movies");
var zoom1 = document.getElementById("zoom11");
var welcome = document.querySelector(".welcome");
const part1 = document.querySelector(".part1");
const part2 = document.querySelector(".part2");
const part3 = document.querySelector(".part3");
const part41 = document.querySelectorAll(".part4")[0];
const part42 = document.querySelectorAll(".part4")[2];
const part43 = document.querySelectorAll(".part4")[3];
const part44 = document.querySelectorAll(".part4")[4];
const part45 = document.querySelectorAll(".part4")[5];
const part46 = document.querySelectorAll(".part4")[6];
const part47 = document.querySelectorAll(".part4")[7];
const part48 = document.querySelectorAll(".part4")[8];
const part49 = document.querySelectorAll(".part4")[9];
const part410 = document.querySelectorAll(".part4")[10];
const part411 = document.querySelectorAll(".part4")[11];
const part412 = document.querySelectorAll(".part4")[12];
const part413 = document.querySelectorAll(".part4")[1];
const part5 = document.querySelector(".part5");



welcome.style.background = "-webkit-linear-gradient(left, gold, red )";
welcome.style['-webkit-background-clip'] = "text";
welcome.style['-webkit-text-fill-color'] = "transparent";
let yname = prompt("What is your name?");
if(yname){
welcome.innerHTML = `Welcome, ${yname}!`;
}
else{
	welcome.innerHTML = "Welcome to Movie shop!"
}
const back_body = () => {
		press_fadein.play();
		input.style.height = "38px";
		input.style.fontFamily = "'Advent Pro', sans-serif";
		input.value = "";
		input.style.fontSize  = "20px";
		alert("Awwww, You saved this website.❤️");
		reborn_sound.play();
		part1.className = "animated fadeIn delay-1s";
		part2.className = "animated fadeIn delay-2s";
		part3.className = "animated fadeIn delay-3s";
		part41.className = "animated fadeIn delay-4s";
		part410.className = "animated fadeIn delay-4s";
		part411.className = "animated fadeIn delay-4s";
		part412.className = "animated fadeIn delay-4s";
		part413.className = "animated fadeIn delay-4s";
		part42.className = "animated fadeIn delay-4s";
		part43.className = "animated fadeIn delay-4s";
		part44.className = "animated fadeIn delay-4s";
		part45.className = "animated fadeIn delay-4s";
		part46.className = "animated fadeIn delay-4s";
		part47.className = "animated fadeIn delay-4s";
		part48.className = "animated fadeIn delay-4s";
		part49.className = "animated fadeIn delay-4s";
		part5.className = "animated fadeIn delay-5s";

}




function zoom1btn(){
	zoom1.style.display = "none";
}

function progress(){
	if(movieslist.style.display === "block"){
	movieslist.style.display = "none";
	submitbtn.style.display = "block";
}
	else{
		movieslist.style.display = "none";
		submitbtn.style.display = "block";
	}
}

kno22.addEventListener("click", function(){
	kno22.style.width = "310px";
	kno22.style.height = "430px";
	kno11.style.width = "150px";
	kno11.style.height = "150px";
	kno33.style.width = "150px";
	kno33.style.height = "150px";
	kno44.style.width = "150px";
	kno44.style.height = "150px";
});
kno11.addEventListener("click", function(){
	kno11.style.width = "360px";
	kno11.style.height = "240px";
	kno22.style.width = "150px";
	kno22.style.height = "150px";
	kno33.style.width = "150px";
	kno33.style.height = "150px";
	kno44.style.width = "150px";
	kno44.style.height = "150px";
});
kno33.addEventListener("click", function(){
	kno33.style.width = "360px";
	kno33.style.height = "240px";
	kno22.style.width = "150px";
	kno22.style.height = "150px";
	kno11.style.width = "150px";
	kno11.style.height = "150px";
	kno44.style.width = "150px";
	kno44.style.height = "150px";
});
kno44.addEventListener("click", function(){
	kno44.style.width = "360px";
	kno44.style.height = "240px";
	kno22.style.width = "150px";
	kno22.style.height = "150px";
	kno11.style.width = "150px";
	kno11.style.height = "150px";
	kno33.style.width = "150px";
	kno33.style.height = "150px";
});
function custom(){
	if(theme_row.style.display === "none"){
		theme_row.style.display = "block";
	}
	else{
		theme_row.style.display = "none";
	}
}

clear_button.addEventListener("click", function(){
	input.value = "";
});
function customChangew(){
	body_bg.style.background = colorw.value;
	h4.textContent = "Current background color is "+body_bg.style.background+".";
	text.style.color = "black";
	text2.style.color = "black";
	text3.style.color = "black";
	text4.style.color = "black";
	text5.style.color = "black";
	text6.style.color = "black";
	text7.style.color = "black";
	text8.style.color = "black";
	text9.style.color = "black";
	text10.style.color = "black";
	text11.style.color = "black";
	text12.style.color = "black";
	text13.style.color = "black";
	text14.style.color = "black";
	text15.style.color = "black";
	text16.style.color = "black";
	text17.style.color = "black";
}
function customChangey(){
	body_bg.style.background = colory.value;
	h4.textContent = "Current background color is "+body_bg.style.background+".";
	text.style.color = "red";
	text2.style.color = "red";
	text3.style.color = "red";
	text4.style.color = "red";
	text5.style.color = "red";
	text6.style.color = "red";
	text7.style.color = "red";
	text8.style.color = "red";
	text9.style.color = "red";
	text10.style.color = "red";
	text11.style.color = "red";
	text12.style.color = "red";
	text13.style.color = "red";
	text14.style.color = "red";
	text15.style.color = "red";
	text16.style.color = "red";
	text17.style.color = "red";
}
function customChangeg(){
	body_bg.style.background = colorg.value;
	h4.textContent = "Current background color is "+body_bg.style.background+".";
	text.style.color = "purple";
	text2.style.color = "purple";
	text3.style.color = "purple";
	text4.style.color = "purple";
	text5.style.color = "purple";
	text6.style.color = "purple";
	text7.style.color = "purple";
	text8.style.color = "purple";
	text9.style.color = "purple";
	text10.style.color = "purple";
	text11.style.color = "purple";
	text12.style.color = "purple";
	text13.style.color = "purple";
	text14.style.color = "purple";
	text15.style.color = "purple";
	text16.style.color = "purple";
	text17.style.color = "purple";
}
function customChanger(){
	body_bg.style.background = colorr.value;
	h4.textContent = "Current background color is "+body_bg.style.background+".";
	text.style.color = "blue";
	text2.style.color = "blue";
	text3.style.color = "blue";
	text4.style.color = "blue";
	text5.style.color = "blue";
	text6.style.color = "blue";
	text7.style.color = "blue";
	text8.style.color = "blue";
	text9.style.color = "blue";
	text10.style.color = "blue";
	text11.style.color = "blue";
	text12.style.color = "blue";
	text13.style.color = "blue";
	text14.style.color = "blue";
	text15.style.color = "blue";
	text16.style.color = "blue";
	text17.style.color = "blue";
}
function customChangeb(){
	body_bg.style.background = colorb.value;
	h4.textContent = "Current background color is "+body_bg.style.background+".";
	text.style.color = "white";
	text2.style.color = "white";
	text3.style.color = "white";
	text4.style.color = "white";
	text5.style.color = "white";
	text6.style.color = "white";
	text7.style.color = "white";
	text8.style.color = "white";
	text9.style.color = "white";
	text10.style.color = "white";
	text11.style.color = "white";
	text12.style.color = "white";
	text13.style.color = "white";
	text14.style.color = "white";
	text15.style.color = "white";
	text16.style.color = "white";
	text17.style.color = "white";
}
function changeColor(){
	text.style.color = choose.value;
	text2.style.color = choose.value;
	text3.style.color = choose.value;
	text4.style.color = choose.value;
	text5.style.color = choose.value;
	text6.style.color = choose.value;
	text7.style.color = choose.value;
	text8.style.color = choose.value;
	text9.style.color = choose.value;
	text10.style.color = choose.value;
	text11.style.color = choose.value;
	text12.style.color = choose.value;
	text13.style.color = choose.value;
	text14.style.color = choose.value;
	text15.style.color = choose.value;
	text16.style.color = choose.value;
	text17.style.color = choose.value;

}
var tail = document.querySelector(".fairytail");
var diary = document.querySelector(".vdiary");
var fairytail = document.querySelector(".ftEpisode");
function Fairy_Tail(){
	if (fairytail.style.display === "none"){
	tail.innerText = "Fairy Tail ▼";
	fairytail.style.display = "block";
	fairytail.style.opacity = "1";
}
	else{
		fairytail.style.display = "none";
	}
}
var vampirediary = document.querySelector(".vdEpisode");
function Vampire_Diary(){
	if (vampirediary.style.display === "none"){
	diary.innerText = "Vampire Diary ▼";
	vampirediary.style.display = "block";
	vampirediary.style.opacity = "1";
}
	else{
		vampirediary.style.display = "none";
	}
}
function setGradient(){
	body_bg.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
	h4.textContent = body_bg.style.background;
}
function inputlength(){
	return input.value.length;
}
var item = [
	{
		item_name : "KhaingNiNiNaingHtwe",
		price : "MyintKoKoOo's wife"
	},
	{
		code : "clear()"
	},
	{
		enter : "login()"
	},
	{
		code : "kamisamakiss()"
	},
	{
		code : "cute()",
		pressD : "thanos"
	}
];
const {pressD, code} = item[4];
function click_function(){
	if(inputlength()>0 && input.value !== item[0].item_name && input.value !== item[1].code && input.value !== item[2].enter && input.value !== item[3].code && input.value !== code && input.value !== pressD){
	press_add.play();
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.setAttribute("class", "li_part animated bounceIn");
	ol.appendChild(li);
	input.value = "";
	// input.focus();
	// input.select();
}
	if(inputlength()>0 && input.value === item[0].item_name && input.value !== item[1].code){
	press_add.play();
	input.value = "";
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(item[0].item_name+" : "+item[0].price));
	li.setAttribute("class", "li_part");
	ol.appendChild(li);

	}
	if(inputlength()>0 && input.value === item[1].code){
	press_add.play();
	input.value = "";
	ol.innerHTML = "";
	}
	if(input.value === item[2].enter){
		press_add.play();
		input.value = "";
		call();
	}
	if(input.value === item[3].code){
			kakaka.style.display = "block";
			kami_btn.style.display = "block";
			input.value = "";
	}
	if(input.value === code){
		press_add.play();
		zoom1.style.display = "block";
		input.value = "";
	}
	if(input.value === pressD){
		press_add.play();
		thanos_snap.play();
		input.style.height = "60px";
		input.style.fontFamily = "'Gloria Hallelujah', cursive ";
		input.style.fontSize  = "50px";
		input.value = "Snap!!!✨✨✨✨";
		part1.className = "animated fadeOut delay-1s";
		part2.className = "animated fadeOut delay-2s";
		part3.className = "animated fadeOut delay-3s";
		part41.className = "animated fadeOut delay-4s";
		part410.className = "animated fadeOut delay-4s";
		part411.className = "animated fadeOut delay-4s";
		part412.className = "animated fadeOut delay-4s";
		part413.className = "animated fadeOut delay-4s";
		part42.className = "animated fadeOut delay-4s";
		part43.className = "animated fadeOut delay-4s";
		part44.className = "animated fadeOut delay-4s";
		part45.className = "animated fadeOut delay-4s";
		part46.className = "animated fadeOut delay-4s";
		part47.className = "animated fadeOut delay-4s";
		part48.className = "animated fadeOut delay-4s";
		part49.className = "animated fadeOut delay-4s";
		part5.className = "animated fadeOut delay-5s";
	}
	else{
		press_add.play();
	}
}

function kami_kami(){
	if(kami_btn.style.display === "block"){
		kami_btn.style.display = "none";
		kakaka.style.display = "none";
		kno11.style.width = "150px";
		kno11.style.height = "150px";
		kno22.style.width = "150px";
		kno22.style.height = "150px";
		kno33.style.width = "150px";
		kno33.style.height = "150px";
		kno44.style.width = "150px";
		kno44.style.height = "150px";
		input.value = "";
	}
}
function keypress_function(event){
	if(inputlength()>0 && event.which === 13 && input.value !== item[0].item_name && input.value !== item[1].code && input.value !== item[2].enter && input.value !== item[3].code && input.value !== code && input.value !== pressD){
	var li = document.createElement("li");
	li.setAttribute("class", "li_part animated bounceIn");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	input.value = "";
	button.focus();
	button.select();
}
	if(inputlength()>0 && input.value === item[0].item_name && event.which === 13 && input.value !== item[1].code){
	var li = document.createElement("li");
	li.setAttribute("class", "li_part");
	li.appendChild(document.createTextNode(item[0].item_name+" : "+item[0].price));
	ol.appendChild(li);
	input.value = "";
	}
	if(inputlength()>0 && input.value === item[1].code && event.which === 13){
	input.value = "";
	ol.innerHTML = "";
	}
	if(input.value === item[2].enter && event.which === 13){
		input.value = "";
		call();
	}
	if(input.value === item[3].code && event.which === 13){
			kakaka.style.display = "block";
			kami_btn.style.display = "block";
			input.value = "";
	}
	if(input.value === code && event.which === 13){
		zoom1.style.display = "block";
		input.value = "";
	}
	if(input.value === pressD && event.which === 13){
		thanos_snap.play();
		input.style.height = "60px";
		input.style.fontFamily = "'Gloria Hallelujah', cursive ";
		input.style.fontSize  = "50px";
		input.value = "Snap!!!✨✨✨✨";
		part1.className = "animated fadeOut delay-1s";
		part2.className = "animated fadeOut delay-2s";
		part3.className = "animated fadeOut delay-3s";
		part41.className = "animated fadeOut delay-4s";
		part410.className = "animated fadeOut delay-4s";
		part411.className = "animated fadeOut delay-4s";
		part412.className = "animated fadeOut delay-4s";
		part413.className = "animated fadeOut delay-4s";
		part42.className = "animated fadeOut delay-4s";
		part43.className = "animated fadeOut delay-4s";
		part44.className = "animated fadeOut delay-4s";
		part45.className = "animated fadeOut delay-4s";
		part46.className = "animated fadeOut delay-4s";
		part47.className = "animated fadeOut delay-4s";
		part48.className = "animated fadeOut delay-4s";
		part49.className = "animated fadeOut delay-4s";
		part5.className = "animated fadeOut delay-5s";
		button.focus();
		// button.select();
	}
}

button.addEventListener("click", click_function);
input.addEventListener("keypress", keypress_function);

var keys = [
	{
		password : "288160"
	}
];
var timeline = {
	no1 : "I love you Khaing Ni Ni Naing Htwe.",
	no2 : "You are my world.",
	no3 : "Marry me pleaseeee.",
	no4 : "You are the most beautiful girl in the world.",
	no5 : "I ❤️ U ."
}
function login(password){
	if(password === keys[0].password){
		alert(timeline.no1+"\n"+timeline.no2+"\n"+timeline.no3+"\n"+timeline.no4+"\n"+timeline.no5);
	}
	else if(password.length<1){
		alert("please type something!");
	}
	else{
		alert("Sorry! wrong password");
	}
}

function call(){
var t = prompt("Type the password!");
login(t);
}
// clear_button.addEventListener("click", function(){
// 	return ol.innerHTML = "";
// });

