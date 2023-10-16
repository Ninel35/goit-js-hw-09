import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



const btn = document.querySelector('button[data-start]');
btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (new Date().getTime() >= selectedDates[0].getTime()) {
            alert("Please choose a date in the future");
        } else {
            btn.disabled = false; 
        }
  },
};


const inputDate = document.querySelector("#datetime-picker");
const fp = flatpickr(inputDate, options);


btn.addEventListener('click', handlerBtn);

const timer = {
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
} 

function handlerBtn(evt) {
    const interval = setInterval(() => {
        let timeLeft = fp.selectedDates[0].getTime() - new Date().getTime();
        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        }
        const convertor = convertMs(timeLeft);
        timer.days.textContent = convertor.days;
        if (convertor.days <10) timer.days.textContent = "0" + convertor.days;  
        else timer.days.textContent = convertor.days; 

        if (convertor.hours <10) timer.hours.textContent = "0" + convertor.hours;  
        else timer.hours.textContent = convertor.hours;  

        if (convertor.minutes < 10) timer.minutes.textContent = "0" + convertor.minutes;
        else timer.minutes.textContent = convertor.minutes; 
        
        if (convertor.seconds < 10) timer.seconds.textContent = "0" + convertor.seconds; 
        else timer.seconds.textContent = convertor.seconds;
        
       }, 1000);
    }


