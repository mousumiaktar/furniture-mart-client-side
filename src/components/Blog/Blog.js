import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container'>
            <div className='mb-5'>
                <h3 className='blog-title'>Q1. Difference Between Javascript and Node.js</h3>
                <div>
                    <div className='difference-container'>
                        <div>
                            <h5>Javascript:</h5>
                            <ul>
                                <li>Javascript is a programming language that is used for writing scripts on the website. </li>
                                <li>Javascript can only be run in the browsers.</li>
                                <li>It is basically used on the client-side.</li>
                                <li>Javascript is capable enough to add HTML and play with the DOM. </li>
                                <li>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </li>
                            </ul>
                        </div>
                        <div>
                            <h5>NodeJS:</h5>
                            <ul>
                                <li>NodeJS is a Javascript runtime environment.</li>
                                <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                                <li>It is mostly used on the server-side.</li>
                                <li>Nodejs does not have capability to add HTML tags.</li>
                                <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3 className='blog-title'>Q2.When should you use nodejs and when should you use mongodb ?</h3>
                <div className='blog-description'>
                    <p>We can use node.js for constructing an API application with both relational and non-relational databases. It is suitable because of the Single thread with event loop.Always being processed asynchronously by internal threads without interrupting the main thread.Due to the event-driven and asynchronous nature, node.js is good at building real-time applications</p>
                    <p>MOngodb is very fast and efficient so I should use it when I have key value pair to store(json data) . one of the best advantage with MongoDB is I can store a collection inside another collection . it support more user at a time and also useful if I have large number of fields.</p>
                </div>
                <h3 className='blog-title'>Q3.Differences between sql and nosql databases ?</h3>
                <div className='difference-container'>
                    <div>
                        <h5>SQL:</h5>
                        <ul>
                            <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
                            <li>These databases have fixed or static or predefined schema</li>
                            <li>These databases are not suited for hierarchical data storage.</li>
                            <li>These databases are best suited for complex queries</li>
                            <li>Vertically Scalable</li>
                        </ul>
                    </div>
                    <div>
                        <h5>NoSQL:</h5>
                        <ul>
                            <li>Non-relational or distributed database system.</li>
                            <li>They have dynamic schema</li>
                            <li>These databases are best suited for hierarchical data storage.</li>
                            <li>These databases are not so good for complex queries</li>
                            <li>Horizontally scalable</li>
                        </ul>
                    </div>
                </div>
                <h3 className='blog-title'>Q4.What is the purpose of jwt and how does it work?</h3>
                <div className='blog-description'>
                    <p>JWT-JSON Web Token, is an open standard used to share security information between two parties — a client and a server.JWT is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.It has one characteristic in particular that makes it a good tool for sending a users identity to a backend service. We can trust the integrity of a JWT because JWTs are signed, making them tamper-proof.
                    </p>
                    <p>JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization.you will get two JSON strings:The header and the payload.header contains the type of token JWT in this case and the signing algorithm. Payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;