document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;
    let data = {
        firstName: firstName,
        lastName:lastName,
        age:age
    };
    console.log({data});

    fetch('https://dummyjson.com/users/add',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(response=>console.log({response}))
    .catch(error=>console.log({error}))

})