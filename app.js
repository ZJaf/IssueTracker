$(document).ready(function() {
    //-- Submiting a ticket - Function:
    $('form').on('submit', function(e) {
        e.preventDefault();
        var issue = {}; //--- Defining Ticket as an object
        issue.text = $('#exampleInputIssue').val();
        issue.assignee = $('#exampleInputAssignee').val();
        issue.sev = $('#exampleFormControlSelect1').val();
        issue.id = chance.guid(); //-- Generate Unique ID
        // console.log(issue.text, issue.assignee);   //-- Testing object with Console


        //--  generating Ticket
        var issueTemplate = `
        <section class="ticket">
        <div>
            <p>Issue ID:${issue.id}</p>
            <label class="btn btn-primary btn-sm" Style="background-color:blue; border-color:blue "> Open </label>
            <h3>${issue.text}</h4>
                <p><i class="fa fa-clock-o" aria-hidden="true"></i>${issue.sev}</p>
                <p><i class="fa fa-user-circle" aria-hidden="true"></i>${issue.assignee}</p>
                <button type="button " class="btn btn-warning btn-lg ">Close</button>
                <button type="button " class="btn btn-danger btn-lg ">Delete</button>
        </div>
        </section>
        `
            //-- add ticket to the list of Issues
        $('#issueList').append(issueTemplate);
        //--- Empty the fields
        $('#exampleInputIssue').val('');
        $('#exampleInputAssignee').val('');
        //--- ?? May have a better way !
        $('#exampleFormControlSelect1').val('');

    })

})