import './Profil.css';

export default function Profil(){
    return(
        <div>
            <header>
            <article className="header-info">
                <h1>Müller Müller</h1>
                <hr/>
                <p>Web Developer</p>
            </article>
        </header>
 
        <section id="container">
            <aside id="left-side">
                <figure>
                    <img className="profile-image" src="./img/profile-picture-mahmut-muller.jpg"
                        alt="Profile-Mahmut Muller"/>
                </figure>

                <section id="social">
                    <h4>Social Media</h4>
                    <div className="social-media">
                        <a href="www.linkedin.com/in/mehmet-sekeroglu"><img src="./img/icon/facebook.png" alt="facebook"/></a>
                    </div>
                    <div className="social-media">
                        <a href="www.linkedin.com/in/mehmet-sekeroglu"><img src="./img/icon/instagram.png" alt="instagram"/></a>
                    </div>
                    <div className="social-media">
                        <a href="www.linkedin.com/in/mehmet-sekeroglu"> <img src="./img/icon/linkedin.png"
                                alt="linkedin"/></a>
                    </div>
                    <div className="social-media">
                        <a href="www.linkedin.com/in/mehmet-sekeroglu"><img src="./img/icon/twitter.png" alt="twitter"/></a>
                    </div><br/>
                </section>

                <section id="contact">
                    <h4>Contact</h4>
                    <div className="location">
                        <img src="./img/icon/konum.png" alt="contact-location"/>
                        <span>Haldenstrasse 10, 6003 Luzern</span>
                    </div><br/>
                    <div className="phone-number">
                        <img src="./img/icon/phone.png" alt="contact-phone"/>
                        <span>+41 076 123 12 34</span>
                    </div><br/>
                    <div className="mailto">
                        <a href="mailto:mehmetsekeroglu2019@gmail.com">
                            <img src="./img/icon/gmail.png" alt="contact-gmail"/>
                            <sup>mehmetsekeroglu@gmail</sup></a>
                    </div>
                    <br/>
                </section>

                <section id="skill">
                    <h4>Skills</h4>
                    <p><img src="./img/icon/html.png" alt="Skill-HTML"/><progress value="100"
                            max="100"></progress><br/><br/>
                        <img src="./img/icon/css.png" alt="Skill-CSS3"/> <progress value="80"
                            max="100"></progress><br/><br/>
                        <img src="./img/icon/java.png" alt="Skill-JS"/> <progress value="60"
                            max="100"></progress><br/><br/>
                        <img src="./img/icon/photoshop.png" alt="Skill-PS"/> <progress value="80" max="100"></progress>
                    </p>
                </section>
                <section id="language">
                    <h4>Language</h4>
                    <p>Turkish <progress value="100" max="100"></progress><br/><br/>
                        English <progress value="50" max="100"></progress><br/><br/>
                        German <progress value="50" max="100"></progress><br/>
                    </p>
                </section>
            </aside>
           
            <section id="right-side">
                <section id="about">
                    <h3>About Me</h3>
                    <p>
                        I graduated from <em> ETH Zurih University </em> as a computer engineer. I am currently seeking
                        for junior/entry level web developer roles.
                        Experienced individual with a demonstrated history of working in the governmental and
                        international positions.
                        Skilled in Data Analysis, Team Management, Project Management and gaining new skills at
                        <strong>HiCoders on JavaScript,
                            React, Node.js, HTML and CSS</strong> to become a junior developer. </p>
                </section>

                <section id="education">
                    <table>
                        <caption>my education history</caption>
                        <tr>
                            <th>Years</th>
                            <th>School</th>
                            <th>Major</th>
                            <th>City</th>
                            <th>Grade</th>
                        </tr>
                        <tr>
                            <td>2015-2017</td>
                            <td>Fordham University</td>
                            <td>Phd. Software Egineering</td>
                            <td>NewYork</td>
                            <td>3.5</td>
                        </tr>
                        <tr>
                            <td>2014-2015</td>
                            <td>NewYork University</td>
                            <td>Msc. Software Engineering</td>
                            <td>NewYork</td>
                            <td>3.5</td>
                        </tr>
                        <tr>
                            <td>2013-2014</td>
                            <td>London University</td>
                            <td>Msc. Computer Engineering</td>
                            <td>London</td>
                            <td>3.8</td>
                        </tr>
                        <tr>
                            <td>2009-2013</td>
                            <td>ETH Zürich</td>
                            <td>Bsc. Computer Engineering</td>
                            <td>Zürih</td>
                            <td>3.2</td>
                        </tr>
                    </table>
                    <br/>
                </section>

                <section id="work">
                    <table>
                        <caption>my work history</caption>
                        <tr>
                            <th>Company</th>
                            <th>Industry</th>
                            <th>Role</th>
                            <th>Entry Year</th>
                            <th>Exit Year</th>
                            <th>City</th>
                        </tr>
                        <tr>
                            <td>Unleashed Technologies</td>
                            <td>Web Development</td>
                            <td>Software Engineer</td>
                            <td>2019</td>
                            <td>2020</td>
                            <td>New York</td>
                        </tr>
                        <tr>
                            <td>SemiDot Infotech</td>
                            <td>Web Development</td>
                            <td>Software Engineer</td>
                            <td>2018</td>
                            <td>2019</td>
                            <td>New York</td>
                        </tr>
                        <tr>
                            <td>CemtrexLabs</td>
                            <td>Web Development</td>
                            <td>Software Engineer</td>
                            <td>2017</td>
                            <td>2018</td>
                            <td>New York</td>
                        </tr>
                        <tr>
                            <td>Experion Technologies</td>
                            <td>Web Development</td>
                            <td>Software Engineer</td>
                            <td>2015</td>
                            <td>2017</td>
                            <td>New York</td>
                        </tr>
                    </table>
                    <br/>
                </section>

                <section id="family">
                    <table>
                        <caption>my children</caption>
                        <tr>
                            <th>Name</th>
                            <th>Year</th>
                            <th>Gender</th>
                            <th>School</th>
                            <th>Hobbies</th>
                        </tr>
                        <tr>
                            <td>Ali</td>
                            <td>3</td>
                            <td>Male</td>
                            <td>nursery School</td>
                            <td>play football</td>
                        </tr>
                        <tr>
                            <td>Ahmet</td>
                            <td>4</td>
                            <td>Male</td>
                            <td>nursery School</td>
                            <td>play football</td>
                        </tr>
                        <tr>
                            <td>Ayse</td>
                            <td>6</td>
                            <td>Female</td>
                            <td>primary school</td>
                            <td>play voleyball</td>
                        </tr>
                        <tr>
                            <td>Fatma</td>
                            <td>7</td>
                            <td>Female</td>
                            <td>primary school</td>
                            <td>play voleyball</td>
                        </tr>
                    </table>
                    <br/>
                </section>

                <section id="friends">
                    <table>
                        <caption>My Friends</caption>
                        <tr>
                            <td><img src="./img/friends/male.png" alt="Friends-Ali Yilmaz"/> </td>
                            <td>Ali Yilmaz</td>
                            <td>33 years old</td>
                            <td>Male</td>
                            <td>Engineer</td>
                            <td>Since 2000</td>
                        </tr>
                        <tr>
                            <td><img src="./img/friends/female.png" alt="Friends-Zeynep Yilmaz"/></td>
                            <td>Zeynep Yilmaz</td>
                            <td>30 years old</td>
                            <td>Female</td>
                            <td>Engineer</td>
                            <td>Since 2015</td>
                        </tr>
                        <tr>
                            <td><img src="./img/friends/female.png" alt="Friends-Fatma Demir"/></td>
                            <td>Fatma Demir</td>
                            <td>28 years old</td>
                            <td>Female</td>
                            <td>Architect</td>
                            <td>Since 2017</td>
                        </tr>
                        <tr>
                            <td><img src="./img/friends/male.png" alt="Friends-Ahmet Demir"/></td>
                            <td>Ahmet Demir</td>
                            <td>30 years old</td>
                            <td>Male</td>
                            <td>Architect</td>
                            <td>Since 2010</td>
                        </tr>
                    </table>
                </section><br/>

                <section id="hobbies">
                    <table id="hobby-header">
                        <caption>My Hobbies</caption>
                        <tr>
                            <th><img src="./img/hobby/hobby-img.png" alt=" Hobby"/></th>
                            <th><img src="./img/hobby/hobby-time.png" alt="Time Hobby"/></th>
                            <th><img src="./img/icon/konum.png" alt="Location Hobby"/></th>
                            <th><img src="./img/hobby/hobby-cash.png" alt="Cash Hobby"/></th>
                        </tr>
                        <tr>
                            <td>Trekking </td>
                            <td>Every Sunday-All Day</td>
                            <td>Horizont Wandergruppe</td>
                            <td>CHF 500 per year</td>
                        </tr>
                        <tr>
                            <td>Photography </td>
                            <td>3 hours per week</td>
                            <td>In Luzern</td>
                            <td>CHF 500 per year</td>
                        </tr>
                        <tr>
                            <td>Swimming </td>
                            <td>2 hours per week</td>
                            <td>Hallenbad Almend in Luzern</td>
                            <td>CHF 360 per year</td>
                        </tr>
                        <tr>
                            <td>Clarinet Playing </td>
                            <td>1 hour per week</td>
                            <td>Music School</td>
                            <td>CHF 500 per year</td>
                        </tr>
                    </table>
                </section>
            </section>
        </section>
        </div>
    )
}