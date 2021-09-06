# easydecor
SERVER REQUIRES NODE.JS AND SQL TO WORK.....

SQL Connection will not be established if username and password both are not "root".
Database Creation is automatically done if connection is successfully established.

Steps to run Server:
1.) Redirect to interior-web-project directory
2.) Run npm start and it will establish server at http://localhost:3000/
3.) If SQL Server connection is established,it will show "Connection to SQL DB Established".

Links:
index.html -> http://localhost:3000/
about.html -> http://localhost:3000/about
officedesign.html -> http://localhost:3000/office-design
commercial.html -> http://localhost:3000/commercial-design
residential.html-> http://localhost:3000/residential-design
contactus.html -> http://localhost:3000/contactus

Please do not add .html end to the links as the redirect to the .js file in routes and not the html pages directly.
Also one update to the pages is to add nav-bar as you have to manually links to reach different pages making it more tedious.

In contactus,after submitting data, a schema called contact_form_details and within it a table called contact_form should be generated.
Please make sure you check workbench to see if the db and tables are generated with the values you've entered.

Use Ctrl+C in the terminal to exit the server
