# Home of Tomorrow 

* [Home Of Tomorrow](http://final-project.dev.markfrazier.lol/) <---- LIVE LINK via CapRover

![Uptime Robot status](https://img.shields.io/uptimerobot/status/m797785131-d3e90994ef458d4edfd3f05b)

## GA - SEIR - Project2
 
## This is a full stack 3D application that allows users to view and catalog furniture items in 3D.
- From the main discover page, users can select from many different furniture items to view.
- The user can sign-in via Google OAuth 2.0 and review specific items.
- The user can also add items to their wish list. From the wish list page,
 users (if signed-in and authenticated) can view, add, edit, or delete private notes on their favorite furniture pieces.
 -The majority of the 3D models were provided by [Wayfair's 3D Model API](https://documenter.getpostman.com/view/427064/RWgqVK43)


![Screen shot of Home of Tomorrow App](https://imgur.com/70sWA3K.png)
![Screen shot of Home of Tomorrow App](https://imgur.com/C2ycdf2.png)


## Techologies Used
* HTML
* CSS
* JavaScript
* ThreeJS
* Express
* MongoDB / Mongoose
* NodeJS
* Passport
* Google OAuth 2.0
* EJS
* Heroku

## Getting Started & Live Link
* [Home Of Tomorrow](https://home-of-tomorrow.herokuapp.com) <---- LIVE LINK
* [Trello Board](https://trello.com/b/ai5evKql/gaseiproject2)
* [ERD](https://lucid.app/lucidchart/20c3bcd7-1084-4348-adc8-76bb99e38169/edit?invitationId=inv_eb006ed0-f1b1-4447-8f98-093c4e5d0c2b)

## Building and Running with Docker Compose

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Build the Docker images:
   ```
   docker-compose build
   ```

   This command will build the Docker images defined in your `docker-compose.yml` file.

### Running the Application

1. Start the application:
   ```
   docker-compose up
   ```

   This command will start all the services defined in your `docker-compose.yml` file.

2. To run the application in detached mode (in the background):
   ```
   docker-compose up -d
   ```

3. To stop the application:
   ```
   docker-compose down
   ```

### Accessing the Application

Once the application is running, you can access it at:

- Web interface: `http://localhost:8080`


 
#### To run locally, clone the repository and open the project in your editor
* In the project directory, you can run:
#### 'npm install'
* Installs node modules
#### 'npm start'
* Runs the app in development mode on http://localhost:3000
* The page should reload on edits

## Next Steps
* As a user, I want to be greated with a personalized message at login.
* As a user, I want to be able to upload my own .glb models to view.
* As a user, I want to be able to adjust the lighting of the 3D scene.
 
