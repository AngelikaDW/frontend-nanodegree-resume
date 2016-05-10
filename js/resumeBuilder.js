
var bio = {
    "name": "Angelika Dietrich-Winkler",
    "role": "expierenced marketing professional - rookie back-end developer",
    "contacts":
        {
        "mobile": "+31 6 38128082",
        "email": "angelika.dw@gmail.com",
        "github": "AngelikaDW",
        "twitter": "Nav",
        "location": "Amsterdam, The Netherlands"
        },
    "welcomeMessage": "Marketing professional with strong experience and proven track record in insight-led product and marketing innovations and strategic business development. Rookie back-end developer. Aspiring linking pin between marketing and development",
    "skills":
        [
        "python", "international experienced marketing professional", "linking pin between marketing and deve", "thinking big and getting things done", "ready for new challenges"
        ],
    "biopic": "images/angelika.jpg"
};

var work = {
    "jobs": [
        {
        "employer": "Philips",
        "title": "Director Consumer Marketing",
        "dates": "2011 - 2016",
        "location": "Amsterdam",
        "description": "Leading category ‘New Cleaning Value Spaces’: wet, steam, cordless and robotics cleaning appliances. Identifying future consumer trends and needs, translating them into product roadmaps and strategic marketing plans. Managing a team of  4 up- and downstream marketing managers. Leading multidisciplinary teams (design, engineers, quality, researchers) in developing propositions and managing product launches in different markets.All go-to-market activities for product and marketing innovations"
        },
        {
        "title": "Senior Consumer Intelligence Manager",
        "employer": "Philips",
        "dates": "2007-2011",
        "location": "Shanghai",
        "description": "Creating consumer and market insights"
        },
        {
        "title": "Global Market Intelligence Manager",
        "employer": "FIFA/GlobalBrandsGroup",
        "dates": "2006-2007",
        "location": "Singapore",
        "description": "Market research B2B and B2C for licensing rights and products in the APAC region"
        }
    ]
};
var education = {
    "schools": [
    {
        "name": "Wirtschaftsuniversitaet Wien",
        "location": "Vienna, Austria",
        "dates": "2000 - 2004",
        "degree": "Ph.D.",
        "major": ["Business economics"],
        "url": "http://www.wu-wien.ac.at"
    },
   {
        "name": "University of applied Sciences FHWN",
        "location": "Wiener Neustadt, Austria",
        "dates": "1996 - 2000",
        "degree": "Master",
        "major": ["Business consultancy"],
        "url": "http://www.fhwn.ac.at"
    }
    ],
    "onlineCourses": [
    {
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    },
    {
        "title": "Python for Informatics",
        "school": "MIT",
        "dates": "2016",
        "url": "http://coursera.org"
    }
    ]
};

var projects = {
    "projects": [
    {
        "title": "Drinking Fountains",
        "dates": "2016",
        "description": "Website to find the nearest drinking fountain around Amsterdam. Based on an automated Python database.",
        "url":"nav"
        // "images": "images/water.png"
    },
    {
        "title": "Marnixplantsoen",
        "dates": "2016",
        "description": "Website to lobby for an upgrade of a public park in Amsterdam.",
        "url": "nav"
    }
    ]
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    // formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    for (var i=0; i <formattedContactInfo.length; i++) {
     $("#topContacts, #footerContacts").append(formattedContactInfo[i])
    };


    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for(i in bio.skills) {
            $("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }
};

bio.display();

work.display = function() {
    if(work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);
        for (job in work.jobs){
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};
work.display();

projects.display = function() {
    if(projects.projects.length > 0) {
        for(i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for(img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

projects.display();

education.display = function() {
    if(education.schools.length > 0) {
        for(i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    };
    if(education.onlineCourses.length > 0) {
        for(i in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineCourseName = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
            var formattedOnlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedOnlineCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var formattedOnlineCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedOnlineCourseName);
            $(".education-entry:last").append(formattedOnlineCourseSchool);
            $(".education-entry:last").append(formattedOnlineCourseDates);
            $(".education-entry:last").append(formattedOnlineCourseURL);
        }
    }
};

education.display();

function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+name[1];
};
$("#main").append(internationalizeButton);


projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (images in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});