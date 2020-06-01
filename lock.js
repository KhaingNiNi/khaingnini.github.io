const selectname = document.getElementById("selectname");
const rangenum = document.getElementById("rangenum");
const button = document.getElementById("mainbtn");
const QnA = document.getElementById("main");
const qage = document.getElementById("qage");
const about = document.getElementById("about");
const song = document.getElementById("515");
const fart = document.getElementById("negrefuse");
const rangeplay = document.getElementById("rangeplay");
const firstnum = document.getElementById("firstnum");
const secondnum = document.getElementById("secondnum");
const thirdnum = document.getElementById("thirdnum");
const fourthnum = document.getElementById("fourthnum");
const agebtn = document.getElementById("agebtn");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const forerror = document.getElementById("forerror");
const clickadd = document.getElementById("clickadd");
const mastergyi = document.getElementById("mast");
const reseteach = document.getElementById("reseteach");
const reset1 = document.getElementById("reset1");
const qcolor = document.getElementById("qcolor");
const headinglabel = document.getElementById("headinglabel");
const locklabel = document.getElementById("locklabel");
const waitlabel = document.getElementById("waitlabel");

function onloadwaits(){
 if(localStorage.clickcount === "5"){
                locklabel.style.transition = "1s";
                locklabel.style.visibility = "visible";
                locklabel.style.opacity = "1";
                qcolor.style.visibility = "hidden";
                qcolor.style.transition = "1s";
                qcolor.style.opacity = "0";
                locklabel.style.zIndex = "3";
                return setTimeout(function(){
                	countergyi = 0;
                locklabel.style.visibility = "hidden";
                locklabel.style.opacity = "0";
                	qcolor.style.visibility = "visible";
                	qcolor.style.opacity = "1";
                	qage.style.zIndex = "3";
                },10000);
                }

                if(localStorage.clickcount === "10"){
                locklabel.style.transition = "1s";
                locklabel.style.visibility = "visible";
                waitlabel.innerHTML = "1 minute";
                locklabel.style.opacity = "1";
                qcolor.style.visibility = "hidden";
                qcolor.style.transition = "1s";
                qcolor.style.opacity = "0";
                locklabel.style.zIndex = "3";
                return setTimeout(function(){
                	countergyi = 0;
                locklabel.style.visibility = "hidden";
                locklabel.style.opacity = "0";
                	qcolor.style.visibility = "visible";
                	qcolor.style.opacity = "1";
                	qage.style.zIndex = "3";
                },60000);
                }

                if(localStorage.clickcount === "11"){
                locklabel.style.transition = "1s";
                locklabel.style.visibility = "visible";
                waitlabel.innerHTML = "5 minutes";
                locklabel.style.opacity = "1";
                qcolor.style.visibility = "hidden";
                qcolor.style.transition = "1s";
                qcolor.style.opacity = "0";
                locklabel.style.zIndex = "3";
                return setTimeout(function(){
                	countergyi = 0;
                locklabel.style.visibility = "hidden";
                locklabel.style.opacity = "0";
                	qcolor.style.visibility = "visible";
                	qcolor.style.opacity = "1";
                	qage.style.zIndex = "3";
                },300000);
                }
                if(localStorage.clickcount === "12"){
                locklabel.style.transition = "1s";
                locklabel.style.visibility = "visible";
                waitlabel.innerHTML = "1 hour";
                locklabel.style.opacity = "1";
                qcolor.style.visibility = "hidden";
                qcolor.style.transition = "1s";
                qcolor.style.opacity = "0";
                locklabel.style.zIndex = "3";
                return setTimeout(function(){
                	countergyi = 0;
                locklabel.style.visibility = "hidden";
                locklabel.style.opacity = "0";
                	qcolor.style.visibility = "visible";
                	qcolor.style.opacity = "1";
                	qage.style.zIndex = "3";
                },3600000);
                }
        }


    const checkValid = () =>{
	if(firstnum.value === ""  && secondnum.value === "" && thirdnum.value === "" && fourthnum.value === ""){
		headinglabel.style.color = "red";
		headinglabel.textContent = "TYPE 4 PIN!";
		setTimeout(function(){
			headinglabel.style.color = "black";
			headinglabel.textContent = "ENTER PIN";
		},2000);
	}
	if(firstnum.value !== ""  && secondnum.value === "" && thirdnum.value === "" && fourthnum.value === ""){
		headinglabel.style.color = "red";
		headinglabel.textContent = "TYPE 4 PIN!";
		setTimeout(function(){
			headinglabel.style.color = "black";
			headinglabel.textContent = "ENTER PIN";
		},800);
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value === "" && fourthnum.value === ""){
		headinglabel.style.color = "red";
		headinglabel.textContent = "TYPE 4 PIN!";
		setTimeout(function(){
			headinglabel.style.color = "black";
			headinglabel.textContent = "ENTER PIN";
		},800);
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value !== "" && fourthnum.value === ""){
		headinglabel.style.color = "red";
		headinglabel.textContent = "TYPE 4 PIN!";
		setTimeout(function(){
			headinglabel.style.color = "black";
			headinglabel.textContent = "ENTER PIN";
		},800);
	}
	if(firstnum.value !== ""  && secondnum.value !== "" && thirdnum.value !== "" && fourthnum.value !== ""){
		return QnAage();
	}
}
const shineach = () =>{
	reseteach.style.transition = "1s";
	reseteach.style.width = "50px";
	reseteach.style.height = "50px";
	setTimeout(function(){
	reseteach.style.width = "70px";
	reseteach.style.height = "70px";
	},150);
	clickadd.play();
	if(fourthnum.value !== ""){
		fourthnum.style.fontSize = "0px";
		fourthnum.style.borderRadius = "15px";
		fourthnum.style.border = "3px solid gold";
		return fourthnum.value = "";
	}
	if(fourthnum.value === "" && thirdnum.value !== ""){
		thirdnum.style.fontSize = "0px";
		thirdnum.style.borderRadius = "15px";
		thirdnum.style.border = "3px solid gold";
		return thirdnum.value = "";
	}
	if(fourthnum.value === "" && thirdnum.value === "" && secondnum.value !== ""){
		secondnum.style.fontSize = "0px";
		secondnum.style.borderRadius = "15px";
		secondnum.style.border = "3px solid gold";
		return secondnum.value = "";
	}
	if(fourthnum.value === "" && thirdnum.value === "" && secondnum.value === "" && firstnum.value !== ""){
		firstnum.style.fontSize = "0px";
		firstnum.style.borderRadius = "15px";
		firstnum.style.border = "3px solid gold";
		return firstnum.value = "";
	}
}
reseteach.addEventListener("click",shineach);

