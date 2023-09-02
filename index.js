async function fetchUserData() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        document.querySelector('img').src = user.picture.large;
        document.querySelector('#username').textContent = `${user.login.username}`;
        document.querySelector('#fullName').textContent = `${user.name.first} ${user.name.last}`;
        document.querySelector('#gender').textContent = `${user.gender}`;
        document.querySelector('#dob').textContent = `${user.dob.date}`;
        document.querySelector('#address').textContent = `${user.location.street.name}, ${user.location.city}`;
        document.querySelector('#email').textContent = `${user.email}`;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

document.getElementById('fetchUser').addEventListener('click', fetchUserData);

// JavaScript for expanding user card on click
document.querySelector('.user-card').addEventListener('click', function () {
    this.classList.toggle('expanded');
});