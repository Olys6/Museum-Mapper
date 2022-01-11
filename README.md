# Museum-Mapper

## The brief

<ul>
<li>Build a full-stack application with mongoDB and React</li>
<li>Use an Express API</li>
<li>Utilise your API with a separate front-end</li>
<li>Be deployed online</li>
</ul>
  
## Overview

Museum Mapper is an app that displays a wide variety of museums in England. Almost everything was coded separately by using different git branches except for the backend which was done entirely with my 3 other group partners and another few times when helping each other. My group and I had roughly 9 days on this project.

## Deployed app <a href="https://museum-mapper.herokuapp.com/">here</a>

## Technologies used

<div style="display: flex; flex-direction: row; gap: 1.5rem; margin-bottom: 10px;">
  <img style="width: 100px;" src="https://i.imgur.com/tlQzHt6.png">
  <img style="width: 70px;" src="https://i.imgur.com/BYUqdTS.png">
  <img style="width: 100px;" src="https://i.imgur.com/k9De3HS.png">
  <img style="width: 100px;" src="https://i.imgur.com/0O17BWj.png">
  <img style="width: 200px;" src="https://i.imgur.com/C9s6ueO.png">
  <img style="width: 150px;" src="https://i.imgur.com/st6ajnt.jpg">
</div>

## 1st - 2nd Day:

The first two days, we planned out our project's subject. So I asked everyone to write down their hobbies to find out what we all had in common, and we found out that we all had an interest in dinosaurs, so we decided to make an app about museums. As soon as we knew what the subject was going to be, we got started right away by pair coding the backend. 
We used mongoDB and set up everything except for the login and the register on the evening we started. The next day we worked together to finish the register and login in the morning and the afternoon consisted of setting up the front end so that we could all get started on building different components. We took a look at the wireframe and talked about what we would like to do. We then set up tasks on Asana for who’s going to do what and split up to work alone, when help was needed someone sent a message to the others and help arrived. The workload was divided by having two people work on a component and trying to have one person who struggled with it in an earlier project and one who understood the subject well so that we could all learn from each and other.

<img src="https://i.imgur.com/tYBMsy3.png">
<img src="https://i.imgur.com/yYXQNpH.png">
<img src="https://i.imgur.com/iWQ0E7y.png">
<img src="https://i.imgur.com/3vJ72xe.png">
<img src="https://i.imgur.com/ZFA9gIp.png">


## 3rd - 6th Day

I started working on the homepage and getting a random museum to display every time the user loads the home page (similar to my previous project <a href="https://rapidgames.netlify.app">here</a>). 
I worked differently this time because I wasn’t using params to find the id. Instead, it was easier because I only had to use math.random after the data that was being pulled in. I then worked on the top half of the page by adding a nice background with the website logo and a short description. I made the homepage using Bulma and its Hero component. I then got animations going with <a href="https://animate.style">Animate</a> for the first time to have the logo/description pulse by adding 3 classes to the homepage logo and description div. I then also worked on changing every image in the museum database so that we had the best possible pictures to represent the museum. I looked up every single museum (approximately 20 museums) and found images, uploaded every single one on my Imgur and inserted them into the database to then seed the database.

<img src="https://i.imgur.com/nRelBTt.gif">
<img src="https://i.imgur.com/rohCD9i.png">
<img src="https://i.imgur.com/00VuIWH.png">



## 7th - 8th Day

I worked on perfecting the homepage as well as making the exhibits page. This was a bonus so we didn’t put a standout exhibit into the backend. I added an exhibit from every museum into its corresponding object. I gave it two new values: the exhibit name and an exhibit image. I then made a whole page dedicated to all exhibits and when you click on the exhibit, it leads you to the museum which owns the exhibit. The way this works is that since the exhibit is in the museum's object, it just takes the id of its object and takes it to the museum page. To the homepage I made the filter for filtering museums pop out of the navbar and rounded it. I added a lot of saturation to the background image to really get the colours to pop out. I also made a parallax effect working with the background image of the homepage by telling it to stay fixed.
[background-image: fixed;]

<img src="https://i.imgur.com/4anjuIS.png">
<img src="https://i.imgur.com/Fn0fy0f.png">


## 9th day

On the last day, I added some of styling with vanilla CSS and error handling for the homepage and the exhibits page. The error handling is all in the Axios request, if there is an error in the get request it will display “Something went wrong, please refresh the page” but if the request is fine it will display all the things I’ve added to the website so far. I added some custom animations to all the cards on the exhibits and the “all museums” page with a simple transition to transform and then scale using vanilla CSS. The animations I added on the navbar work on transition, transform padding and opacity. I also made it so that when you hover over the navbar which contains other items it blurs out all the other items in the area, easier to show than to explain but this works by modifying the parent element of the items and decreasing the opacity of the other items around while the hovered item’s opacity become clearer in CSS. I even added a parallax effect on the background image of the exhibit page the same way I did for the homepage with just vanilla CSS.

<img src="https://i.imgur.com/NS9i0vF.gif">

## Wins and Challenges

### Wins:
<ul>
<li>Working in a group of 4 was great because it was fun to exchange ideas and develop them.</li>
<li>I learnt a lot about styling/CSS.</li>
<li>Learning how to use Animate.</li>
</ul>

### Challenges:

<li>Getting the animations on the navbar because we used Bulma for the navbar and I had to change the structure of it in HTML.</li>
<li>Getting a parallax effect because I didn’t understand how to do it and looked at many sites to try and find the answer.</li>
<li>Getting used to React because I didn’t understand it so well but at the end of the project it made a lot more sense to me.</li>

## Bugs

<li>There is currently a bug with the deployed version which is that you cannot create an account.</li>
<li>The museum map doesn’t always work.</li>

## Key Learning

At this point in the course, I was struggling a lot with React, luckily this project gave me a lot more experience and taught me more about react logic and how it differs from JS. During this project, I did a lot of playing around with CSS and I enjoyed it very much! I’ve also learned how to properly write commit messages to GithubMongoDB.


