class Clock {
    constructor(year, month, date,hour, minute, second, session) {
      this.hour = hour;
      this.minute = minute;
      this.second = second;
      this.session=session;
      this.date=date;
      this.month=month;
      this.year=year; 

    }

    showTime(){

        let date=new Date();
        let h = date.getHours(); // 0 - 23
        let m = date.getMinutes(); // 0 - 59
        let s = date.getSeconds(); // 0 - 59
    
        // console.log('hour='+h+",minute="+m+",second="+s);
        let year=date.getFullYear();
        let month=date.getMonth();
        let date1=date.getDate();
    
        var months = [ "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December" ];
    
        let selectedMonthName = months[month];
        // console.log('year='+year+",month="+selectedMonthName+",day="+date1);
        let session = "AM";
        
        if(h == 0){
            h = 12;
        }
        
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
    
        
        this.month=selectedMonthName;
        this.year=year;
        this.date=date1;
    
        this.minute=m;
        this.hour=h;
        this.second=s;
        this.session=session;
    
        console.log("clock_s="+s);
        setTimeout(this.showTime, 1000);
    }


  }



const clock1=document.querySelector('.clocktimer'),
    //   clock_m=document.querySelector('#minute'),
    //   clock_h=document.querySelector('#hour'),
    //   clock_s=document.querySelector('#second'),
    //   clock_session=document.querySelector('#session');
    clock_m=document.querySelector('#minute'),
    clock_h=document.querySelector('#hour'),
    clock_s=document.querySelector('#second'),
    clock_session=document.querySelector('#session'),
    day_month=document.querySelector('#month'),
    day_day=document.querySelector('#day'),
    day_year=document.querySelector('#year');

      timer_m=document.querySelector('#t-minute'),
      timer_h=document.querySelector('#t-hour'),
      timer_s=document.querySelector('#t-seconds');

    


const clockBtn=document.querySelector('#clock-btn'),
    //   stopBtn=document.querySelector('#stop-btn'),
      startBtn=document.querySelector('#start-btn');

let stopTimer=true; // initial condition timer is stopped


// listen to Click clock
clockBtn.addEventListener('click',function(e){
    // Instantiate Clock
    const clock = new Clock(2022, "Jan", 15, 0,0,0,"AM");
    clock.showTime();
    day_month.innerText=clock.month;
    day_year.innerText=clock.year;
    day_day.innerText=clock.date;
    
    clock_m.innerText=clock.minute;
    clock_h.innerText=clock.hour;
    clock_s.innerText=clock.second;
    clock_session.innerText=clock.session;

    // for (let i=0; i<1000; i++)
    // {
    //     setTimeout(()=>clock.showTime(), 1000*i);

    // }
  

})


// listen to stop button
// startBtn.addEventListener('click',function(e){
    

//     stopTimer=false;
//     showTimer(0);
//     // for (let i=0; i<1000; i++)
//     // {
//     //     setTimeout(()=>showTimer(i), 1000*i);
//     // }
  

// })

// Combine the start and stop button into one button
startBtn.addEventListener('click',function(e){
    
    if (stopTimer) // when timer is stopped
    {
        // start the timer
        stopTimer=false;
        showTimer(0);
        // show user to stop
        console.log("stop");
        startBtn.value="STOP";
    }
    else{ // when timer started
        // stop the timer
        stopTimer=true;
        // show user to start
        console.log("start");
        startBtn.value="START"

    }

    
    // for (let i=0; i<1000; i++)
    // {
    //     setTimeout(()=>showTimer(i), 1000*i);
    // }
  

})

// listen to stop button
// stopBtn.addEventListener('click',function(e){
    
//     stopTimer=true;
// })



function showTimer(number){
    let h=Math.floor(number/3600);
    let m= Math.floor((number-h*3600)/60);
    let s=Math.floor(number-h*3600-m*60);

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    timer_h.innerText=h;
    timer_m.innerText=m;
    timer_s.innerText=s;

    number++;
    console.log(number);
    if (!stopTimer)
    {
        setTimeout(() =>showTimer(number), 1000);
    }
    
}





