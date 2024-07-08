document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const customerForm = document.getElementById('customerForm');
    const customerTable = document.getElementById('customerTable').getElementsByTagName('tbody')[0];
    const addCustomerBtn = document.getElementById('addCustomerBtn');
    const syncBtn = document.getElementById('syncBtn');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle login
    });

    addCustomerBtn.addEventListener('click', function () {
        customerForm.style.display = 'block';
    });

    syncBtn.addEventListener('click', function () {
        // Handle syncing customers
    });

    // Fetch customers and populate table
    fetchCustomers();

    function fetchCustomers() {
        // Fetch and display customers from API
    }

    function populateTable(customers) {
        customerTable.innerHTML = '';
        customers.forEach(customer => {
            let row = customerTable.insertRow();
            row.innerHTML = `
                <td>${customer.firstName}</td>
                <td>${customer.lastName}</td>
                <td>${customer.street}</td>
                <td>${customer.address}</td>
                <td>${customer.city}</td>
                <td>${customer.state}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            `;
        });
    }
});
