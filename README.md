# About the project

This is Randa ahmed's  myreads project this app can be  used to search for bokks and select the one you want to read than you can filter the books on the shelfs if it's read or currently reading or want to read. 
It contains 2 pages:
1- the first page has three shelf one for the books that are currently reading the other is for the read books and the last one is for the bokks that you want to read. Each book has a drop down list you can choose from it's state there is a plus sign also in the first page used to link to the second page to search for books and add them.
2- In the second page there is an input field to search for books once you type the name of the books all the books that has this word will show up max 20 books.

# Get started
install node.js if you don't have it you can download it here: Node.js

-Clone the project from my github

- npm intall to install all the dependencies

- then npm start to start the server 
-A new browser window should automatically open displaying the app. If it doesn't, navigate to http://localhost:3000/ in your browser


# The project hiraricay 
App.js contains all he api calls and setting the main states for other components.
I devided the project to 4 other component:
1. the book it self  and it's drope down list in book.js
2. the main page the shelfs in it in mainList.js
3. the searchPage containg the search bar and hheandling the user query, in SearchPage.js
4. Each shelf of books in shelfOfBook.js

Method:
- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

# Note

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.



# Resources:
https://www.freecodecamp.org/news/how-to-use-props-in-react/
https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
https://reactjs.org/docs/hooks-effect.html
https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/
https://javascript.plainenglish.io/how-to-implement-a-search-bar-in-react-js-8cf8f5513b8e