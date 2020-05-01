# pagebypage

[space_gif](https://gph.is/1UPlgSa)


  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)



### Overview

_**Page by Page** is your new favorite book app! Search for your favorite author or book and add it to your wish list!

The app will have search bar that allows you too look up books by author or title. The results will display with the book cover and title, with the book itself being a link to more detailed information. The site will be using local storage to allow the user to store a wishlist of books they are interested in for future reference. _

<br>

### Wireframes



![Desktop](wireframes/Pagebypage_desktop.png)

- Desktop 

![Tablet](wireframes/Pagebypage_tablet.png)

- Tablet 

![Mobile](wireframes/Pagebypage_mobile.png)

- Mobile 

<br>

### MVP

-_Create a search bar to search for books by title or author_<br>
-_Use a book api to add a library of books_<br>
-_Make a local storage that allows user to store their books on a wish list_

<br>

#### Goals

My goals for this project are to successfully call and render the api information and data. To have the user be able to easily interact with the site and its capabilites and be able to build this up as a digital bookshelf with commenting and user/login in the future.

<br>

#### Libraries



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   |  Using router to direct to different pages.   |
|     Link         |Will be using to link the pages to each other.   |
|    Storybook              |     Designed reusable components                          |

<br>

#### Data



|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Goodreads |           |    https://www.goodreads.com/api/index#author.books          |                                         |

<br>

#### Component Hierarchy


```
src
|__ assets/
      |__ tests
      |__ fonts
      |__ images
      |__ wireframes
|__ components/
      |__ Header.jsx
      |__ Nav.jsx
      |__ Search Bar.jsx
      |__ Books images/links.jsx
      |__ page link.jsx
      |__ Footer.jsx
```

<br>

#### Component Breakdown



|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | function |  Y |    Y | _Will have page title._               |
|  Home  |  Button |  Y  |  Y | _Will provide links to separate components/pages_       |
|   Book Images/links   |  function    |Y   | Y     | _This will be the results provided by the api._      |
|Page Links  | Route/Link |   Y  | Y    | _Link function for the results when they have multiple pages_                 |
|    Footer    |  |     |     | _Copyright info._ |

<br>

#### Component Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Pseudo code Home   |    H     |     3 hrs      |     2hrs    |    2hrs   |
| Pseudo code book showpage |    H     |     3 hrs      |     3hrs     |     3hrs     |
| Base code home              |   H       |     6 hrs      |     7hrs     |     7hrs    |
| Base code bookshowpage               |     H     |     6 hrs      |     6 hrs      |    6hrs     |
| Add header            |       L   |     3 hrs      |     3 hrs      |     3 hrs      |
| Add footer              |      L    |     3 hrs      |     3 hrs       |     3 hrs      |
| Api            |      H    |     6 hrs      |     8hrs    |     8hrs     |
| Link Pages              |   H       |     6 hrs      |    7hrs    |     7hrs     |
| Base CSS               |     H     |    6 hrs      |     8hrs    |     8hrs     |
| Storybook              |        H  |     8 hrs      |     10hrs    |     10hrs    |
| Finish CSS HOME              |   H       |     8 hrs      |     6hrs    |     6hrs      |
| Finish CSS BOOK              |    H      |     8 hrs      |     6hrs      |     6hrs     |
| TOTAL               |          |     70 hrs      |     69hrs     |     69hrs     |
<br>

#### Helper Functions



|  Function  | Description                                |
| :--------: | :----------------------------------------- |
|            | |

<br>

#### SWOT- Analysis
 
 My plan to overcome my weaknesses and threats are to utilize google,  reach out for aid from my classmates and using the information I have learned about React thus far. I know programming is a lot of trial and error, I plan to try and figure out the issues in a timely manner and if that cannot be done on my own to ask from aid from the listed resources.  


<br>

### Post-MVP

- _Add user accounts
- _Add the ability for the user to create their own bookshelves
- _Add review capabilites <br>
-_Add links to site to purchase books <br>
-_ Add a drop down menu for genre choices

<br>

***

## Project Delivery
https://pagebypage.netlify.app
### Code Showcase
```
import React from 'react';
import Button from './Button';


 const SearchBar = (props) =>
 
     (
        <div>
            <form style={props.style}>
                <input type="text"
                    placeholder="author name or title"
                    value={props.input}
                    onChange={props.onChange}
                    >
                </input>   
            </form>
                
        </div>
    )

export default SearchBar
```

### Code Issues & Resolutions
- Mobile and Tablet views will render sometimes and break others, it seems to be a browser issue.
-Trying to Link and Route new components was challenging.
-Trying to get storybook off the ground, ended up reaching for help and using class documentation and videos.
>
