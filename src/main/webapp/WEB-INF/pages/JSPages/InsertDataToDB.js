
//////////////////////////////////***********Insert New Item To Data-Base***********////////////////////////////////////////
var BaseURL = "http://localhost:8080/BEAT-PD/Admin/Add";
function AddNewItemsToDB()
{

 if($("#ActivitiesTab")[0].parentElement.classList[0] == "active")
 {
   AddNewActivityToDB();
 }

  if($("#HabitsTab")[0].parentElement.classList[0] == "active")
  {
   AddNewHabitToDB();
  }

  if($("#MedicineTab")[0].parentElement.classList[0] == "active")
   {
    AddNewMedicineToDB();
   }

   if($("#SleepTab")[0].parentElement.classList[0] == "active")
 {
   if($("#lblHead").text() == 'איכות שינה')
      InsertNewSleepQualityToDB();
    if($("#lblHead").text() == 'הפרעות שינה')
      InsertNewSleepDisorderToDB();

 }

   if($("#MoodTab")[0].parentElement.classList[0] == "active")
 {
     InsertMoodToDB();
 }

   if($("#LinksTab")[0].parentElement.classList[0] == "active")
 {
    insertNewLinkToDB();
 }

  if($("#PatientTab")[0].parentElement.classList[0] == "active")
 {
    InsertNewPatientToDB();

 }



}

//insert NewActivity
function AddNewActivityToDB()
{

var ActivityName =  $("#txtName").val();
var ac = new Activity();
ac.activityName = ActivityName;

 var SubMenuArr = [];
$("#ddlSubMenu option").each(function () {
    SubMenuArr.push($(this).text());
});

var sm = [new subMenu()];
   for(var i = 0; i< SubMenuArr.length ;i++ )
  {
    sm[i] = new subMenu();
    sm[i].subMenu = SubMenuArr[i];
   }

ac.subMenus = sm;
var myJSON = JSON.stringify(ac);

$.ajax({
            url: BaseURL + "/Activity",
            cache: false,
            type: "POST",
            data: myJSON,
            async:false,
            contentType: "application/json;charset=utf-8",
            complete: function() {
                if(response.status!==200){
                    alert('Error from server:' + response.status)
                }
}
        });


var modal = document.getElementById('myModal');
modal.style.display = "none";
location.reload();
}



//insert NewHabit
function AddNewHabitToDB()
{
var HabitName =  $("#txtName").val();
var ac = new Habit();
ac.habitName = HabitName;

  if($("#lblType").text() == 'Up')
  {
      ac.groupID = "0";
  }
  else
  {
      ac.groupID = "1";
  }


 var SubMenuArr = [];
$("#ddlSubMenu option").each(function () {
    SubMenuArr.push($(this).text());
});

var sm = [new subMenu()];
   for(var i = 0; i< SubMenuArr.length ;i++ )
  {
    sm[i] = new subMenu();
    sm[i].subMenu = SubMenuArr[i];
   }


ac.subMenus = sm;
var myJSON = JSON.stringify(ac);
var mydata2 = JSON.parse(myJSON);

$.ajax({
            url: BaseURL + "/Habit",
            cache: false,
            type: "POST",
            data: myJSON,
            async:false,
            contentType: "application/json;charset=utf-8",
            complete: function() {
                if(response.status!==200){
                    alert('Error from server:' + response.status)
                }
}
        });


var modal = document.getElementById('myModal');
modal.style.display = "none";
location.reload();

}


//insert NewMedicine
function AddNewMedicineToDB()
{

   var medicineObject = new Medicine();
   medicineObject.medicineName = $("#txtMedicineName").val();
     medicineObject.medicineSerialNumber = $("#txtMedicineSerial").val();
       medicineObject.medicineLimitation = $("#txtMedicineLimitation").val();
         medicineObject.info = $("#txtMedicineInfo").val();


var myJSON = JSON.stringify(medicineObject);

$.ajax({
            url: BaseURL + "/Medicine",
            cache: false,
            type: "POST",
            data: myJSON,
            async:false,
            contentType: "application/json;charset=utf-8",
            complete: function() {
                if(response.status!==200){
                    alert('Error from server:' + response.status)
                }
}
        });

var MedicineModal = document.getElementById('MedicineModal');
MedicineModal.style.display = "none";
location.reload();
}


