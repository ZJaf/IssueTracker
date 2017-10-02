# IssueTracker
Front-End Project

## Using HTML - CSS - JS - JQuery  to build a basic Issue tracker :rocket:

### Pseudo code:
```javascript
Sub Submit-Issue()
  Create an Obj Issue,
  Collect Issue Fields,
  Generate ID,
  Create HTML-Container in IssueList,
  Clear fields
End

Sub Close-Issue()
  Change open lbl to closed
End

Sub Delete-Issue()
  Rm HTML-Container from the IssueList
End
```

![](https://media.tenor.com/images/dd6b9d90eb85a6aaa3ad680960ffccc1/tenor.gif)


# Updated Pseudo - From THE TEACHER :D
//--Display your list --//
0) Create a function that runs as soon as the page loads
1) check to see if you have an issues object in local storage, 
2) if you have something in localstorage then parse it using JSON.parse(localStorage.getItem('issueList');
3) Loop through this and display your list by passing each item through a template much like you did in the work shop

//--Add item to local storage --//
1) if the localstorage is null, create an empty array called issues e.g. var issues = [], push your new item to this, then use localStorage.setItem(issues)  to start storing it in local storage
2) if the localstorage has something in it already, parse localstorage and assign it to a variable, push your new item into it then "set" it in localstorage 
3) update the list by calling the function you created before
