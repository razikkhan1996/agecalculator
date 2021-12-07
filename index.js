 const Calculate=()=>{

    
    const date=document.getElementById("date").value;
    const month=document.getElementById("month").value;
    const year=document.getElementById("year").value;

    const currDate=new Date();

    const d=currDate.getDate();
    const m=currDate.getMonth()+1;
    const y=currDate.getFullYear();

    let birthDate,birthMonth,birthYear;

    birthDate=d-date;
    birthMonth=m-month;
    birthYear=y-year;

    if(date > d)
    {
        birthDate=date-d;
    }

    if(month > m)
    {
        birthMonth=month-m;
    }

    if(year > y)
    {
        birthYear=year-y;
    }


    if(date <= 31 && month <= 12 && year <= y )
    {

        if(date !="" || month != "" || year != "" )
        {
            let html=`<div class="container">
                <span id="showyear">${birthYear} Years</span>
                <span id="showmonth">${birthMonth} Months</span>
                <span id="showdate">${birthDate} days</span>
            </div>`;
        
            const result=document.getElementById("result");

            result.innerHTML=html;
        }

        else
        {

        }

    }

   
    // console.log(birthYear, birthMonth,birthDate);
 }