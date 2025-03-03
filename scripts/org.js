document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-part');
    const orderContainer = document.getElementById('order-container');

    loadOrders();

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const name = document.getElementById('name').value;
        if (name.startsWith(" ")) {
            form.reset();
            alert('Name must not start with space')
            throw console.error('Name starts with space');
            
        } 
        const email = document.getElementById('email').value;
        if (email.startsWith(" ")) {
            form.reset();
            alert('Email must not start with space')
            throw console.error('Email starts with space');
            
        } 
        var types = document.getElementsByName('order_type');
        var typeValue;
        for (let index = 0; index < types.length; index++) {
            if(types[index].checked){
                typeValue = types[index].value;
                break;
            }
        }
        const comment = document.getElementById('comment').value;
        if (comment.startsWith(" ")) {
            form.reset();
            alert('Comment must not start with space')
            throw console.error('Comment starts with space');
            
        } 

        saveOrder(name, email, typeValue, comment);

        displayOrder(name, email, typeValue, comment);

        form.reset();
    });

    function displayOrder(name, email, order_type, comment) {
        const orderTemplate = document.getElementById('order-template');
        const orderElement = orderTemplate.content.cloneNode(true);

        orderElement.querySelector('.order-name').textContent = name;

        orderElement.querySelector('.order-email').textContent = email;

        orderElement.querySelector('.order-type').textContent = order_type;

        orderElement.querySelector('.order-comment').textContent = comment;

        orderContainer.appendChild(orderElement);
    }

    function saveOrder(name, email, order_type, comment) {
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push({ name, email, order_type, comment });
        localStorage.setItem('orders', JSON.stringify(orders));
    }

    function loadOrders() {
        let orders = JSON.parse(localStorage.getItem('orders')) || [];

        orders.forEach(function (order) {
            displayOrder(order.name, order.email, order.order_type, order.comment);
        });
    } 
});