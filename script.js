document.getElementById("form").addEventListener("submit",function(event){
   event.preventDefault()

    let name=document.getElementById("name").value
   let id=document.getElementById("id").value
   let depart=document.getElementById("depart").value
   let month=Number(document.getElementById("month").value)
   let working=document.getElementById("working").value
   let present=document.getElementById("present").value
   let overtime=document.getElementById("overtime").value

   let abs=working-present
   let perc=(present/working)*100
   let per=Math.floor(month/working)
   let Attnd=Math.floor(per*present)
   let over=overtime*200
   let deduc=month*5/100
   let add=(month+1000)
   let wr=30
    

   

   document.getElementById("display").innerHTML =(" Employee Name: "+name)
   document.getElementById("displayn").innerHTML =("Employee ID: "+id)
   document.getElementById("displaym").innerHTML =("Department: "+depart)
   document.getElementById("displayc").innerHTML =("Basic Monthly Salary: "+month)
   document.getElementById("displayb").innerHTML =("Total Working Days: "+working)
   document.getElementById("displayf").innerHTML =("Present Days: "+present)
   document.getElementById("displayj").innerHTML =("Overtime Hours: "+overtime)
   document.getElementById("displayl").innerHTML =("Absent Days:  "+abs)
   document.getElementById("displayy").innerHTML =("Attendance percentage:  "+(perc))
   document.getElementById("displayq").innerHTML =("Per-Day Salary:  "+(per))
   document.getElementById("displayt").innerHTML =("Attendance salary:  "+(Attnd))
   document.getElementById("displayz").innerHTML =("Overtime payment:  "+(over))


document.getElementById("displayff").innerHTML = "";



   function details(att){
    if(att==100&&att>=95){
        document.getElementById("displaycv").innerHTML =("Bonus:"+month+"+1000$= "+add)
        document.getElementById("displayw").innerHTML =("Excellent")
    }
    // if(){
    //     document.getElementById("displayw").innerHTML =("Excellent")
        
    // }
    else if(att>=85&&att<=94){
                document.getElementById("displayw").innerHTML =("Good")

    }else if(att>=75&&att<=84){
                document.getElementById("displayw").innerHTML =("Average")

    }else{
                document.getElementById("displayw").innerHTML =("Poor")
                document.getElementById("displayff").innerHTML =("5% Deduction of 75% Attendance:") +month+" -5%= "+deduc

    }

   }
   details(perc)

   let totpr=wr-abs
   

    var table = document.getElementById("table");
    var row=table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);




    cell1.innerHTML = (table.rows.length)
    cell2.innerHTML = name;
    cell3.innerHTML = id;
    cell4.innerHTML = depart;
    cell5.innerHTML = month;
    cell6.innerHTML = working;
    cell7.innerHTML = present;
    cell8.innerHTML = overtime;
    cell9.innerHTML = totpr;
    cell10.innerHTML = abs


    
    
    

    document.getElementById("tmp").innerHTML =("Total Employees :"+(table.rows.length ))



   

    



   


   


                                
})
