import React from 'react';
import ReactStars from "react-rating-stars-component";

const Blog = () => {

    return (
        <>
            <div className="blog-all-content min-h-screen">
                <div className="container mx-auto">
                    <div className="blog-content gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div class="card w-full bg-base-100 mt-2 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">How does prototypical inheritance work?</h2>
                                <p>prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.</p>

                            </div>
                        </div>
                        <div class="card w-full bg-base-100 mt-2 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                                <p>Local state,Global state,Server state,URL state A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</p>

                            </div>
                        </div>
                        <div class="card w-full bg-base-100 mt-2 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                                <p>When we create a rendered component, React creates a virtual DOM for its element tree in the component. Now, whenever the state of the component changes, React recreates the virtual DOM tree and compares the result with the previous render.</p>

                            </div>
                        </div>
                        <div class="card w-full bg-base-100 mt-2 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title"> What is a unit test? Why should write unit tests?</h2>
                                <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code.</p>

                            </div>
                        </div>
                        <div class="card w-full bg-base-100 mt-2 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                                <p>We map the product and get this product id and .and fatch this id .when we fatch the id we get every details o this prooduct .and show any where product details.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;