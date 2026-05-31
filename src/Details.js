// Enter all your detials in this file
// Logo images
import logogradient from "./assets/cropped_circle_image (1).png";
import logo from "./assets/logo2.svg";
// Profile Image 
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import java from "./assets/techstack/icons8-java-logo-94.png";
import c from "./assets/techstack/icons8-c-64.png";
import django from "./assets/techstack/icons8-django-50.png";
import jenkins from "./assets/techstack/icons8-jenkins-48.png";
import python from "./assets/techstack/icons8-python-100.png";
import powerbi from "./assets/techstack/icons8-power-bi-logo-48.png";
import pandas from "./assets/techstack/icons8-pandas-48.png";
import numpy from "./assets/techstack/icons8-numpy-48.png";
import matplotlib from "./assets/techstack/icons8-matplotlib-48.png";
import sql from "./assets/techstack/icons8-sql-48.png";
import tensorflow from "./assets/techstack/icons8-tensorflow-48.png";
import playwright from "./assets/techstack/Playwright--Streamline-Svg-Logos.svg";
import tableau from "./assets/techstack/icons8-tableau-software-48.png";
import selenium from "./assets/techstack/icons8-selenium-100.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Rahul Dutta",
  tagline: "Software Engineer",
  img: profile,
  about: ` Computer Engineering with strong skills in Python, SQL, Java, and Data Analysis. Experi-
enced in Software Testing, Automation, Machine Learning, and Data Visualization. Built ML prediction

systems, automated testing frameworks using Selenium, and interactive dashboards using Power BI. Strong under-
standing of Data Structures, DBMS, Operating Systems, and Object-Oriented Programming.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/rahuldutta16/",
  github: "https://github.com/rahuldutta16",
  twitter: "https://twitter.com/",
  
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Engineer",
    Company: `EVERFLOURISH ADVISORS PVT LTD`,
    Location: "Mumbai",
    Type: "Full Time",
    Duration: "June 2026 - present",
  },
  {
    Position: "Software Development Engineer in Test Intern",
    Company: `Impactguru`,
    Location: "Mumbai",
    Type: "Automation Testing Internship offline",
    Duration: "Feb 2026 - May 2026",
  },
  {
    Position: "Cybersecurity Intern",
    Company: `Casio`,
    Location: "Mumbai",
    Type: "Internship Virtual",
    Duration: "May 2024 - July 2024",
    
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Technology in Computer Engineering",
    Company: `Shah and Anchor Kutchhi Engineering College(MUMBAI UNIVERSITY)`,
    Location: "Mumbai",
    Type: "Full Time",
    Duration: "2022-2026",
    CGPA:9
  },
  {
    Position: "Higher Secondary Education",
    Company: `Poddar Brio International School CBSE`,
    Location: "Mumbai",
    Type: "Full Time",
    Duration: "2021 -2022",
    CGPA:9
  },
  {
    Position: "Secondary Education",
    Company: `Airson School`,
    Location: "Mumbai",
    Type: "Full Time",
    Duration: "2019 -2020",
    CGPA:9
  },

];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  java: java,
  python: python,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  c: c,
  django: django,
  jenkins: jenkins,
  powerbi: powerbi,
  pandas: pandas,
  numpy: numpy,
  matplotlib: matplotlib,
  sql: sql,
  tensorflow: tensorflow,
  playwright: playwright,
  tableau: tableau,
  selenium: selenium,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Crop Disease Prediction System",
    image: projectImage1,
    description: `Detect the  disease in the crop and suggest the solution to the farmer. It is a machine learning based project which uses the dataset of the crops and their diseases to train the model and then predict the disease in the crop.`,
    techstack: "Python,Django",
    previewLink: "https://google.com",
    githubLink: "https://github.com/rahuldutta16/Crop-prediction-system-Django-.git",
  },
  {
    title: "Food Delivery mern stack application",
    image: projectImage2,
    description: `This is a food delivery application which is built using mern stack. It has features like user authentication, restaurant listing, food ordering, payment gateway integration etc.`,
    techstack: "React, Node.js, MongoDB",
    previewLink: "https://google.com",
    githubLink: "https://github.com/rahuldutta16/Food-ordering-website-mern.git",
  },
  {
    title: "Blood Donation website",
    image: projectImage3,
    description: `This is a blood donation website which is built using html, css and javascript. It has features like user authentication, blood donation request, blood donation history etc.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/rahuldutta16/Blood-Donation-website-lifestream-connect.git",
  },
  {
    title: "ResqNet - AI-Powered Disaster Prediction System",
    image: projectImage4,
    description: `ResqNet is an AI-powered disaster prediction system designed to provide early warnings and enhance preparedness for natural disasters. By leveraging advanced machine learning algorithms and real-time data analysis, ResqNet can predict the occurrence and impact of various disasters such as earthquakes, floods, hurricanes, and wildfires. The system integrates data from multiple sources, including satellite imagery, weather forecasts, seismic activity, and historical disaster patterns. ResqNet's predictive capabilities enable authorities and communities to take proactive measures, mitigate risks, and save lives in the face of impending disasters.`,
    techstack: "react,python,machine learning,html,css,javascript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/rahuldutta16/ResQNet-AI-Powered-Disaster-Prediction-System.git",
  },
  {
    title: "Plastic Waste Management System",
    image: projectImage5,
    description: `This is a plastic waste management system designed to optimize the collection, sorting, and recycling of plastic waste. The system aims to reduce environmental impact and promote sustainable practices by providing an efficient solution for managing plastic waste in urban and rural areas.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/rahuldutta16/Website-plastic.git",
  },
//   {
//     title: "Project title 6",
//     image: projectImage6,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/CSS, JavaScript",
//     previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "rdlipika16@gmail.com",
  phone: "+91 9322123482",
};
