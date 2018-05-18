Coral Reef data visualization/analysis site for the World Wildlife Fund. 

## Set Up
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
