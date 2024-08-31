### LOG IN FORM

1. **HTML Structure**:
 - Create a basic HTML page with a form that includes:
 - Username/email field
 - Password field
 - Submit button
2. **CSS Styling**:
 - Style the form to make it visually appealing.
 - Ensure the form is responsive and works well on different screen sizes, including mobile devices.
 - Use media queries to adjust the layout for different screen sizes.
3. **JavaScript Functionality**:
 - Implement client-side field validations:
 - Ensure the username/email field is not empty and contains a valid email format.
 - Ensure the password field is not empty and meets basic complexity requirements (e.g., at least 6 
characters long).
 - Display appropriate error messages for validation failures.
 
4. **API Integration**:
 - Use the following open login API for authentication:
 ```sh
 curl -X POST https://jsonplaceholder.typicode.com/posts \
 -H "Content-Type: application/json" \
 -d '{
 "username": "user@example.com",
 "password": "yourpassword"
 }'
 ```
 - On form submission, send a POST request to the API with the username/email and password.
 - Handle the API response:
 - Display a success message if the login is successful.
 - Display an error message if the login fails.
5. **Responsiveness**:
 - Ensure the login form is responsive and functions well on both web and mobile devices.
 - Use responsive design principles and techniques such as media queries, flexible grids, and 
responsive images



==========================================================================================================================================================

### 1 . Adding Code to Files


**index.html:** 
       Add the basic HTML structure for your login page. This file includes the form elements and links to the CSS and 
         JavaScript files.
        
**index.css:**
        Add the CSS styles for your form to make it visually appealing and responsive.
        
**index.js:**
       Add JavaScript functionality for form validation and API integration






### 2 Test Functionality

**Form Validation:**
Test the form by entering various inputs to ensure that the validation messages appear as expected for both the email and password fields.

**API Integration:**
Fill out the form with valid and invalid data and submit it to see if the correct messages are displayed based on the API response.




### 3 Check Responsiveness

**Resize Browser Window:**
Resize the browser window to check how the layout adapts to different screen sizes.
