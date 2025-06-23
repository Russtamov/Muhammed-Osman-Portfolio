/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammed Osman",
  title: "Hi all, I'm Muhammed",
  subTitle: emoji(
    "A passionate Mobile Developer 🚀 having an experience of building Mobile applications with Flutter / Python / .NET / JavaScriptand some other cool libraries and frameworks."
  ),
  resumeLink: "/resume.pdf", // Local PDF file in the greeting folder
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Russtamov",
  linkedin: "www.linkedin.com/in/muhammed-osman-76328b270",
  gmail: "mahammadcanr@gmail.com",
  facebook: "https://www.facebook.com/muhammed.osman.76328b270",
  medium: "https://medium.com/@mahammadcanr",
  stackoverflow: " https://stackoverflow.com/users/28323328/mahammadcan-r",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FLUTTER DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Flutter end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Develop highly interactive Flutter end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: ".NET",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Alanya Alaaddin Keykubat University",
      logo: require("./assets/images/alkulogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - June 2024",
      desc: "I have a Bachelor of Science in Computer Science degree from Alanya Alaaddin Keykubat University.",
      descBullets: [
        "I participated in various programming competitions and hackathons, gaining valuable experience in problem-solving and teamwork.",
        "Completed several research projects focused on artificial intelligence and machine learning applications.",
        "Maintained a high GPA while actively participating in computer science student organizations and tech clubs."
      ]
    },
    {
      schoolName: "Tourism and Hotel Management College",
      logo: require("./assets/images/logocollage.png"),
      subHeader: "Bachelor of Tourism and Hotel Management",
      duration: "September 2016 - April 2019",
      desc: "Studied tourism and hospitality management, gaining valuable experience in customer service, hotel operations, and business management. Developed strong communication and organizational skills through practical training.",
      descBullets: [
        "Completed comprehensive coursework in hotel management, tourism operations, and customer relations",
        "Gained hands-on experience through internships at local hotels and tourism businesses",
        "Developed strong interpersonal and problem-solving skills through direct customer interaction"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Flutter", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "70%"
    },
    {
      Stack: ".NET",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Developer",
      company: "Ahtapot Holding",
      companylogo: require("./assets/images/logo-ahtapot.jpeg"),
      date: "June 2024 – 2025",
      desc: "Developed and maintained mobile applications using Flutter, integrating with backend services and APIs to deliver seamless user experiences.",
      descBullets: [
        "Collaborated with cross-functional teams to design and implement new features, ensuring high-quality code and adherence to best practices.",
        "Optimized app performance and user experience through continuous testing and debugging, resulting in improved user satisfaction and retention.",
        "Implemented new features and improvements to existing mobile applications, including bug fixes and performance enhancements.",
        "Worked closely with the design team to ensure that the mobile applications are visually appealing and user-friendly.",
        "Worked closely with the backend team to ensure that the mobile applications are integrated with the backend services and APIs."
      ]
    },
    {
      role: "Mobile Developer ",
      company: "Oppenza",
      companylogo: require("./assets/images/oppenza.png"),
      date: " 2024 – 2025",
      desc: "Developed and maintained mobile applications using Flutter, integrating with backend services and APIs to deliver seamless user experiences.",
      descBullets: [
        "Optimized app performance and user experience through continuous testing and debugging, resulting in improved user satisfaction and retention.",
        "Implemented new features and improvements to existing mobile applications, including bug fixes and performance enhancements.",
        "Worked closely with the design team to ensure that the mobile applications are visually appealing and user-friendly.",
        "Worked closely with the backend team to ensure that the mobile applications are integrated with the backend services and APIs."
      ]
    },
    {
      role: "Mobile Developer Intern",
      company: "Interzio",
      companylogo: require("./assets/images/interzio_logo.jpeg"),
      date: "May 2024 – August 2024",
      desc: "Gained hands-on experience in mobile app development as an intern, focusing on learning Flutter framework and mobile development best practices.",
      descBullets: [
        "Assisted in developing mobile applications using Flutter under senior developer guidance",
        "Learned and implemented mobile app development fundamentals and best practices",
        "Participated in code reviews and received mentorship from experienced developers",
        "Contributed to small features and bug fixes while learning the development workflow",
        "Gained exposure to working with design and backend teams in a professional environment"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/yildirim_belediye_logo.png"),
      projectName: "Yıldırım Belediyesi",
      projectDesc: "Yıldırım Belediyesi mobile app",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.yildirim.bel.tr"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/softbank_robotics_uk_ltd_emea_hq_logo.jpeg"),
      projectName: "NAO Robot for Cancer Kids' Support",
      projectDesc:
        "The main purpose of this project is to integrate the Nao robot with artificial intelligence to interact with children undergoing cancer treatment, ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://us.softbankrobotics.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+90 (552) 586 71 72",
  email_address: "mahammadcanr@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
