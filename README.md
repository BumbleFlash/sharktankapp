# sharktankapp

This is the backend repository as part of an assignment.

# APIs

1) GET ALL DATA [API1](https://sharktankapp.herokuapp.com/data/getAllData) METHOD: GET
   This api gets all the data from the database. The client calls this API when no filter is provided. 
   
2) GET FILTERED DATA [API2](https://sharktankapp.herokuapp.com/data/getFilteredData) METHOD: POST
   This api gets data according to filters provided in the request body of the API.
   
   Sample:
```json
   {
  "season":"2",
  "episode":"1",
  "investor":"",
  "amount":"",
  "gender":""
   } 
```

3) GET DISTINCT SEASONS [API3](https://sharktankapp.herokuapp.com/data/getDistinctSeasons) METHOD: GET
   
   This api gets distinct seasons provided in the database to populate the drop down box in the front end.
   
4) GET DISTINCT INVESTORS [API4](https://sharktankapp.herokuapp.com/data/getDistinctInvestors) METHOD: GET  
   This api gets distinct investors provided in the database to populate the drop down box in the front end.

5) GET DISTINCT AMOUNT [API5](https://sharktankapp.herokuapp.com/data/getDistinctAmount) METHOD: GET  
   This api gets distinct amount provided in the database to populate the drop down box in the front end.
   
