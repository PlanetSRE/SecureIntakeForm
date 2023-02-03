// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    //$("#customService").hide();

    //$('#bRequireServiceOther').change(function () {
    //    if ($(this).prop("checked")) {
    //        $("#customService").show();
    //        ValidatorEnable(document.getElementById('<%=customService.ClientID%>'), true);
    //    }
    //    else {
    //        $("#customService").hide();
    //        ValidatorEnable(document.getElementById('<%=customService.ClientID%>'), false);
    //    }
    //});

    //$("#IntakeForm_Name").tooltip();
    //$("#IntakeForm_Email").tooltip();
    //$("#IntakeForm_GrantNumber").tooltip();
    //$("#IntakeForm_CuiOrItarRestrictedData").tooltip();
    //$("#IntakeForm_NewOrExistingResearch").tooltip();
    //$("#IntakeForm_MaxTechBudget").tooltip();
    //$("#IntakeForm_ProjectOverview").tooltip();
    //$("#IntakeForm_RequireThirdPartyAccess").tooltip();
    //$("#lblResources").tooltip();

    var tooltips = $("[title]").tooltip({
        position: {
            my: "left top",
            at: "right+5 top-5",
            collision: "none"
        }
    });
});