//insert SleepQuality
function InsertNewSleepQualityToDB()
{


   var SleepQualityObject = new SleepQuality();
   SleepQualityObject.sleepQualityName = $("#txtName").val();

var myJSON = JSON.stringify(SleepQualityObject);

$.ajax({
            url: BaseURL + "/SleepQuality",
            cache: false,
            type: "POST",
            data: myJSON,
            async:false,
            contentType: "application/json;charset=utf-8",
            complete: function() {
                if(response.status!==200){
                    alert('Error from server:' + response.status)
                }
}
        });

var modal = document.getElementById('myModal');
modal.style.display = "none";
location.reload();

}

//insert
function InsertNewSleepDisorderToDB()
{


   var SleepDisorderObject = new SleepDisorder();
   SleepDisorderObject.sleepDisorderName = $("#txtName").val();
   var myJSON = JSON.stringify(SleepDisorderObject);

$.ajax({
            url: BaseURL + "/SleepDisorder",
            cache: false,
            type: "POST",
            data: myJSON,
            async:false,
            contentType: "application/json;charset=utf-8",
            complete: function() {
                if(response.status!==200){
                    alert('Error from server:' + response.status)
                }
}
        });


var modal = document.getElementById('myModal');
modal.style.display = "none";
location.reload();


}

function InsertMoodToDB()
{

   var MoodConditionObject = new MoodCondition();
   MoodConditionObject.moodConditionName = $("#txtName").val();
   var myJSON = JSON.stringify(MoodConditionObject);

$.ajax({
            url: BaseURL + "/MoodCondition",
            cache: false,
            type: "POST",
            data: myJSON,
            async:false,
            contentType: "application/json;charset=utf-8",
            complete: function() {
                if(response.status!==200){
                    alert('Error from server:' + response.status)
                }
}
        });


var modal = document.getElementById('myModal');
modal.style.display = "none";
location.reload();


}

function insertNewLinkToDB()
{

    var LinkObject = new Link();
      LinkObject.linkHeadLine = $("#txtName").val();
      LinkObject.linkURL = $("#txtLinkUrl").val();
      var myJSON = JSON.stringify(LinkObject);


$.ajax({
            url: BaseURL + "/Link",
            cache: false,
            type: "POST",
            data: myJSON,
            async:false,
            contentType: "application/json;charset=utf-8",
            complete: function() {
                if(response.status!==200){
                    alert('Error from server:' + response.status)
                }
}
        });



var modal = document.getElementById('myModal');
modal.style.display = "none";
location.reload();

}

function InsertNewPatientToDB(){
    var patient = new Patient();
    patient.patientPass = patient.patientID = $("#txtIDPatient").val();
    patient.patientFirstName = $("#txtPrivateNamePatient").val();
    patient.patientLastName = $("#txtLastPatient").val();
    patient.patientAge = $("#txtAgePatient").val();
    patient.patientStatus = $("#txtStatusPatient").val();

    var jsonToSend = JSON.stringify(patient);
    $.ajax({
            url: BaseURL + "/Patient",
            cache: false,
            type: "POST",
            data: jsonToSend,
            async:false,
            contentType: "application/json;charset=utf-8",
            complete: function(response){
            if(response.status!==200){
                alert('Error from server:' + response.status)
            }
        }
    });

var AdminUsersModal = document.getElementById('AdminUsersModal');
AdminUsersModal.style.display = "none";
    location.reload();
}

function AddNewAdminUserToDB()
{

   var user = new User();
    user.id = $("#txtAdminUserId").val();
    user.name = $("#txtAdminUserName").val();
    user.pass = $("#txtAdminUserId").val();
    user.role = "Admin";


    var jsonToSend = JSON.stringify(user);
    $.ajax({
            url: BaseURL + "/User",
            cache: false,
            type: "POST",
            data: jsonToSend,
            async:false,
            contentType: "application/json;charset=utf-8",
            complete: function(response){
            if(response.status!==200){
                alert('Error from server:' + response.status)
            }
        }
    });

    location.reload();




}

//////////////////////////////////////////////*******************************//////////////////////////////////////////



///////////////////////////////////////////************Control The Models PopUp Visibility**********///////////////////
function AddNewItemSleepQuality()
{
document.getElementById("divForPatient").style.display='none';
   document.getElementById("txtNameGeneral").style.display='block';
 $("#lblHead").text('איכות שינה');
 document.getElementById("ModalBody").style.display='none';
    document.getElementById("divForLinksUrl").style.display='none';
        modal.style.display = "block";

}

function AddNewItemUp()
{
document.getElementById("divForPatient").style.display='none';
   document.getElementById("txtNameGeneral").style.display='block';
   $("#lblHead").text('ביום-יום');
   $("#lblType").text('Up');
    document.getElementById("divForLinksUrl").style.display='none';
     document.getElementById("ModalBody").style.display='block';
     modal.style.display = "block";

}

