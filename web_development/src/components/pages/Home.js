import React from 'react';
import { Container, } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
.main-div{
  box-shadow: 0 0 5px green;
  padding: 30px;
  margin-bottom:5%;
}
.heading{
  font-weight:bold;
}
.micro{
  padding: 5px;
  font-size:14px;
  display: block;
}
.next-link{
  text-align: right;
}

`;

const Home = () => (
  <Styles>
    <Container className=" mb-20 main">
      <Container className="main-div">
        <h2>Web Developer</h2>
        <hr />
        <p>In the modern world, pretty much everyone has internet access of some form and a
          huge percentage of people use the internet every single day. Web development is
          quickly becoming one of the most attractive and best-paid career choices in the
          modern world. But what is a web developer and what exactly does one do?
      </p>
        <p>
          A <b>web developer</b> or programmer is someone who takes a web design – which has been
          created by either a client or a design team – and turns it into a website. They do
          this by writing lines and lines of complicated code, using a variety of languages.
          Web developers have quite a difficult job, because they essentially have to take a
          language we understand, such as English, and translate it into a language that a
          computer understands, such as Python or HTML.
      </p>
        <p>
          Every aspiring web developer will have questions about the profession, which is why we
          have put together this comprehensive guide, which aims to answer the above questions
          and more.
       </p>
        <hr />
        <div className="m-5 quiz-box">
          <div className="mb-8 quiz-heading">
            <h3>Let's dive into the world of <b>"Web Development"</b>.</h3>
          </div>
          <ul>
            <div className="m-5 quiz">
              <li className="mb-3 heading">
                What is Programming Language?
          </li>
              <div className="para">
                A programming language is a formal language, which comprises a set of instructions that produce
                various kinds of output. Programming languages are used in computer programming to implement
                algorithms. Most modern programming languages are object-oriented, or at least allow this
                style of programming. Examples of this are Java, Python, Ruby, C++, C# and other C languages.
          <div className="micro">
                  <b>Note:</b> According to Wikipedia, there are 700 programming langauages, to know more about programming languages check out here
            <a href="https://careerkarma.com/blog/how-many-coding-languages-are-there/"> Programming Languages</a>
                </div>
              </div>
            </div>
            <div className="m-5 quiz">
              <li className="mb-3 heading">
                Best Programming Languages To Learn
          </li>
              <div className="para">
                The ever-growing list of programming languages and protocols can make it tough for programmers
                and developers to pick any one language that’s most suitable for their jobs or project at hand.
                Ideally, every programmer should have knowledge of a language that’s close to the system (
                  C, Go, or C++), a language that’s object-oriented (Java or Python), a functional programming
                  language (Scala), and a powerful scripting language (Python and JavaScript).
            <div className="micro">
                  <b>Know more:</b> Guide to choose your programming language
            <a href="https://hackr.io/blog/best-programming-languages-to-learn-2020-jobs-future"> Future Developer</a>
                </div>
              </div>
            </div>
            <div className="m-5 quiz">
              <li className="mb-3 heading">
                What does a web developer do?
          </li>
              <div className="para">
                For a web developer it is crucial to know that the three main types of
                developers are front-end, back-end, and full-stack. Front-end developers are responsible for
                the parts of a website that people see and interact with, back-end developers are responsible
                for the behind the scenes code that controls how a website loads and runs, and full-stack
                developers do a bit of everything.
            <div className="micro">
                  <b>Do you know:</b> How will be your first day at new work as a web developer
            <a href="https://www.youtube.com/watch?v=aLFgbkN3-hM"> Developer Day</a>
                </div>
              </div>
            </div>
            <div className="m-5 quiz">
              <li className="mb-3 heading">
                Duties of Web Developers
          </li>
              Web developers typically do the following:
          <ul>
                <li>Meet with clients or management to discuss the needs and design of a website</li>
                <li>Create and test applications for a website</li>
                <li>Write code for the website, using programming languages such as HTML or XML</li>
                <li>Work with other team members to determine what information the site will contain</li>
                <li>Work with graphics and other designers to determine the website's layout</li>
                <li>Integrate graphics, audio, and video into the website</li>
                <li>Monitor website traffic</li>
              </ul>
            </div>
            <div className="m-5 quiz">
              <li className="mb-3 heading">
                Important Qualities for Web Developers
          </li>
              <ul>
                <li><b>Concentration:</b> Web developers must sit at a computer and write detailed code for long periods.</li>
                <li><b><i>Creativity:</i></b> Web developers often are involved in designing the appearance of a website and must
            make sure that it is appealing as well as functional.</li>
                <li><b><i>Customer-service skills:</i></b> Webmasters have to respond politely and correctly to user questions and requests.</li>
                <li><b><i>Detail oriented:</i></b>Web developers need to have an eye for detail, because a minor error in coding could cause an
            entire webpage to stop working.</li>
              </ul>
            </div>
            <div className="m-5 quiz">
              <li className="mb-3 heading">
                What tools do developers use?
          </li>
              <div className="para">
                They are number of web dev tools increasing almost daily, finding the best software to get the job done can sometimes feel daunting.
                To help you out, below are few essential tools for web development to get you started.
              <ul className="m-3 unorder-list">
                  <li><b>The Operating System (OS):</b> Linux, MacOS, Windows.</li>
                  <li><b>The Code Editor:</b> Vim, VS Code, Sublime Text, Emacs.</li>
                  <li><b>The Command Line / Terminal Emulators:</b> Command Line Interface (CLI), Bash, zsh, fish.</li>
                  <li><b>Version Control:</b> Github and repository hosts, svn, cvs, and more.</li>
                  <li><b>Debuggers:</b> Chrome DevTools, gdb, pry.</li>
                  <li><b>The Integrated Development Environment (IDE): An IDE is software that combines many of the previously discussed tools into
                  a single suite of tools.</b></li>
                </ul>
                <b>Note:</b> You can find pro's and con's of every above tool here..
              <a href="https://dev.to/wuz/what-tools-does-a-developer-use-3k28"> Pro's and con's of DevTools</a>
              </div>
            </div>
          </ul>
        </div>
        <div className="m-5 finish-line">
          <div className="para">
            <b><i>Now, let's move to the positions of Web Developers. What type of web developer would you think you want to be?,
        Next we will be looking for the three main type of developers and their responsibilies.</i></b>
          </div>
          {/* <div className="mt-5 next-link">
            next <Link to="/developers">Developer's</Link>
          </div> */}
        </div>
        <hr />
      </Container>
    </Container>

  </Styles>
);

export default Home;