const clickone = () =>{
	clickadd.play();
	one.style.transition = "1s";
	one.style.width = "50px";
	one.style.height = "50px";
	setTimeout(function(){
	one.style.width = "70px";
	one.style.height = "70px";
	},150);
	if(firstnum.value === ""){
		firstnum.style.fontSize = "23px";
		firstnum.style.borderRadius = "30px";
		firstnum.style.border = "3px solid blue";
		return firstnum.value = "1";
	}
	if(firstnum.value !== "" && secondnum.value === ""){
		secondnum.style.fontSize = "23px";
		secondnum.style.borderRadius = "30px";
		secondnum.style.border = "3px solid blue";
		return secondnum.value = "1";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value === ""){
		thirdnum.style.fontSize = "23px";
		thirdnum.style.borderRadius = "30px";
		thirdnum.style.border = "3px solid blue";
		return thirdnum.value = "1";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value !== "" && fourthnum.value === ""){
		fourthnum.style.fontSize = "23px";
		fourthnum.style.borderRadius = "30px";
		fourthnum.style.border = "3px solid blue";
		return fourthnum.value = "1";
	}
}
one.addEventListener("click",clickone);

const clicktwo = () =>{
	clickadd.play();
	two.style.transition = "1s";
	two.style.width = "50px";
	two.style.height = "50px";
	setTimeout(function(){
	two.style.width = "70px";
	two.style.height = "70px";
	},150);
	if(firstnum.value === ""){
		firstnum.style.fontSize = "23px";
		firstnum.style.borderRadius = "30px";
		firstnum.style.border = "3px solid blue";
		return firstnum.value = "2";
	}
	if(firstnum.value !== "" && secondnum.value === ""){
		secondnum.style.fontSize = "23px";
		secondnum.style.borderRadius = "30px";
		secondnum.style.border = "3px solid blue";
		return secondnum.value = "2";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value === ""){
		thirdnum.style.fontSize = "23px";
		thirdnum.style.borderRadius = "30px";
		thirdnum.style.border = "3px solid blue";
		return thirdnum.value = "2";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value !== "" && fourthnum.value === ""){
		fourthnum.style.fontSize = "23px";
		fourthnum.style.borderRadius = "30px";
		fourthnum.style.border = "3px solid blue";
		return fourthnum.value = "2";
	}
}
two.addEventListener("click",clicktwo);

