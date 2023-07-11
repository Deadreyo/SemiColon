import NodejsImage from '../assets/nodejs.png'
import TrackData from '../types/TrackData'
const nodejs: TrackData = {
  title: 'JavaScript & NodeJS',
  description:
    'Welcome to the JavaScript & Node.js course! In this course, you will learn the fundamentals of server-side development with Node.js. Node.js is a popular and powerful JavaScript runtime that allows developers to build fast, scalable, and event-driven server-side applications. You will learn how to build and deploy server-side applications using Node.js and other popular web development technologies.',
  objectives: [
    '1. Understand the basics of JavaScript and its architecture.',
    '2. Learn about advanced JavaScript concepts.',
    '3. Understand the basics of Node.js and its architecture.',
    '4. Build and deploy server-side applications using Node.js.',
    '5. Use Node.js to work with databases and APIs',
    '6. Build RESTful APIs using Node.js and Express.',
    '7. Understand how to use Node.js to handle asynchronous operations',
    '8. Use Node.js with front-end frameworks such as React, Angular, and Vue',
    '9. Understand how to deploy Node.js applications to production environments.',
  ],
  requirements: [
    'A basic understanding of HTML & CSS are preferred, but not required.',
  ],
  content: [
    '1. Basics of JavaScript',
    '2. Loops, functions, objects, and arrays',
    '3. Hoisting, closure, higher-order functions, and callbacks',
    '4. Asynchronous JavaScript',
    '5. Introduction to Node.js',
    '6. Building Node.js Applications',
    '7. Express.js & RESTFUL APIs',
    '8. Authentication & Authorization',
    '9. Working with Databases with MongoDB',
    '10. Deploying Node.js Applications',
  ],
  noOfSessions: '8-10 sessions in 4-5 weeks',
  id: 'nodejs',
  image: NodejsImage,
  active: true,
}

export default nodejs
