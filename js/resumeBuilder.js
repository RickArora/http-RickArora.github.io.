var bio = {

	"Name":"Ricky Arora",
	"Role": "FRONTEND WEB DEVELOPER",
	"welcomeMessage": "Welcome to my website. Here you will find a copy of my resume. Link to my Contact Information, Github Account & Projects I have completed.",
	"Skills": ["Bootstrap", "HTML", "Javascript", "CSS", "jQuery", "HTML5", "bug Test"] ,
	"contact" : {

		"Cellphone" : "647-287-3777  ",
		"emailAddress" : "rickprogramming@gmail.com  ",
		"Github" : "https://github.com/RickArora/",
		"twitter" : "@RickProg  ",
		"location" : " Brampton, Ontario",
		"Biopic" : "Images/Twitcon.jpg"
	
	}
};


bio.display = function() {

if (bio.Skills.length > 0) { 
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.Skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.Skills[1]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%", bio.Skills[2]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%", bio.Skills[3]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%", bio.Skills[4]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%", bio.Skills[5]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%", bio.Skills[6]);
	$("#skills").append(formattedSkill);
	}
}


var formattedName = HTMLheaderName.replace("%data%", bio.Name);
var formattedRole = HTMLheaderRole.replace("%data%", "FRONTEND WEBDEVELOPER");
var formattedWel = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.Cellphone);
var formattedemail = HTMLemail.replace("%data%", bio.contact.emailAddress);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedgithub = HTMLgithub.replace("%data%", bio.contact.Github);
var formattedlocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedbipic = HTMLbioPic.replace("%data%", bio.contact.Biopic);
var formattedskills = HTMLskills.replace("%data%", bio.Skills);
var formattedskillsStart = HTMLskillsStart.replace("%data%", bio.Skills);

$("#header").prepend(formattedWel);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedemail);
$("#header").prepend(formattedtwitter);
$("#header").prepend(formattedgithub);
$("#header").prepend(formattedlocation);
$("#header").prepend(formattedbipic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// END OF BIO 

bio.display()


var projects = {
	"Projects": [
		{
			"Title": "Portfolio Website",
			"Site": "www.RickyArora.com", 
			"Dates": "2015",
			"Description": "Built the basis of my portfolio website using bootstrap, html5 & css.",
		"Images": [
		"Images/p1.png"]

		}
	]
}


projects.display = function() {
	for (project in projects.Projects) {
		$('#projects').append(HTMLprojectStart)		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.Projects[project].Title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.Projects[project].Dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.Projects[project].Description);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.Projects[project].Images);
		var formattedDescriptionImage = formattedImage + formattedDates + formattedDescription + formattedTitle;

		$("#projects").append(formattedDescriptionImage); 
	}
}
projects.display();

var work = {
	"jobs": [
	{
		"employer": "JH Computers",
		"title": "Computer Technician",
		"dates": "March 2015 - July 2015 (Co-Op Position)",
		"description": "Repaired Computers by testing hard drives, testing all the hardware, installing programs and reformatting Computers. Also assisted with customer service.",
		"location": "50 Kennedy Rd S, Brampton, ON L6W 3E7, Canada"
		}
	]
}

work.display = function() {

	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDateDescription = formattedLocation + formattedDate + formattedDescription;
	$(".work-entry:last").append(
		formattedEmployerTitle);
	$(".work-entry:last").append(
		formattedDateDescription);
	}

};

work.display();


var education = {
    "schools": [
        {
            "name": "Sheridan College",
            "degree": "Computers Systems Technician (Complete in - 2017)",
            "location": "Sheridan College, Brampton, Ontario, Canada",
            "major": "Computer programming",
            "dates": "2015-2017"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to HTML & CSS",
            "school": "Udacity",
            "year": "2015",
            "url": "www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title": "How to use Git & Github",
            "school": "Udacity",
            "year": "2015",
            "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            "title": "Responsive Images",
            "school": "Udacity",
            "year": "2015",
            "url": "https://www.udacity.com/course/responsive-images--ud882"
        },
        {
            "title": "Responsive Web Design Fundumentals",
            "school": "Udacity",
            "year": "2015",
            "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
        },
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "year": "2015",
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
        }
    ]
}

education.display = function() {

$("#education").append(HTMLschoolStart);
for (school in education.schools) {
	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major); }


$(".education-entry").append(formattedName);
$(".education-entry").append(formattedDegree);
$(".education-entry").append(formattedDates);
$(".education-entry").append(formattedLocation);
$(".education-entry").append(formattedMajor);


	$(".education-entry").append(HTMLonlineClasses);
	for (onCourse in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onCourse].school);
		var formattedtDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onCourse].year);
		var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[onCourse].url);
		$(".education-entry").append(formattedTitle);
		$(".education-entry").append(formattedSchool);
		$(".education-entry").append(formattedDates);
		$(".education-entry").append(formattedUrl);

	}
}


education.display();
// END OF WORK ALL MISC FROM HEREON IN

$(document).click(function(loc) { 

	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});


name = HTMLheaderName

function inName(name) {
	name = $("#name").text();
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];

}

$('#header').prepend(internationalizeButton)



$('#mapDiv').append(googleMap);

$('#footerContacts').append(bio.contact.twitter);
$('#footerContacts').append(bio.contact.Cellphone);
$('#footerContacts').append(bio.contact.emailAddress);





