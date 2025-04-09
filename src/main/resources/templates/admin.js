let stompClient = null;

function connect() {
    const socket = new SockJS('http://localhost:8080/websocket');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/status/notification', function (message) {
            showNotification(message.body);
        });
    }, function (error) {
        console.error('WebSocket connection error:', error);
    });
}

function sendUpdate(status) {
    if (stompClient && stompClient.connected) {
        stompClient.send('/app/sendMessage', {}, status);
        showNotification(`Admin: ${status}`);
    } else {
        alert('WebSocket connection is not established.');
    }
}

function showNotification(message) {
    const statusMessages = document.getElementById('status-messages');
    const status = document.createElement('div');
    status.textContent = message;
    statusMessages.appendChild(status);
}

connect();
