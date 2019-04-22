A Basic Search App I created to learn how to use React Hooks and CSS Grid.

1)  You will need to attain an apiKey from https://rapidapi.com/contextualwebsearch/api/web-search
2)  Setup a ```secret.js``` file with values imported in ```fetchData.js```
3)  Run ```npm start```
4)  Enjoy!


LoadingIndicator is not mine. I just modified the code from: https://loading.io/css/

The power of React Hooks

```const search = (searchVal) => {
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
};```  
