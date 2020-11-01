# MERN-Stack-Demo

Challenge:
We have created a robot that monitors a patient’s health, called RoboCare (a bit too generic) and we decided that instead of letting it run physically inside a clinic, where only nurses can check the status on the robot’s monitor, this robot should be able to send the data about the health of the patient to a online platform where we can monitor that from a distance while at the same time giving alerts so the medical staff can get the information quickly and react

Solution:
- The completion on this challenge is around 80% due to the fact that I've spend time on the following
- 15 hrs in total
- - - 7 of which learning about Cloud development (3 hrs Mongo Atlas Cloud for database clusters, 4 hrs Google Cloud Engine & API for NodeJS microservice hosting)
- - - 8 of which remembering how Components work in React compared to Angular/Vue and NodeJS backend databse models + API driven development

Code:
- 3 microservices NodeJS hosted in Google Cloud Engine - single responsibility for logging and retrieving data from Mongo Atlas Cloud
- 1 microservice NodejS for checking the vital signs values provided by the React app
- 1 React app, for the 'Doctor monitor' to allow viewing of live data in a graph for each vital sign of the patient and display alerts in case something is not right
- (1 React app NOT implemented - Robot simulator: to simulate real life logging of data from a life-like patient)

