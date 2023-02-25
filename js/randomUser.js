const loadUser =()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
    
}

const displayUser = user => {
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;
    const userName = document.getElementById('name');
    userName.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    const dobDate = user.results[0].dob.date;
    document.getElementById('dob').innerHTML = dobDate;
    const age = user.results[0].dob.age;
    document.getElementById('age').innerHTML = age;
    const location = user.results[0].location.city;
    document.getElementById('location').innerHTML = location;
    const proPicture = user.results[0].picture.large;
    document.getElementById('pro-picture').innerHTML = proPicture;
    console.log(user);
    
}

loadUser();