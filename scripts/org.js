document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form_section');
    const orderContainer = document.getElementById('order-container');

    loadOrders();

    form.addEventListener('submit', function (event) {
     //   event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        var types = document.getElementsByName('order_type');
        var typeValue;
        for (let index = 0; index < types.length; index++) {
            if(types[index].checked){
                typeValue = types[index].value;
                break;
            }
        }
        const comment = document.getElementById('comment').value;

        const result = createOrder(name, email, typeValue, comment);
        orderContainer.appendChild(result);

        saveOrder(name, email, typeValue, comment);

        form.reset();
    });

    function createOrder(username, email, order_type, comment) {
        const order = document.createElement('div');
        order.classList.add('order');

        const orderHeader = document.createElement('h3');
        orderHeader.textContent = username;

        const orderEmail = document.createElement('p');
        orderEmail.textContent = email;

        const orderType = document.createElement('p');
        orderType.textContent = order_type;

        const orderComment = document.createElement('p');
        orderComment.textContent = comment;
        

        order.appendChild(orderHeader);
        order.appendChild(orderEmail);
        order.appendChild(orderType);
        order.appendChild(orderComment);

        return order;
    }

    function saveOrder(name, email, order_type, comment) {
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push({ name, email, order_type, comment });
        localStorage.setItem('orders', JSON.stringify(orders));
    }

    function loadOrders() {
        let orders = JSON.parse(localStorage.getItem('orders')) || [];

        orders.forEach(function (order) {
            const orderElement = createOrder(order.name, order.email, order.order_type, order.comment);
            orderContainer.appendChild(orderElement);
        });
    }
});