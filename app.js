//---- Deleting the Issue
function removeIssue(id) {
    $('#' + id).remove();
}

//---- Closing the Issue
function closeIssue(id) {
    $('#' + id + '-status').html('Closed');
}

$(document).ready(function() {
    var list = [];
    //-- Submiting a ticket - Function:
    $('form').on('submit', function(e) {
        e.preventDefault();
        var issue = {}; //--- Defining Ticket as an object
        issue.text = $('#exampleInputIssue').val();
        issue.assignee = $('#exampleInputAssignee').val();
        issue.sev = $('#exampleFormControlSelect1').val();
        issue.id = chance.guid(); //-- Generate Unique ID

        //--  generating Ticket
        var issueTemplate = `
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
        list.push(issue.id);
        //-- add ticket to the list of Issues
        $('#issueList').append(issueTemplate);
        //--- Empty the fields
        $('#exampleInputIssue').val('');
        $('#exampleInputAssignee').val('');
        $('#exampleFormControlSelect1').val(''); //--- ?? May have a better way !
    })
})