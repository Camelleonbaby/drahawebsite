import React from 'react';
import AI_writer from './AI_Writer';
import AI_Real from './AI_Real';
import AI_eye from './AI_eye'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

class App extends React.Component {
  
  render (){
    return (
    <Router>  
      <Switch>

      <Route path="/aiwriter" component = {AI_writer} />
      <Route path="/aireal" component = {AI_Real} />
//      <Route path="/aieye" component = {AI_eye} />      

      <div className="App">



        <section id = "nav-bar">  
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img src = "img/logo_new.png"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">ABOUT US</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">SERVICES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">OUR TEAM</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#project">PROJECTS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">CONTACT US</a>
                </li>
              </ul>
            </div>
          </nav>
        </section>


        <div id="slider">

          <div id="headerSlider" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#headerSlider" data-slide-to="0" className="active"></li>
              <li data-target="#headerSlider" data-slide-to="1"></li>
              <li data-target="#headerSlider" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/banner1.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption">              
                    <h5> Life Long Learning </h5>
                  </div>
              </div>
              <div className="carousel-item">
                <img src="img/banner2.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption">              
                    <h5> Smart Business Decision Making </h5>
                  </div>          
              </div>
              <div className="carousel-item">
                <img src="img/banner3.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption">              
                    <h5> Extract knowledge and Benifit from Data </h5>
                  </div>          
              </div>
            </div>
            <a className="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>


        <section id = "about">
          <div className="container">
            <div className="row">
              <div className = "col-md-6">
                <h2> About Us</h2>
                <div className = "about-content"> 
                    We’re a team of scientists, engineers, machine learning experts and more, working together to develop advanced data products and AI tools. We help our customers solve  the key business problems and make the right business decisions via high quality data collection, professional data visualisation, deep data mining and analysis, and customised data and AI tools/APPs. 
                
                </div>

                <button type="button" className = "btn btn-primary"> Read more >> </button>

              </div>

                <div className = "col-md-6 skills-bar">
                  <p> Data Science </p>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '80%'}}>80%</div>             
                  </div>