const clickthree = () =>{
	clickadd.play();
	three.style.transition = "1s";
	three.style.width = "50px";
	three.style.height = "50px";
	setTimeout(function(){
	three.style.width = "70px";
	three.style.height = "70px";
	},150);
	if(firstnum.value === ""){
		firstnum.style.fontSize = "23px";
		firstnum.style.borderRadius = "30px";
		firstnum.style.border = "3px solid blue";
		return firstnum.value = "3";
	}
	if(firstnum.value !== "" && secondnum.value === ""){
		secondnum.style.fontSize = "23px";
		secondnum.style.borderRadius = "30px";
		secondnum.style.border = "3px solid blue";
		return secondnum.value = "3";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value === ""){
		thirdnum.style.fontSize = "23px";
		thirdnum.style.borderRadius = "30px";
		thirdnum.style.border = "3px solid blue";
		return thirdnum.value = "3";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value !== "" && fourthnum.value === ""){
		fourthnum.style.fontSize = "23px";
		fourthnum.style.borderRadius = "30px";
		fourthnum.style.border = "3px solid blue";
		return fourthnum.value = "3";
	}
}
three.addEventListener("click",clickthree);

const clickfour = () =>{
	clickadd.play();
	four.style.transition = "1s";
	four.style.width = "50px";
	four.style.height = "50px";
	setTimeout(function(){
	four.style.width = "70px";
	four.style.height = "70px";
	},150);
	if(firstnum.value === ""){
		firstnum.style.fontSize = "23px";
		firstnum.style.borderRadius = "30px";
		firstnum.style.border = "3px solid blue";
		return firstnum.value = "4";
	}
	if(firstnum.value !== "" && secondnum.value === ""){
		secondnum.style.fontSize = "23px";
		secondnum.style.borderRadius = "30px";
		secondnum.style.border = "3px solid blue";
		return secondnum.value = "4";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value === ""){
		thirdnum.style.fontSize = "23px";
		thirdnum.style.borderRadius = "30px";
		thirdnum.style.border = "3px solid blue";
		return thirdnum.value = "4";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value !== "" && fourthnum.value === ""){
		fourthnum.style.fontSize = "23px";
		fourthnum.style.borderRadius = "30px";
		fourthnum.style.border = "3px solid blue";
		return fourthnum.value = "4";
	}
}
four.addEventListener("click",clickfour);

const clickfive = () =>{
	clickadd.play();
	five.style.transition = "1s";
	five.style.width = "50px";
	five.style.height = "50px";
	setTimeout(function(){
	five.style.width = "70px";
	five.style.height = "70px";
	},150);
	if(firstnum.value === ""){
		firstnum.style.fontSize = "23px";
		firstnum.style.borderRadius = "30px";
		firstnum.style.border = "3px solid blue";
		return firstnum.value = "5";
	}
	if(firstnum.value !== "" && secondnum.value === ""){
		secondnum.style.fontSize = "23px";
		secondnum.style.borderRadius = "30px";
		secondnum.style.border = "3px solid blue";
		return secondnum.value = "5";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value === ""){
		thirdnum.style.fontSize = "23px";
		thirdnum.style.borderRadius = "30px";
		thirdnum.style.border = "3px solid blue";
		return thirdnum.value = "5";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value !== "" && fourthnum.value === ""){
		fourthnum.style.fontSize = "23px";
		fourthnum.style.borderRadius = "30px";
		fourthnum.style.border = "3px solid blue";
		return fourthnum.value = "5";
	}
}
five.addEventListener("click",clickfive);

