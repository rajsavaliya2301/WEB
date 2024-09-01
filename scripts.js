document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const checkInInput = document.getElementById('check-in');

    // Set minimum check-in date to today
    const today = new Date().toISOString().split('T')[0];
    checkInInput.setAttribute('min', today);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const roomType = document.getElementById('room-type').value;
        const checkIn = document.getElementById('check-in').value;
        const checkOut = document.getElementById('check-out').value;
        
        // Validate check-in and check-out dates
        if (new Date(checkIn) < new Date(today)) {
            alert('Check-in date cannot be in the past.');
            return;
        }

        if (new Date(checkOut) <= new Date(checkIn)) {
            alert('Check-out date must be after check-in date.');
            return;
        }

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
});
