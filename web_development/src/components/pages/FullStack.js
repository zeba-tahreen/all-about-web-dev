import React from 'react';
import { Container, } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.main-div{
  box-shadow: 0 0 5px green;
  padding: 30px;
  margin-bottom:5%;
}
.stack-list{
  padding: 10px;
}
`;

const FullStack = () => (
  <Styles>
    <Container className=" mb-20 main">
    <Container className="main-div">
      <div className="fullstack-main">
        <h2>Full stack Development</h2>
        <div className="intro-stack">
          <p>
          A “stack” refers to any combination of programming languages and technologies or a combination of software products. 
          Technically there are two types of development stacks: Firstly, a technology stack & Secondary, an application stack.
          A web application stack typically consists of Server side programming + Database (aka Back end), 
          Client side programming (aka Front end). This is called as Full Stack. A full stack developer 
          is an expert expected to be able to know the technologies used in the stack and work with them.
          
          </p>
          <p>
          They are many diffrent types of stack, you will find similarities in the architecture and design 
          patters across different stacks.
          </p>
          <hr/>
          <h5>Lets begin the stack list that are most talked about in the market of Web Development</h5>
          <div className="mt-4 stack-list">
          <p><b>LAMP Stack: Linux - Apache - MySQL - PHP</b></p>
          <p>LAMP has been a popular choice for web development since 2000 due to its open-source nature 
            and Linux’s friendliness towards developers. It includes Linux operating system, Apache web 
            server, MySQL database, and PHP application software. Recently, LAMP stack has been slowly 
            transforming into LEMP, with more and more developers replacing Apache web server with NGINX. 
            Although Apache is used by the lion’s share of existing websites, it’s taking losses while 
            NGINX is rapidly growing.</p>
          </div>
          <div className="mt-4 stack-list">
          <p><b>MEAN Stack: MongoDB, Express, AngularJS, and Node.js</b></p>
          <p>The term “MEAN Stack” stated as a set of collected JavaScript-based technologies used to 
            develop complex websites and web apps (progressive or responsive). In simple words, MEAN, 
            as explained as a full-stack JavaScript framework — which simplifies and accelerates web 
            & application development. As a versatile stack running on a uniform language, MEAN is a 
            preferred technology for startups, often called an evolved version of LAMP. Among the companies embracing the MEAN 
            approach are Uber, Google, Netflix, and PayPal. We’ll talk more about the benefits and 
            drawbacks of this stack and JavaScript development on the whole in the main section of 
            the article.</p>
          </div>
          <div className="mt-4 stack-list">
            <p><b>MERN Stack: MongoDB, Express, ReactJs, NodeJs</b></p>
            <p>MERN Stack, a combination of technologies used to craft premium web apps. Web apps are 
              developed using multiple technologies more likely to say frameworks, libraries, 
              databases and more. The MERN stack is a JavaScript stack used for the smooth flow of 
              the development process. MERN consists of different open-source components: MongoDB, 
              Express, React, and Node.js. All the components provide the end-to-end framework support 
              for developers to work in.
              <br/>
              <br/>
              The MERN stack is very similar to MEAN stack. The only difference here is that the MEAN 
              stack is making use of Angular to build the front-end web application but in the MERN 
              stack is using React instead.</p>
          </div>
          <div className="mt-4 stack-list">
            <p><b>Ruby on Rails: Ruby, SQLite, PHP</b></p>
            <p>Often called just Rails, this web development framework uses Ruby as a programming 
              language and its own default database called SQLite with various compatible web 
              servers such as Apache, NGINX, Passenger, or WEBrick. Rails is especially popular 
              among startups due to various reasons. The abundance of shareable software libraries 
              called RubyGem allows businesses to develop rapidly using free and existing components.</p>
          </div>          
          <div className="mt-4 stack-list">
            <p><b>Django Stack: Python, Django, MySQL</b></p>
            <p>Instagram, Mozilla, Bitbucket, and the NASA’s website are all powered by this Python-driven 
              environment. With the attention towards such technologies as machine learning and big data 
              that majorly rely on Python, the language popularity is steadily growing, according to TIOBE 
              and StackOverflow. Django follows the “batteries included” approach meaning that all of its 
              functionality already comes with the framework and doesn’t require additional libraries. 
              Thanks to this, Django relieves you from making many choices and makes it possible to create 
              news, blogs, or eCommerce stores with its abundance of default tools. </p>
          </div>

        </div>
 
      </div>
    </Container>

    </Container>

  </Styles>
);

export default FullStack;
