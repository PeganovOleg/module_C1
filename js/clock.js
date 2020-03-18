const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus = document.querySelector('.plus');
const plusMin = document.querySelector('.plusMin');
const minus = document.querySelector('.minus');
const minusMin = document.querySelector('.minusMin');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const stop2 = document.querySelector('.stop2');



let countSec = 0;
let countMin = 0;
let countSec2 = 0;
let countMin2 = 0;


const updateText = () =>{	
  minutes.innerHTML = (0 + String(countMin)).slice(-2);
  seconds.innerHTML = (0 + String(countSec)).slice(-2);
}

const updateText2 = () =>{ 
  countSec=0;
  countMin=0;
 
}
updateText();

const countDown = () => {	
	let total = countSec + countMin * 60;
  const timeinterval = setTimeout(countDown, 1000);
  if (total <= 0) {
    
    clearInterval(timeinterval);
    timer.style.display = 'none';
    message.innerHTML = '<p>Обратный отчсчет завершен!</p>'

  }
  if(countSec > 0) countSec--;
  else{
  	countSec = 59;
    countMin--;
  } 
  

  updateText();
}

plus.onclick = () =>{
  if(countSec < 59) ++countSec;
  else if(countMin < 59){
  	countSec = 0;
  	++countMin;
  }
  updateText()
}


plusMin.onclick = () =>{
  if(countMin < 59) ++countMin;
  else{
    
  }
  updateText()
}



minus.onclick = () =>{
	if(countMin <= 0 && countSec===0){
  	countSec = 0;
    countMin = 0;
    return;
  }
  if(countSec > 0) --countSec;
  else{
  	countSec = 59;
  	--countMin;
  }
  updateText();
}


minusMin.onclick = () =>{
  if(countMin <= 0 && countSec===0){
    countSec = 0;
    countMin = 0;
    return;
  }
  if(countMin > 0) --countMin;
  else{
    
  }
  updateText();
}



start.onclick = () => {
	  countDown();  
}


stop.onclick = () => {

  
  updateText2()

}

stop2.onclick = () => {

  
 window.location.reload();

}


