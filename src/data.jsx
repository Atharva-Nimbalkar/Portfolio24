import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
export const menu = [
    {name:"Home"},
    {name:"About"},
    {name:"Skill"},
    {name:"Projects"},
    {name:"Contact"},
]

export const projects=[
    {
        id:1,
        titel: 'Album Finder',
        image: 'https://i.ibb.co/4tXzQ5n/analbumfinder.png',
        data:{
            description: 'An Album Finder is a web application that allows users to search for their favorite albums and artists. The application uses the Last.fm API to fetch data and display it to the user. The application is built using React.js and Tailwind CSS.',
            demoLink: "https://analbumfinder.netlify.app/"
        },
    stack:[
    {
        name:"React",
        icon:<FaReact/>,
        iconColor:"blue",
    },    
    ]},
]

export const experience=[
    {
        title:"Frontend Development",
        data:[
            {
                skill:"HTML",
                level:"Experienced",
            },
            {
                skill:"CSS",
                level:"Experienced",
            },
            {
                skill:"JavaScript",
                level:"Experienced",
            },
            {
                skill:"Tailwind",
                level:"Intermediate",
            },
            {
                skill:"Bootstrap",
                level:"Experienced",
            },
            {
                skill:"React",
                level:"Experienced",
            },
            {
                skill:"React Native",
                level:"Experienced",
            },
        ]
    },
    {
        title:"Backend Development",
        data:[
            {
                skill:"Node JS",
                level:"Experienced",
            },
            {
                skill:"MangoDB",
                level:"Intermediate",
            },
            {
                skill:"PHP",
                level:"Experienced",
            },
            {
                skill:"Python",
                level:"Intermediate",
            },
            {
                skill:"MySQL",
                level:"Experienced",
            },
        ]
    },

]

export const social=[ 
    {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"https://github.com/Atharva-Nimbalkar",
    },
    {
    name:"LinkedIn",
    icon:<AiFillLinkedin/>,
    link:"https://www.linkedin.com/in/atharvanimbalkar",
           
    }
  ]