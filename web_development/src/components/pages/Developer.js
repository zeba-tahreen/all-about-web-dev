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

.dev-para{
  padding: 10px;
  font-style: italic;
}
.back-link{
  width: 50%;
  height: 200px;
  float: left;
}
.next-link{
  margin-left:50%;
  text-align: right;
}

`;

const Developer = () => (
  <Styles>
    <Container className="main-div">
      <div className="dev-main">
        <div className="mt-2 dev-heading">
          <h1>Types of Developers</h1>
        </div>
      <div className="mt-3 dev-para">
      As noted before, there are some different types of web developers, each of which focuses 
      on a different aspect of the creation of a website. Web developers also known as software engineers 
      who specialize in creating websites. They are either front-end developers, back-end 
      developers, middle-tier developers or full-stack developers
      </div>
      <hr/>
      <div className="dev-type">
        <h4 className="mt-5 header">There are 3 main types of developers in Web Development.</h4>
        </div>
        <div className="mt-5 dev-position">
          <h4><b><i>Front-End Developer</i></b></h4>
          <p>
          A front-end developer is someone who takes a client or design team’s website design 
          and writes the code needed to implement it on the web. A decent front-end web 
          developer will be fluent in at least three programming languages – HTML, CSS, and 
          JavaScript.
          </p>
          <p>
          <b>HTML</b> allows them to add content to a website while splitting it into headings, 
          paragraphs, and tables. <b>CSS</b> lets a decent developer style the content and change 
          things like colors, sizes, and borders. <b>JavaScript</b> allows the inclusion of interactive 
          elements, such as push buttons. We will go into more detail about these languages later.
          </p>
          <p><i><b>So, what do web developers do when they work on the front end of a website?</b></i>
            <br/>
            They make sure that all of the content that is needed for the 
            website is clear, visible, and found in the right place. They also make sure that the right 
            colors are in the right places, especially concerning text colors, background colors, 
            and headers. Some of the best front-end developers are also very good designers, allowing 
            them to tweak things as they go. The outbound links are correctly formatted, that all 
            buttons work properly, and that the website is responsive and attractive. Mobile design 
            is usually a big part of the job, while it is also important to make sure that a website 
            will display correctly on all web browsers.
          </p>
      </div>
      <hr/>
      <div className="mt-5 dev-position">
      <h4><b><i>Back-End Developer</i></b></h4>
          <p>
          A back-end developer is a type of programmer who creates the logical back-end and core 
          computational logic of a website, software or information system. The developer creates 
          components and features that are indirectly accessed by a user through a front-end 
          application or system.
          </p>
          <p>
            The <b>key job</b> role of a back-end developer is to ensure that the data or services 
            requested by the front-end system or software are delivered through programmatic means. 
            Back-end developers also create and maintain the entire back-end of a system, which 
            consists of the <b>core application logic</b>, <b>databases</b>, <b>data and application integration</b>, 
            <b>API</b> and other back-end processes. Moreover, a back-end developer performs the testing 
            and debugging of any back-end application or system.
          </p>
          <p><i><b>So, what do web developers do when they work on the back end of a website?</b></i>
            <br/>
            The backend developer job is to understand the goals of the website and come up with effective solutions.
            They will also be responsible for developing Payment processing system like accepting data, securely 
            storing that info, and making charges to that payment. Back-end developers also has to manage APIs 
            resources which work across devices, they also organize the logic of the system which runs across 
            various devices. If needed they also get involved in building frameworks or the architecture to make it 
            easier to program against. Back-end developers should have the skill for implementing algorithms and 
            solving system related problems.
          </p>
      </div>
      <hr/>
      <div className="mt-5 dev-position">
      <h4><b><i>Middle-tier developers or Full-stack developers</i></b></h4>
          <p>
          Full-stack developers understand both front and back-end strategies and processes, which means that 
          they are perfectly positioned to oversee the entire process. In the case of small websites that don’t 
          have a huge development budget, a full-stack developer will often be employed to build the entire website. 
          In this case, it is extremely important for them to have a complete, in-depth understanding of both front 
          and back-end development and how they work. This makes you a lot more employable, increasing your job 
          security in the future.
          </p>
          <p>
          As a <b>full-stack developer</b>, you will understand the connections between the front and back-ends of a 
          website, allowing you do build efficient and effective programs for all parts of the website. Although most 
          developers start with either front or back-end specializations, there are a lot of reasons why you should 
          consider branching out and learning both.
           
          </p>
          <p><i><b>So, what do web developers do when they work as Full stack developers?</b></i>
            <br/>
            You will end up with the knowledge to be able to create an entire website on your own.
            Full-stack developers are often employed to oversee large projects for big web development companies. 
            Positions like this are likely to be paid more than standard web development positions, making them more 
            attractive to developers. 
            <br/>
            Full-stack defines what is a web developer. Although most developers start with either front or back-end 
            specializations, there are a lot of reasons why you should consider branching out and learning both as it 
            will give you a greater understanding of the whole concept of what is web development and will make it 
            easier for you to create entire websites on your own. 
          </p>
          <p>If you think you can be a full stack developer, then you must see the types of stack coming next.</p>
      </div>
      {/* <div className="back-link">
            back <Link to="/">Home</Link>
      </div>
      <div className="next-link">
            next <Link to="/fullstack">Full Stack's</Link>
      </div> */}
      </div>
    </Container>
  </Styles>
);

export default Developer;