                  <p> Machine Learning </p>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '75%'}}>75%</div>             
                  </div>


                  <p> Artifical Intelligence </p>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '90%'}}>90%</div>             
                  </div>            

                  <p> Project-based Learning </p>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '80%'}}>80%</div>             
                  </div>  

              </div>
            </div>
          </div>
        </section>


        <section id="services">
          <div className="container">     
            <h1>Our Services</h1>
            <div className="row services">
              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-database"></i>            
                </div>
                <h3> Market Exploration </h3>
                <p> We can collect business data for our customers from various resources.  
                </p>

              </div> 


              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-line-chart"></i>          
                </div>

                <h3> Customer Mining </h3>
                <p> We can privide insightful business report using data visualization techniques.  
                </p>
              </div> 

              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-cogs"></i>          
                </div>

                <h3> Product Upgrade </h3>
                <p> We can help training and deploying AI tools for solving your business problems.   
                </p>

              </div> 

              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-graduation-cap"></i>      
                </div>

                <h3> Process Automation </h3>
                <p> We can provide customised courses of data science and AI training for your teams.  
                </p>

              </div> 
            </div>
          </div>
        </section>


          <section id="team">

            <div className="container">
              <h1>Our Team</h1>
              <div className="row">
                <div className="col-md-3 profile-pic text-center">
                  <div className="img-box">
                    <img src="img/weidong.jpg" className="img-responsive"/>
                  <ul>
                    <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i className="fa fa-linkedin"></i></li></a>   
                  </ul>

                </div>
                    <h2>Dr Weidong LIU</h2>
                    <h3>Founder</h3>
                    <p> Weidong is a AWS certified machine learning specialty.</p>

                </div>

                <div className="col-md-3 profile-pic text-center">
                  <div className="img-box">
                    <img src="img/chuhan.jpg" className="img-responsive" />
                  <ul>
                    <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i className="fa fa-linkedin"></i></li></a>   
                  </ul>

                </div>
                    <h2>Dr Chuhan WU</h2>
                    <h3>Founder</h3>
                    <p> Chuhan is a AWS certified machine learning specialty.</p>

                </div>

                <div className="col-md-3 profile-pic text-center">
                  <div className="img-box">
                    <img src="img/weidong.jpg" className="img-responsive" />
                  <ul>
                    <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i className="fa fa-linkedin"></i></li></a>   
                  </ul>

                </div>
                    <h2>Dr Weidong LIU</h2>
                    <h3>Founder</h3>
                    <p> Weidong is a AWS certified machine learning specialty.</p>

                </div>

                <div className="col-md-3 profile-pic text-center">
                  <div className="img-box">
                    <img src="img/weidong.jpg" className="img-responsive" />
                  <ul>
                    <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i className="fa fa-linkedin"></i></li></a>   
                  </ul>

                </div>
                    <h2>Dr Weidong LIU</h2>
                    <h3>Founder</h3>
                    <p> Weidong is a AWS certified machine learning specialty.</p>

                </div>


              </div>


              <div className="row">
                <div className="col-md-3 profile-pic text-center">
                  <div className="img-box">
                    <img src="img/weidong.jpg" className="img-responsive"/>
                  <ul>
                    <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i className="fa fa-linkedin"></i></li></a>   
                  </ul>

                </div>
                    <h2>Dr Weidong LIU</h2>
                    <h3>Founder</h3>
                    <p> Weidong is a AWS certified machine learning specialty.</p>

                </div>

                <div className="col-md-3 profile-pic text-center">
                  <div className="img-box">
                    <img src="img/weidong.jpg" className="img-responsive"/>
                  <ul>
                    <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i className="fa fa-linkedin"></i></li></a>   
                  </ul>

                </div>
                    <h2>Dr Weidong LIU</h2>
                    <h3>Founder</h3>
                    <p> Weidong is a AWS certified machine learning specialty.</p>

                </div>

                <div className="col-md-3 profile-pic text-center">
                  <div className="img-box">
                    <img src="img/weidong.jpg" className="img-responsive" />
                  <ul>
                    <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i className="fa fa-linkedin"></i></li></a>   
                  </ul>

                </div>
                    <h2>Dr Weidong LIU</h2>
                    <h3>Founder</h3>
                    <p> Weidong is a AWS certified machine learning specialty.</p>

                </div>

                <div className="col-md-3 profile-pic text-center">
                  <div className="img-box">
                    <img src="img/weidong.jpg" className="img-responsive" />
                  <ul>
                    <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i className="fa fa-linkedin"></i></li></a>   
                  </ul>

                </div>
                    <h2>Dr Weidong LIU</h2>
                    <h3>Founder</h3>
                    <p> Weidong is a AWS certified machine learning specialty.</p>

                </div>


              </div>

            </div>

          </section>


          <section id="promo">

            <div className="container">

            <p> Get Free Data Science/Artificial Intelligence training classes</p>
            <a href="#contact" className="btn btn-primary">Contact Us</a>

            </div>

          </section>


          <section id="project">

            <div className="container">
              <h1> Projects </h1>
              <div className="row  project-showcase">
                <div className = "col-md-6 project-showcase">
                <h2> Smart Real </h2>
                <div className = "project-content"> 
                Buying and renting a house/apartment can be very time consuming and energy taking. Although there are several real estate website available, overloading information and data confused people and bring additional difficulties in decision making. Smart Real is a AI recommendation system helping people find the most suitable properties.
                
                </div>

                <Link to= '/aireal'><button type="button" className = "btn btn-primary"> Try me </button></Link>

              </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                  <img src="img/real-estate.jpg" className="img-responsive" />  
                  </div>

              </div>
                

              </div>

              <div className="row  project-showcase">
                <div className = "col-md-6">
                <h2> Smart Writer </h2>
                <div className = "project-content"> 
                We are facing writing tasks everyday. However, writing is not easy, even for a professional writer. A good writing plan consists of four steps: literature review, outline development, first draft and final polishing. On the basis of the most powerful NLP model, we developed a series of writing assistants to provide the best writing experience. 
                
                </div>

                <Link to= '/aiwriter'><button type="button" className = "btn btn-primary">  Try me  </button></Link>

              </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                  <img src="img/AI-writer.jpg" className="img-responsive" />  
                  </div>

              </div>
                

              </div>

              <div className="row  project-showcase">
                <div className = "col-md-6 project-showcase">
                <h2> Third Eye </h2>
                <div className = "project-content"> 
                   Experienced structural engineers can identify risk via surface crack pattern. Medical specialty can recognise a particularly disease via a chest radiograph. We developed computer vision models with superior human performance in particular fields. They will be your third eye in solving problems.
                
                </div>

                <Link to= '/aieye'><button type="button" className = "btn btn-primary">  Try me  </button></Link>

              </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                  <img src="img/Ai-camera.jpg" className="img-responsive" />  
                  </div>

              </div>
                
              </div>


              <div className="row  project-showcase">
                <div className = "col-md-6 project-showcase">
                <h2> Third Ear </h2>
                <div className = "project-content"> 
                   Time-series signals, such as sound, ultrasonic, vibration, stock market price changes and other historic data,  contains rich useful information. We developed machine learning model to extract those information from the signal and provide accurate prediction. They will be your their ear in solving problems. 
                
                </div>

                <button type="button" className = "btn btn-primary">  Under development  </button>

              </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                  <img src="img/Ai-Ear.jpg" className="img-responsive" />  
                  </div>

              </div>
                
              </div>



            </div>
          </section>


          <section id="testimonials">
            <div className="container">
              <h1> Testimonials </h1>
              <p className="text-center"> Find more reviews on our YouTube channel. </p>
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="profile">
                    <img src="img/user1.jpg" className="user" />
                    <blockquote>Dr Aha provides excellent data collecting services for my business.</blockquote>

                    <h3> Nick Li <span> Director at Cubecorp </span> </h3>          

                  </div>
                  
                </div>

              <div className="col-md-4 text-center">
                  <div className="profile">
                    <img src="img/user1.jpg" className="user" />
                    <blockquote>I am shocked by the amazing techniques developed by Dr Aha</blockquote>

                    <h3> Frank <span> CEO at Lagoon </span> </h3>           

                  </div>
                  
                </div>

              <div className="col-md-4 text-center">
                  <div className="profile">
                    <img src="img/user1.jpg" className="user" />
                    <blockquote>Dr Aha has the best data science and AI developing team.</blockquote>

                    <h3> Allen <span> Director at AWS </span> </h3>           

                  </div>
                  
                </div>                  
              </div>
            </div>
          </section>


          <section id="contact">
            <div className="container">
              <h1>Get In Touch</h1>
              <div className="row">
                <div className="col-md-6">
                  <form className="contact-form">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                      <input type="number" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" rows="3" placeholder="Your Message"></textarea> 
                    </div>

                    <button type="submit" className="btn btn-primary">SEND MESSAGE</button>

                  </form>
                  
                </div>
                
                <div className="col-md-6 contact-info">
                  <div className="follow"><b>Address:</b><i className="fa fa-map-marker"></i>116 Oakes Rd, Carlingford, NSW, Australia </div>           

                  <div className="follow"><b>Phone:</b><i className="fa fa-phone"></i> (+61) 0411 202 887 </div>            
                
                  <div className="follow"><b>Email:</b><i className="fa fa-envelope-o"></i>drahaeducation@gmail.com </div>  

                  <div className="follow"><label><b>Get Social:</b></label>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>

                  </div>                      
                </div>


        </div>
        
      </div>
      
    </section>


    <section id="footer">
      <div className="container text-center">
        <p> In knowledge we believe</p>
        
      </div>
      
    </section>
      </div>

      </Switch>
    </Router>


    );    
  }
}

export default App;
