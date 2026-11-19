document.getElementById("form").addEventListener("submit",function(event){
   event.preventDefault()

    let name=document.getElementById("name").value
   let id=document.getElementById("id").value
   let depart=document.getElementById("depart").value
   let month=document.getElementById("month").value
   let working=document.getElementById("working").value
   let present=document.getElementById("present").value
   let overtime=document.getElementById("overtime").value

   let abs=working-present
   let perc=(present/working)*100
   let per=Math.floor(month/working)
   let Attnd=Math.floor(per*present)
   let over=overtime*200
   let fee=month
   

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






   function details(att){
    if(att>=95){
        document.getElementById("displayw").innerHTML =("Excellent")
        
    }else if(att>=85&&att<=94){
                document.getElementById("displayw").innerHTML =("Good")

    }else if(att>=75&&att<=84){
                document.getElementById("displayw").innerHTML =("Average")

    }else{
                document.getElementById("displayw").innerHTML =("Poor")
                document.getElementById("displayff").innerHTML =("Por:"+)

    

    }

   }

details(perc)
   


   


                                
})
