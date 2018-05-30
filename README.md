Coral Reef data visualization/analysis site for the World Wildlife Fund. 

## About

This is a proof of concept to visualize a dataset from the world wildlife fund using React/Node/Express/Postgres. 

Related front-end packages that were used: 
- Plotly
- Leaflet
- MaterialUI

The primary goal was to prove that we could do this using Leaflet/Plotly; everything else is expected to change once it integrates into the actual WWF ecosystem. It was built with that in mind.

Below are installation instructions, and expects that you have `npm`, `node`, and `postgres` at the very least set up locally.

## Overview

The `frontend` and `backend` for this project are in the same repo under the `frontend` and `coral_reef_api` folders (respectively). The api is built using `node/express/sequelize`, and only has one endpoint that serves JSON data from the database. This is temporary, and I expect that later on, the frontend will connect to the APIs/backend that is actually in use at WWF.

## Installation Instructions


- `git clone` this repo.
- Navigate to the `frontend` folder, and run `npm install`
- Similarly, go into the `coral_reef_api` folder and run `npm install`
- Assuming you have `postgres` installed, in your terminal, run the command `createdb coral_reef_development` to create a local postgres database with the name `coral_reef_development`
- Now, from the `coral_reef_api` folder, type `cd db_util` to go into the `db_util` folder
- In there, run `psql coral_reef_development < benthic_db_outfile`. This will load the database you just created with our sample data.
- Now, go back to the `coral_reef_api` root folder
- Run `nodemon` to start the backend
- In another terminal window, go into the `frontend` folder and run `npm start`. It will ask you if it can run it on `port 3001`, since the backend is already running on `3000`. Hit `yes` and let it continue.
- In your browser, go to `localhost:3001` and you should be able to see the UI.
- If you want to see the api calls, the only one is at `localhost:3000/benthic`

Install and set up Postgres DB

```sh
git clone https://github.com/octarinegroup/wwf_coral_reef.git
cd wwf_coral_reef/
createdb coral_reef_development
{ GO INTO coral_reef_api/config/config.json and change user to what you are }
cd coral_reef_api/db_util
psql coral_reef_development < benthic_db_outfile
cd coral_reef_api
npm install
nodemon
{ Check localhost:3000 }
cd frontend/
npm install
npm start
```