const clicksix = () =>{
	clickadd.play();
	six.style.transition = "1s";
	six.style.width = "50px";
	six.style.height = "50px";
	setTimeout(function(){
	six.style.width = "70px";
	six.style.height = "70px";
	},150);
	if(firstnum.value === ""){
		firstnum.style.fontSize = "23px";
		firstnum.style.borderRadius = "30px";
		firstnum.style.border = "3px solid blue";
		return firstnum.value = "6";
	}
	if(firstnum.value !== "" && secondnum.value === ""){
		secondnum.style.fontSize = "23px";
		secondnum.style.borderRadius = "30px";
		secondnum.style.border = "3px solid blue";
		return secondnum.value = "6";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value === ""){
		thirdnum.style.fontSize = "23px";
		thirdnum.style.borderRadius = "30px";
		thirdnum.style.border = "3px solid blue";
		return thirdnum.value = "6";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value !== "" && fourthnum.value === ""){
		fourthnum.style.fontSize = "23px";
		fourthnum.style.borderRadius = "30px";
		fourthnum.style.border = "3px solid blue";
		return fourthnum.value = "6";
	}
}
six.addEventListener("click",clicksix);

const clickseven = () =>{
	clickadd.play();
	seven.style.transition = "1s";
	seven.style.width = "50px";
	seven.style.height = "50px";
	setTimeout(function(){
	seven.style.width = "70px";
	seven.style.height = "70px";
	},150);
	if(firstnum.value === ""){
		firstnum.style.fontSize = "23px";
		firstnum.style.borderRadius = "30px";
		firstnum.style.border = "3px solid blue";
		return firstnum.value = "7";
	}
	if(firstnum.value !== "" && secondnum.value === ""){
		secondnum.style.fontSize = "23px";
		secondnum.style.borderRadius = "30px";
		secondnum.style.border = "3px solid blue";
		return secondnum.value = "7";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value === ""){
		thirdnum.style.fontSize = "23px";
		thirdnum.style.borderRadius = "30px";
		thirdnum.style.border = "3px solid blue";
		return thirdnum.value = "7";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value !== "" && fourthnum.value === ""){
		fourthnum.style.fontSize = "23px";
		fourthnum.style.borderRadius = "30px";
		fourthnum.style.border = "3px solid blue";
		return fourthnum.value = "7";
	}
}
seven.addEventListener("click",clickseven);

const clickeight = () =>{
	clickadd.play();
	eight.style.transition = "1s";
	eight.style.width = "50px";
	eight.style.height = "50px";
	setTimeout(function(){
	eight.style.width = "70px";
	eight.style.height = "70px";
	},150);
	if(firstnum.value === ""){
		firstnum.style.fontSize = "23px";
		firstnum.style.borderRadius = "30px";
		firstnum.style.border = "3px solid blue";
		return firstnum.value = "8";
	}
	if(firstnum.value !== "" && secondnum.value === ""){
		secondnum.style.fontSize = "23px";
		secondnum.style.borderRadius = "30px";
		secondnum.style.border = "3px solid blue";
		return secondnum.value = "8";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value === ""){
		thirdnum.style.fontSize = "23px";
		thirdnum.style.borderRadius = "30px";
		thirdnum.style.border = "3px solid blue";
		return thirdnum.value = "8";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value !== "" && fourthnum.value === ""){
		fourthnum.style.fontSize = "23px";
		fourthnum.style.borderRadius = "30px";
		fourthnum.style.border = "3px solid blue";
		return fourthnum.value = "8";
	}
}
eight.addEventListener("click",clickeight);

const clicknine = () =>{
	clickadd.play();
	nine.style.transition = "1s";
	nine.style.width = "50px";
	nine.style.height = "50px";
	setTimeout(function(){
	nine.style.width = "70px";
	nine.style.height = "70px";
	},150);
	if(firstnum.value === ""){
		firstnum.style.fontSize = "23px";
		firstnum.style.borderRadius = "30px";
		firstnum.style.border = "3px solid blue";
		return firstnum.value = "9";
	}
	if(firstnum.value !== "" && secondnum.value === ""){
		secondnum.style.fontSize = "23px";
		secondnum.style.borderRadius = "30px";
		secondnum.style.border = "3px solid blue";
		return secondnum.value = "9";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value === ""){
		thirdnum.style.fontSize = "23px";
		thirdnum.style.borderRadius = "30px";
		thirdnum.style.border = "3px solid blue";
		return thirdnum.value = "9";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value !== "" && fourthnum.value === ""){
		fourthnum.style.fontSize = "23px";
		fourthnum.style.borderRadius = "30px";
		fourthnum.style.border = "3px solid blue";
		return fourthnum.value = "9";
	}
}
nine.addEventListener("click",clicknine);

