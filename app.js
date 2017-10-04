//localStorage.clear();
var issue = {}; //--- Defining Ticket as an object
issue.text;
issue.assignee;
issue.sev;
issue.id;

var issueTemplate = "";
var storeList = [];
//--- empty fields

function emptyFields() {
    $('#exampleInputIssue').val('');
    $('#exampleInputAssignee').val('');
    $('#exampleFormControlSelect1').val('');
}

//--  generating Ticket
function printIssue(issue) {

    issueTemplate = `
<section class="ticket" id="${issue.id}">
<div>
    <p>Issue ID:${issue.id}</p>
    <label id="${issue.id}-status" class="btn btn-primary btn-sm" id="label" Style="background-color:blue; border-color:blue "> Open </label>
    <h3>${issue.text}</h4>
    <p><i class="fa fa-clock-o" aria-hidden="true"></i>${issue.sev}</p>
    <p><i class="fa fa-user-circle" aria-hidden="true"></i>${issue.assignee}</p>
    <input type="submit" class="btn btn-warning btn-lg" value="Close" onclick="closeIssue('${issue.id}')"/>
    <button class="btn btn-danger btn-lg" onclick="removeIssue('${issue.id}')">Delete</button>
</div>
</section>
`
    $('#issueList').append(issueTemplate); //-- add ticket to the list of Issues
}

//---- Deleting the Issue
function removeIssue(id) {
    $('#' + id).remove();
}

//---- Closing the Issue
function closeIssue(id) {
    $('#' + id + '-status').html('Closed');
}

$(document).ready(function() {
    //-- Storage checking
    if (typeof(Storage) !== "undefined") {


        // If there are tickets in the memory
        if (localStorage.length !== 0) {
            console.log("you have some issues"); //LOGGING                
            storeList = JSON.parse(localStorage.getItem('storeList'));
            for (var counter = 0; counter < storeList.length; counter++) {
                printIssue(storeList[counter]);
            }
            $('form').on('submit', function(e) {
                e.preventDefault();

                //creat an obj for issue
                issue.text = $('#exampleInputIssue').val();
                issue.assignee = $('#exampleInputAssignee').val();
                issue.sev = $('#exampleFormControlSelect1').val();
                issue.id = chance.guid(); //-- Generate Unique ID

                storeList.push(issue);
                localStorage.setItem('storeList', JSON.stringify(storeList));
                printIssue(issue);
                emptyFields();

            })

            // If there is no ticket in the memory
        } else if (localStorage.length == 0) {
            console.log("you have no issue in your storage"); //LOGGING
            //-- Submiting a ticket - Function:
            $('form').on('submit', function(e) {
                e.preventDefault();

                //creat an obj for issue
                issue.text = $('#exampleInputIssue').val();
                issue.assignee = $('#exampleInputAssignee').val();
                issue.sev = $('#exampleFormControlSelect1').val();
                issue.id = chance.guid(); //-- Generate Unique ID
                storeList.push(issue);

                localStorage.setItem('storeList', JSON.stringify(storeList));
                printIssue(issue);
                emptyFields();

            })


        }

    } else {
        alert("Sorry! No Web Storage support..");
    }

})