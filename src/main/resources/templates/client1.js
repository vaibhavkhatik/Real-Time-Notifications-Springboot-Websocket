let stompClient = null;
let currentRating = 0;

function connect() {
    const socket = new SockJS('http://localhost:8080/websocket');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/status/notification', function (message) {
            updateTracker(message.body);
        });
    }, function (error) {
        console.error('WebSocket connection error:', error);
    });
}

function updateTracker(status) {
    const steps = {
        "Order Received": "step-received",
        "Order Prepared": "step-prepared",
        "Order Dispatched": "step-dispatched",
        "Order Delivered": "step-delivered"
    };

    const stepId = steps[status];
    if (stepId) {
        const stepElement = document.getElementById(stepId);
        stepElement.classList.add('completed');

        if (status === "Order Delivered") {
            document.getElementById('rating-container').style.display = 'block';
        }
    }
}

function setupRating() {
    const stars = document.querySelectorAll('#rating-stars i');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            currentRating = star.getAttribute('data-value');
            stars.forEach(s => s.classList.remove('selected'));
            for (let i = 0; i < currentRating; i++) {
                stars[i].classList.add('selected');
            }
        });
    });

    document.getElementById('submit-rating').addEventListener('click', () => {
        if (currentRating > 0) {
            alert(`Thank you for rating us ${currentRating} stars!`);
            document.getElementById('rating-container').style.display = 'none';
        } else {
            alert('Please select a rating before submitting.');
        }
    });
}

connect();
setupRating();