const clickzero = () =>{
	clickadd.play();
	zero.style.transition = "1s";
	zero.style.width = "50px";
	zero.style.height = "50px";
	setTimeout(function(){
	zero.style.width = "70px";
	zero.style.height = "70px";
	},150);
	if(firstnum.value === ""){
		firstnum.style.fontSize = "23px";
		firstnum.style.borderRadius = "30px";
		firstnum.style.border = "3px solid blue";
		return firstnum.value = "0";
	}
	if(firstnum.value !== "" && secondnum.value === ""){
		secondnum.style.fontSize = "23px";
		secondnum.style.borderRadius = "30px";
		secondnum.style.border = "3px solid blue";
		return secondnum.value = "0";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value === ""){
		thirdnum.style.fontSize = "23px";
		thirdnum.style.borderRadius = "30px";
		thirdnum.style.border = "3px solid blue";
		return thirdnum.value = "0";
	}
	if(firstnum.value !== "" && secondnum.value !== "" && thirdnum.value !== "" && fourthnum.value === ""){
		fourthnum.style.fontSize = "23px";
		fourthnum.style.borderRadius = "30px";
		fourthnum.style.border = "3px solid blue";
		return fourthnum.value = "0";
	}
}
zero.addEventListener("click",clickzero);











function shin(){
	firstnum.style.transform = "rotate(30deg)";
	secondnum.style.transform = "rotate(30deg)";
	thirdnum.style.transform = "rotate(30deg)";
	fourthnum.style.transform = "rotate(30deg)";
	firstnum.style.fontSize = "0px";
	secondnum.style.fontSize = "0px";
	thirdnum.style.fontSize = "0px";
	fourthnum.style.fontSize = "0px";
	clickadd.play();
	firstnum.style.borderRadius = "15px";
	secondnum.style.borderRadius = "15px";
	thirdnum.style.borderRadius = "15px";
	fourthnum.style.borderRadius = "15px";
	reset1.style.transition = "1s";
	reset1.style.width = "50px";
	reset1.style.height = "50px";
	setTimeout(function(){
	reset1.style.width = "70px";
	reset1.style.height = "70px";
	},150);
	setTimeout(function(){
	firstnum.value = "";
	secondnum.value= "";
	thirdnum.value = "";
	fourthnum.value = "";
	firstnum.style.transform = "none";
	secondnum.style.transform = "none";
	thirdnum.style.transform = "none";
	fourthnum.style.transform = "none";
},500);
	firstnum.style.border = "3px solid gold";
	secondnum.style.border = "3px solid gold";
	thirdnum.style.border = "3px solid gold";
	fourthnum.style.border = "3px solid gold";
}
function QnAage(){
	agebtn.style.transition = "1s";
	agebtn.style.width = "50px";
	agebtn.style.height = "50px";
	setTimeout(function(){
	agebtn.style.width = "70px";
	agebtn.style.height = "70px";
	},150);
	if(firstnum.value === "1" && secondnum.value === "6" && thirdnum.value === "8" && fourthnum.value === "9"){
		localStorage.clear();
		mastergyi.style.display = "none";
		// song.loop = "true";
		song.play();
		qage.style.display = "none";
		QnA.style.transition = "2s";
		QnA.style.visibility = "visible";
		QnA.style.opacity = "1";
	}
                
	else{
		if(typeof(Storage) !== "undefined"){
                		if(localStorage.clickcount){
                			localStorage.clickcount = Number(localStorage.clickcount)+1;
                		}
                		else{
                			localStorage.clickcount = 1;
                		}
                	}
				shin();
                if(localStorage.clickcount === "5"){
                locklabel.style.transition = "1s";
                locklabel.style.visibility = "visible";
                locklabel.style.opacity = "1";
                qcolor.style.visibility = "hidden";
                qcolor.style.transition = "1s";
                qcolor.style.opacity = "0";
                locklabel.style.zIndex = "3";
                return setTimeout(function(){
                	countergyi = 0;
                locklabel.style.visibility = "hidden";
                locklabel.style.opacity = "0";
                	qcolor.style.visibility = "visible";
                	qcolor.style.opacity = "1";
                	qage.style.zIndex = "3";
                },10000);
                }

                if(localStorage.clickcount === "10"){
                locklabel.style.transition = "1s";
                locklabel.style.visibility = "visible";
                waitlabel.innerHTML = "1 minute";
                locklabel.style.opacity = "1";
                qcolor.style.visibility = "hidden";
                qcolor.style.transition = "1s";
                qcolor.style.opacity = "0";
                locklabel.style.zIndex = "3";
                return setTimeout(function(){
                	countergyi = 0;
                locklabel.style.visibility = "hidden";
                locklabel.style.opacity = "0";
                	qcolor.style.visibility = "visible";
                	qcolor.style.opacity = "1";
                	qage.style.zIndex = "3";
                },60000);
                }

                if(localStorage.clickcount === "11"){
                locklabel.style.transition = "1s";
                locklabel.style.visibility = "visible";
                waitlabel.innerHTML = "5 minutes";
                locklabel.style.opacity = "1";
                qcolor.style.visibility = "hidden";
                qcolor.style.transition = "1s";
                qcolor.style.opacity = "0";
                locklabel.style.zIndex = "3";
                return setTimeout(function(){
                	countergyi = 0;
                locklabel.style.visibility = "hidden";
                locklabel.style.opacity = "0";
                	qcolor.style.visibility = "visible";
                	qcolor.style.opacity = "1";
                	qage.style.zIndex = "3";
                },300000);
                }
                if(localStorage.clickcount === "12"){
                locklabel.style.transition = "1s";
                locklabel.style.visibility = "visible";
                waitlabel.innerHTML = "1 hour";
                locklabel.style.opacity = "1";
                qcolor.style.visibility = "hidden";
                qcolor.style.transition = "1s";
                qcolor.style.opacity = "0";
                locklabel.style.zIndex = "3";
                return setTimeout(function(){
                	countergyi = 0;
                locklabel.style.visibility = "hidden";
                locklabel.style.opacity = "0";
                	qcolor.style.visibility = "visible";
                	qcolor.style.opacity = "1";
                	qage.style.zIndex = "3";
                },3600000);
                }
                //you can put time line statements from above with "if".
				
		firstnum.style.fontSize = "0px";
		secondnum.style.fontSize = "0px";
		thirdnum.style.fontSize = "0px";
		fourthnum.style.fontSize = "0px";
        headinglabel.textContent = "WRONG PIN";
        headinglabel.style.color = "red";
		secondnum.style.borderRadius = "15px";
		firstnum.style.borderRadius = "15px";
		thirdnum.style.borderRadius = "15px";
		fourthnum.style.borderRadius = "15px";
		firstnum.style.borderColor = "red";
		secondnum.style.borderColor = "red";
		thirdnum.style.borderColor = "red";
		fourthnum.style.borderColor = "red";
		setTimeout(function(){
			firstnum.value = "";
			secondnum.value = "";
			thirdnum.value = "";
			fourthnum.value = "";
        	headinglabel.textContent = "ENTER PIN";
        	headinglabel.style.color = "black";
			firstnum.style.borderColor = "gold";
			secondnum.style.borderColor = "gold";
			thirdnum.style.borderColor = "gold";
			fourthnum.style.borderColor = "gold";
		},600);
		forerror.setAttribute("class","animated shake");
		fart.play();
		setTimeout(function(){forerror.setAttribute("class","boobs");},1300);
	}
}
agebtn.addEventListener("click",checkValid);
const warninghey = () =>{
	alert("\nကူးနေတာလား ချစ်ဆုံးလေးရေ❤️");
}
function rehome(){
	QnA.style.visibility = "visible";
	QnA.style.opacity = "1";
	about.style.display = "none";
	about.style.transition = "1s";
}