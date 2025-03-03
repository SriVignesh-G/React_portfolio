
import './App.css'

function App() {

  return (
    <>
      <nav>
        <div className="name">Browny</div>
        <ul>
          <li>Education</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Profile</li>
          <li>Portfolio</li>
          <li>Clients</li>
          <li>Contact</li>
        </ul>
        <div className="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="50" viewBox="0 0 24 24">
          <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
        </svg>
        </div>
      </nav>

      <main>
        <div className="hero">
          <div className="content">
            <p className="intro">Hi, I'm Browny Stark</p>
            <p className="role">Ui/UX Designer and Web developer</p>
            <button>Download Resume</button>
          </div>
        </div>
      </main>
      <br />

      <section className="about">
        <h1>ABOUT ME</h1>
        <div className="about-container">
          <div className="about-image">
            <img src="./men.jpg" alt="pic" />
          </div>
          <div className="about-content">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptatem animi. Laborum at quod delectus
              placeat fugiat quas quam? Animi esse odit minus ipsa in, velit mollitia voluptatum amet officia.</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae eveniet quae sequi voluptas natus eaque
              ut unde nisi doloremque fugiat, eius veniam quis voluptatum earum omnis reiciendis. Veniam ea, asperiores
              qui tenetur nobis veritatis voluptatum et quos! Alias vitae voluptate tempore magni praesentium. Quisquam,
              nobis? Aliquam facere eum error laboriosam eos aspernatur animi officiis, omnis doloremque odit placeat in
              laborum suscipit molestiae similique totam nisi consequatur fuga ex recusandae adipisci vitae nostrum unde
              minus? Inventore aperiam ratione molestiae quibusdam tempore?</p>
            <div className="details">
              <div>
                <h4>Phone</h4>
                <p>+987 654 3210</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>browny@gmail.com</p>
              </div>
              <div>
                <h4>Website</h4>
                <p>www.portfolio.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />

      <section className="skills">
        <h1>Skills</h1>
        <div className="skill-container">
          <div className="container">
            <div className="skill">
              <h3>HTML 5</h3>
              <div className="progress-bar">
                <div></div>
              </div>
            </div>
            <div className="skill">
              <h3>Adobe photoshop</h3>
              <div className="progress-bar">
                <div></div>
              </div>
            </div>
            <div className="skill">
              <h3>Python</h3>
              <div className="progress-bar">
                <div></div>
              </div>
            </div>
            <div className="skill">
              <h3>CSS 3 animation</h3>
              <div className="progress-bar">
                <div></div>
              </div>
            </div>
            <div className="skill">
              <h3>Django</h3>
              <div className="progress-bar">
                <div></div>
              </div>
            </div>
            <div className="skill">
              <h3>JavaScript</h3>
              <div className="progress-bar">
                <div></div>
              </div>
            </div>
            <div className="skill">
              <h3>Communication</h3>
              <div className="progress-bar">
                <div></div>
              </div>
            </div>
            <div className="skill">
              <h3>Creativity</h3>
              <div className="progress-bar">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />

        <section className="contact">
          <h1>Contact me</h1>
          <div className="contact-container">
            <div className="form">
              <form>
                <div className="element">
                  <input id="name" type="text" placeholder="Name*" required />
                  <input id="email" type="text" placeholder="Email*" required />
                </div>
                <input id="subject" type="text" placeholder="Subject" />
                <textarea id="textarea" rows="10" placeholder="Message"></textarea>
                <button>Submit</button>
              </form>
            </div>
            <div className="form-details">
              <div className="form-name">
                <h3>Browny Stark</h3>
                <p>UI/UX DESIGNER and WEB DEVELOPER</p>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+987 654 3210</p>
              </div>
              <div>
                <h3>Email</h3>
                <p>browny@gmail.com</p>
              </div>
              <div>
                <h3>Website</h3>
                <p>www.portfolio.com</p>
              </div>

            </div>
          </div>
        </section>
      </>
      )
}

      export default App
