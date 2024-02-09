# Calender App
This is full stack Calender application using MERN tools. This application helps a user to set calender events and store them in their database. 
The project have been divided into 2 main modules:
## Frontend
1. The frontend UI has been made using HTML, CSS, JS, React, TailwindCSS
2. The following functionalities have been implemented till now:
a. Add an event
b. Modify pre-existing event
c. Delete pre-existing event
d. View all events on the calender

### To setup the frontend of the application:
1. Clone this Github Repository: https://github.com/akshya03/Calender-App into your system in a folder.
2. Open terminal in the same folder and run ```npm i```
3. After installation of dependecies is complete, run ```npm run dev```
4. The server starts on default localhost path: ```http://localhost:5173/```

## Backend
1. Backend of the application is implement using NodeJs, ExpressJs and MongoDb.
2. Whatever events are added, modified or deleted from the UI, the same is updated in the database.
### To setup the backend of the application:
1. Clone Github Repository: https://github.com/akshya03/calender_backend into your system in a folder.
2. Install MongoDb into the system or setup MongoDb Atlas (virtual databse) and change system variables in .env file accordingly.
3. Open terminal in the same folder and run ```npm i```
4. After installation of dependecies is complete, run ```npm run dev```
5. The server starts on default localhost path: ```http://localhost:4000/```

Now events can be added from the UI using the calender application.
