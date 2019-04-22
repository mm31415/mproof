# Search App - Using React Hooks and CSS Grid

1.  You will need to attain an apiKey from https://rapidapi.com/contextualwebsearch/api/web-search  
2.  Create a ```secret.js``` file for values being used by ```fetchData.js```:  
-- ```API_KEY = <value_from_rapid_api>```  
-- ```API_HOST = 'contextualwebsearch-websearch-v1.p.rapidapi.com'```   
-- ```API_URL = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=true&pageSize=20&safeSearch=true'```  
3.  Run ```npm start```  
4.  Enjoy!

## Features

1. Fetch Data from API and display in corresponding lists
2. Create a responsive layout using CSS Grid
3. Use React Hooks to dry up code and employ the stateful functional components
4. Provide pagination with cached results so as not to refetch pages already visited
5. (in progress) Implement AutoComplete with throttling/debouncing
6. (in progress) Create reusable components, such as Button
7. (pending) Implement persistence through use of localstorage
8. (pending) Improve UX


LoadingIndicator is not mine. I just modified the code from: https://loading.io/css/

## The power of React Hooks

Before Using Hooks:
```
const search = (searchVal) => {
  setLoading(true);

  if (searchVal) {
    setPageNumber(1);
    setMaxPage(null);
    setSearchValue(searchVal);
  }

  const values = {
    pageNumber: searchVal ? 1 : pageNumber,
    searchValue: searchVal || searchValue
  };

  fetchData(values.pageNumber, values.searchValue)
    .then(res => res.json())
    .then(data => {
      if (pageNumber > 1) setSearchItems([...searchItems, ...data.value]);
      else setSearchItems(data.value)

      setRelatedItems(data.relatedSearch);
      if (data.value.length < 20) setMaxPage(pageNumber);
      setLoading(false);
    })
    .catch(err => console.log(err));
};
```
After using Hooks:
```
useEffect(() => {
  if (searching) search();
}, [searching]);

const search = () => {
  fetchData(pageNumber, searchValue)
    .then(res => res.json())
    .then(data => {
      if (pageNumber === 1) {
        setSearchItems(data.value);
        setRelatedItems(data.relatedSearch);
      }
      else setSearchItems([...searchItems, ...data.value]);

      if (data.value.length < 20) setMaxPage(pageNumber);
      setSearching(false);
      setLoading(false);
    })
    .catch(err => console.log(err));
};

const handleNewSearch = (value) => {
  setLoading(true);
  setPageNumber(1);
  setMaxPage(null);
  if (value) setSearchValue(value);
  setSearching(true);
};

const handlePaginate = (action) => {
  const newPage = action === 'next' ? pageNumber + 1 : pageNumber - 1;

  if (!searchItems[(newPage - 1) * 20]) {
    setLoading(true);
    setSearching(true);
  }
  setPageNumber(newPage);
}
```

One thing to note is the "before" version of ```search()``` was unfinished.  Essentially ```search()``` was beginning to care too much about what was happening within different components rather than just focus on fetching data.  By using the ```useEffect``` hook I was able to remove and extract the extra logic and concerns the ```search()``` would have had.  

## The Power of CSS Grid  

The responsive layout was created using CSS Grid, Media Queries, and a bit of Flexbox.

#### Desktop:  
![](./gifs/large.gif)  

#### Resize:  
![](./gifs/resize.gif)

#### Mobile
![](./gifs/mobile.gif)
