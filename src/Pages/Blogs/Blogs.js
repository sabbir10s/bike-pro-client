import React from 'react';
import "./Blogs.css"
import jwt from '../../image/jwt.avif'
const Blogs = () => {
    return (
        <div className='mx-2 md:mx-10 mb-10'>
            <p className='text-lg md:text-2xl font-bold text-[#1b3e41] mb-3'>Difference between javascript and nodejs</p>
            <>
                <div className='ml-5'>
                    <table>

                        <thead>
                            <tr>
                                <th></th>
                                <th>Javascript</th>
                                <th>NodeJS</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                                <td>NodeJS is a Javascript runtime environment</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Javascript can only be run in the browsers.</td>
                                <td>We can run Javascript outside the browser with the help of NodeJS.</td>

                            </tr>
                            <tr>
                                <td>3</td>
                                <td>It is basically used on the client-side.</td>
                                <td>It is mostly used on the server-side.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                                <td>Nodejs does not have capability to add HTML tags.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>

            <div>
                <p className='text-lg md:text-2xl font-bold text-[#1b3e41] mt-5 mb-2'>When should you use nodejs and when should you use mongodb?</p>
                <div className='ml-5 bg-[#f2f2f2] pl-2'>
                    <p className='font-medium text-[#ff634e] text-xl'>Nodejs</p>
                    <p>  is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
                    <p className='font-bold'>When should we use it?</p>
                    <p>Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc.So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</p>
                    <p className=' font-medium text-[#ff634e] text-xl mt-3'>MongoDB</p>
                    <p>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
                    <p className='font-bold'>When should we use it?</p>
                    <p>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.</p>
                </div>
            </div>

            <div>
                <p className='text-lg md:text-2xl font-bold text-[#1b3e41] mt-5 mb-2'>Differences between SQL and NoSQL databases.</p>
                <div className='ml-5 bg-[#f2f2f2] pl-7 pt-2'>
                    <ol className='list-disc'>
                        <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                        <li> SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                        <li> SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                        <li>  SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                    </ol>
                </div>
            </div>

            <div>
                <p className='text-lg font-bold md:text-2xl text-[#1b3e41] mt-5 mb-2'>What is the purpose of jwt and how does it work?</p>
                <div className='ml-5 bg-[#f2f2f2] p-2'>
                    <p className='font-medium text-[#ff634e] text-xl'>Purpose</p>
                    <p>
                        <p>In short, JWTs are used as a secure way to authenticate users and share information.</p>
                        <p>
                            Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.
                        </p>
                    </p>
                    <p className='font-medium text-[#ff634e] text-xl'>How it works?</p>
                    <div className='mb-2'>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. User sign-in using username and password or google/facebook. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.User’s Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.Resource server then verifies the authenticity of the token using the secret salt/ public key.
                    </div>

                    <img src={jwt} className='w-[500px]' alt="" />
                </div>
            </div>

        </div>
    );
};

export default Blogs;