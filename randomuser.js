fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(data => {
        //console.log(data)

        let author = data.results;
        console.log(author);


        //get data value
        let output = "<h2><center>Get User Data</center></h2>";

        //get data loop through
        author.forEach(function(lists){
            output +=`
            
                <div class="card mb-4" style="display:flex; background-color:black;">
                    <div style="background-color:green; width:20%; float:left"><img class="" style="height:300px; width:100%;" src="${lists.picture.medium}"></div>
                    <div class=" w-75" style="background-color:red;">
                        <h2 class="card-title m-2">Name: ${lists.name.title} ${lists.name.first} ${lists.name.last} <span> (${lists.dob.age})</span></h2>
                        <strong>Gender: ${lists.gender}</strong><br>
                        <span>Address: ${lists.location.street.number}, ${lists.location.street.name}, ${lists.location.city}, </span><br>
                        <small>State: ${lists.location.state}</small><br>
                        <small>Country: ${lists.location.country}</small><br>
                        <span>Phone Number: ${lists.cell}</span>
             
                    </div>
                </div>
                     `;
        });

        document.getElementById("output").innerHTML = output;


    });
    // .catch(error => console.log("error"))
