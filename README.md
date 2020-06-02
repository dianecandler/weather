# weather
# 06 Server-Side APIs: Weather Dashboard

Diane's Weather Dashboard
1. [x] Diagram project layout - column/rows
2. [x] Confirm API works, generate data needed for project, 
        using JQuery, Ajax, JSON
3. [x]  Identify bootstrap needed and plug into HTML, CSS 
4. [x]  organize JS code into HTML and bootstrap
5. [x]  Display current city data in CSS container
6. [x]  Create 5 day data in JS
7. []  Tweak bootstrap boxes for 5 day forecast
8. [x]  Create user input/search box for city choice
9. [x]  Create display history boxes
10.[]  Nice to have cities populated in empty history boxes
11.[x]  Set up local storage for cities
12.[]  Incrementally add search city & delete forced city
13.[]  Finalize CSS and clean up files
14.[]  Complete README.md with helpful links, learning, etc.
15.[]  Finalize GitHub and submit work in UT Bootcamp Folder

+ + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 
See DianeDiagram_HWweather1.png in Assets folder for design 
+ + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 

Lessons Learned:  
 - Diagramming project simplified col/row planning
 - Having tutor/TA resources available to help with setting up the API links when I needed assistance was the biggest concern for this project.  Found working with this APIs was fairly easy.
 - Starting with HTML before ensuring API worked added stress.
 - Once API links worked, creating the design and data scope creep challenges that had to be checked often.
 - If I started over, I would implement bootstrap with grid system and deploy the framework better than what I have done here.  Out of time to replace CSS as I am working on the team project.

Helpful link:  https://www.youtube.com/watch?v=InoAIgBZIEA
OpenWeather:  https://openweathermap.org
    Used 2 APIs in order to get all attributes desired 


==============================================================
Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

The following image demonstrates the application functionality:

![weather dashboard demo](./Assets/06-server-side-apis-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
