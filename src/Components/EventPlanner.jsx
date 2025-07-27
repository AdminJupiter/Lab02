// import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

            <section className="description">
                <p>
                    Plan and organize your events effortlessly with Event Planner. 
                    From birthdays to corporate meetings, we&apos;ve got you covered.
                </p>
                <button className="get-started-button">Get Started</button>
            </section>

            <section className="events_categories">
                <div className="category-card">
                    <h2>Social Events</h2>
                    <ul>
                        <li>Birthday parties</li>
                        <li>Anniversary celebrations</li>
                        <li>Wedding receptions</li>
                        <li>Baby showers</li>
                        <li>Graduation parties</li>
                        <li>Family reunions</li>
                    </ul>

                </div>
                    
              
                <div className="category-card">
              
                    <h2>Entertainment Events</h2>
                    <ul>
                        <li>Concerts</li>
                        <li>Music festivals</li>
                        <li>Film screenings</li>
                        <li>Comedy shows</li>
                        <li>Art exhibitions</li>
                        <li>Cultural events</li>
                    </ul>
                </div>
                

                <div className="category-card">
                    <h2>Community Events</h2>
                    <ul>
                        <li>Fundraising events</li>
                        <li>Charity galas</li>
                        <li>Volunteer drives</li>
                        <li>Neighborhood block parties</li>
                        <li>Community festivals</li>
                        <li>Cultural celebrations</li>
                    </ul>
                </div>
               
            </section>

            <section className="features">
                <h2>Features</h2>

                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest List Management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>
            </section>
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>&quot;Event Planner made organizing my wedding a breeze. Highly recommended!&quot;</p>
                    <p className="author">-Emily Johnson</p>
                    <br />
                     <p>&quot;Event Planner makes my day very special!&quot;</p>
                    <p className="author">-Jao Azores</p>
                </div>
            </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <form action="">
                    <input type="text" placeholder='Name'/>
                    <input type="email" placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button className='submit-button'>Send</button>

                </form>
                
            </section>
        </div>
    );
};

export default EventPlanner;