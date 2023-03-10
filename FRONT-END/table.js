
const select=()=>{
    fetch('http://localhost:5697/print',
    {   method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      let dat=data.data;
      show(dat);
    })
    
    
    function show(data) {
     let tab =
      `<tr style="background-color:orange; height:1cm;">
        <th>Roll no</th>
        <th>Full name</th>
        <th>Father name</th>
        <th>DOB</th>
        <th>Gender</th>
        <th>Location</th>
        <th>Mobile number</th>
        <th>Email</th>
        <th>Department</th>
        <th>Batch</th>
      </tr>`;
        
     data.map((r)=> {  
      {
                console.log(r); 
                tab += `<tr>
            <td>${r.roll_no} </td>
            <td>${r.full_name}</td>
            <td>${r.father_name}</td>
            <td>${r.DOB}</td> 
            <td>${r.gender}</td> 
            <td>${r.location}</td>
            <td>${r.mobile_number}</td> 
            <td>${r.email}</td>
            <td>${r.department}</td>
            <td>${r.batch}</td>
            </tr>`;
            }        
     })
     document.getElementById('students').innerHTML = tab;
    }
    }
    select();
    
    const insert=()=>{
      alert("ARE YOU NEED TO ADD STUDENT DETAILS");
      var s1=document.getElementById('un').value;
      var s2=document.getElementById('fn').value;
      var s3=document.getElementById('dob').value;
      var s4=document.getElementById('ge').value;
      var s5=document.getElementById('loc').value;
      var s6=document.getElementById('mob').value;
      var s7=document.getElementById('em').value;
      var s8=document.getElementById('dpt').value;
      var s9=document.getElementById('btch').value;
      console.log("sssss",s1,s2,s3,s4,s5,s6,s7,s8,s9)
      fetch('http://localhost:5697/add', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       
        "full_name":s1,
        "father_name":s2,
        "DOB":s3,
        "gender":s4,
        "location":s5,
        "mobile_number":s6,
        "email":s7,
        "department":s8,
        "batch":s9

      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if(data.status==200){
          window.location.href="new.html";
          localStorage.setItem('students',JSON.stringify(data.data))
        }
      
      })
    }
    const update=()=>{
      alert("ARE YOU SURE TO EDIT STUDENT DETAILS");
        var u=document.getElementById('rn').value;
        var u1=document.getElementById('un').value;
        var u2=document.getElementById('fn').value;
        var u3=document.getElementById('dob').value;
        var u4=document.getElementById('ge').value;
        var u5=document.getElementById('loc').value;
        var u6=document.getElementById('mob').value;
        var u7=document.getElementById('em').value;
        var u8=document.getElementById('dpt').value;
        var u9=document.getElementById('btch').value;
   
      fetch('http://localhost:5697/edit', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "roll_no":u,
        "full_name":u1,
        "father_name":u2,
        "DOB":u3,
        "gender":u4,
        "location":u5,
        "mobile_number":u6,
        "email":u7,
        "department":u8,
        "batch":u9
      
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if(data.status==200){
          window.location.href="new.html";
          localStorage.setItem('students',JSON.stringify(data.data))
        }
      
     
      })
    }
    const dele=()=>{
      alert("ARE YOU CONFIRM TO DELETE");
      var did=document.getElementById('did').value;
      fetch('http://localhost:5697/delete', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "roll_no":did
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if(data.status==200){
          window.location.href="new.html";
          localStorage.setItem('students',JSON.stringify(data.data))
        }
       
      })
    }