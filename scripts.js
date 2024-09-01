document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const roomType = document.getElementById('room-type').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    
    const booking = {
        name,
        email,
        roomType,
        checkIn,
        checkOut
    };

    addBooking(booking);
});

function addBooking(booking) {
    const bookingsList = document.getElementById('bookings-list');
    const bookingDiv = document.createElement('div');
    bookingDiv.classList.add('booking');

    bookingDiv.innerHTML = `
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Room Type:</strong> ${booking.roomType}</p>
        <p><strong>Check-in:</strong> ${booking.checkIn}</p>
        <p><strong>Check-out:</strong> ${booking.checkOut}</p>
    `;
    
    bookingsList.appendChild(bookingDiv);
}
