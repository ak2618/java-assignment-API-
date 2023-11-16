let authToken;

function authenticateUser() {
    const loginId = document.getElementById('loginId').value;
    const password = document.getElementById('password').value;

    // Make API call to authentication endpoint
    // Update 'authToken' variable with the received token

    // If authentication is successful, show the Customer List Screen
    showCustomerListScreen();
}

function showCustomerListScreen() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('customerListScreen').style.display = 'block';

    // Fetch and display the list of customers
    getCustomerList();
}

function showAddCustomerScreen() {
    document.getElementById('customerListScreen').style.display = 'none';
    document.getElementById('addCustomerScreen').style.display = 'block';
}

function createCustomer() {
    // Implement logic to create a new customer using the provided API
    // Update the UI accordingly
}

function getCustomerList() {
    // Make API call to fetch the list of customers
    // Display the customer data in the table on the Customer List Screen
}

function logout() {
    // Implement logic to log out (clear the authentication token, reset UI, etc.)
    document.getElementById('loginScreen').style.display = 'block';
    document.getElementById('customerListScreen').style.display = 'none';
}

// Implement functions for deleting and updating customers as needed