function AddNewItemDown()
{
document.getElementById("divForPatient").style.display='none';
   document.getElementById("txtNameGeneral").style.display='block';
   $("#lblHead").text('ביום-יום');
    $("#lblType").text('Down');
     document.getElementById("divForLinksUrl").style.display='none';
      document.getElementById("ModalBody").style.display='block';
     modal.style.display = "block";
}


function AddNewItem()
{

 if($("#ActivitiesTab")[0].parentElement.classList[0] == "active")
 {
   $("#lblHead").text('פעילויות');
   document.getElementById("divForPatient").style.display='none';
   document.getElementById("txtNameGeneral").style.display='block';
    document.getElementById("ModalBody").style.display='block';
      document.getElementById("btnAddNewActivity1").style.display='block';
         document.getElementById("btnUpdatePatient").style.display='none'
        document.getElementById("divForLinksUrl").style.display='none';
    modal.style.display = "block";
 }

  if($("#MedicineTab")[0].parentElement.classList[0] == "active")
 {
   $("#lblHead").text('תרופות');
    document.getElementById("ModalBody").style.display='block';
       document.getElementById("btnAddNewActivity1").style.display='block'
          document.getElementById("btnUpdatePatient").style.display='none'
    document.getElementById("divForLinksUrl").style.display='none';
    MedicineModal.style.display = "block";
 }

   if($("#SleepTab")[0].parentElement.classList[0] == "active")
 {
   $("#lblHead").text('הפרעות שינה');
   document.getElementById("divForPatient").style.display='none';
      document.getElementById("txtNameGeneral").style.display='block';
      document.getElementById("ModalBody").style.display='none';
         document.getElementById("btnAddNewActivity1").style.display='block'
            document.getElementById("btnUpdatePatient").style.display='none'
      document.getElementById("divForLinksUrl").style.display='none';

    modal.style.display = "block";
 }

   if($("#MoodTab")[0].parentElement.classList[0] == "active")
 {
   $("#lblHead").text('מצב-רוח');
   document.getElementById("divForPatient").style.display='none';
      document.getElementById("txtNameGeneral").style.display='block';
    document.getElementById("ModalBody").style.display='none';
      document.getElementById("btnAddNewActivity1").style.display='block'
     document.getElementById("btnUpdatePatient").style.display='none'
     document.getElementById("divForLinksUrl").style.display='none';
    modal.style.display = "block";
 }

   if($("#LinksTab")[0].parentElement.classList[0] == "active")
 {
   $("#lblHead").text('לינקים');
   document.getElementById("divForPatient").style.display='none';
      document.getElementById("txtNameGeneral").style.display='block';
    document.getElementById("ModalBody").style.display='none';
       document.getElementById("btnAddNewActivity1").style.display='block'
          document.getElementById("btnUpdatePatient").style.display='none'
     document.getElementById("divForLinksUrl").style.display='block';
    modal.style.display = "block";
 }
if($("#PatientTab")[0].parentElement.classList[0] == "active")
 {
 $("#lblHead").text('מטופלים');

document.getElementById("txtIDPatient").disabled = false;
   $("#txtIDPatient").val("");
   $("#txtPrivateNamePatient").val("");
   $("#txtLastPatient").val("");
   $("#txtAgePatient").val("");
   $("#txtStatusPatient").val("");

 document.getElementById("divForPatient").style.display='block';
 document.getElementById("divForPatientPass").style.display='none';
 document.getElementById("ModalBody").style.display='none';
    document.getElementById("btnAddNewActivity1").style.display='block'
     document.getElementById("btnUpdatePatient").style.display='none'
  document.getElementById("txtNameGeneral").style.display='none';
 document.getElementById("divForLinksUrl").style.display='none';
 modal.style.display = "block";
 }

 if($("#AdminUsersTab")[0].parentElement.classList[0] == "active")
  {
   $("#txtAdminUserId").val("");
   $("#txtAdminUserName").val("");

      $("#lblHeadAdminUsers").text('הוספת מנהל חדש');
      document.getElementById("txtAdminUserId").disabled = false;
      document.getElementById("btnAddNewAdminUser").style.display='block';
      document.getElementById("btnUpdateAdminUser").style.display='none';
      document.getElementById("divUpdateAdminUserPass").style.display='none';
      AdminUsersModal.style.display = "block";
  }


}


/////////////////////////////////////////////////****************************//////////////////////////////////////////