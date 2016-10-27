# app-feeds
Single page web application to render News Feed

1. Requirement
  - Add fields to capture text and date value
  - Display list of news feed 
  - Persist data in DB and render list in descending order by publication date
  
2. Technical details
  - Render UI functional data using AngularJS (MVVM model), HTML5, CSS Bootstrap, JQuery
  - REST service to read and publish data in DB; refer repo link https://github.com/chandanashree9/app-feeds-service
  
3. Functionality
  - Form Feed Section: 
    - Enter news content in textarea field
    - Select publiction date using datepicker
    - Click Add button to persist and render list
  - Feeds section controls: 
    - Display feed list in descending order by publicaton date (most recent item at the top)
    - Display pagination after 5 record
    - Search by News Content or publication date (dd or MM or yyyy)
  
