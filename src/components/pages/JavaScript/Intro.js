import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import styled from 'styled-components';
import Layout from '../../main/Layout';

const Styles = styled.div`
.intro{
    padding:2%;
  
    &:hover{
      box-shadow: 0 0 5px blue;
    }
  }
  .para-1, .para-3{
      margin: 2%;
  }
  .intro:first-letter, .para-3:first-letter{
      margin-left: 4%;
  }
`


class JavaScript extends Component {
    render(){
        const dataContent=(
            <Styles>
                <Container className="main-div">
                    <div>
                        <div className='intro'>
                            I am a <strong>MERN</strong> developer, and mern stack developer's life revolve around JavaScript; here we are going to start 
                            the journey of JavaScript with tiny bit pieces of each with very less and only needed information but with less information available here dosen't mean that we 
                            are learning some parts of JavaScript language, no thats not true. Here I will be sharing the links of the website where I found the information which helped  
                            me alot and where you go find, read and follow them to get more Javascript knowledge for your career as Javascript Developer.  
                        </div>
                        <p className='para-1'>
                    <strong>According</strong> to <strong><a href='https://en.wikipedia.org/wiki/JavaScript'> Wikipedia</a></strong> JavaScript often abbreviated as <strong>JS</strong>, 
                    is a programming language that conforms to the ECMAScript specification. JavaScript was initially created to <i>"make web pages alive"</i>.
                     The programs in this language are called <i>scripts</i>. They can be written right in a web page's HTML and run automatically as the page loads.
                     Scripts are provided and executed as plain text. They don't need special preparation or compilation to run. To deep dive in <a href='https://javascript.info/intro'>JavaScript</a>.</p>
                     <p className='para-3'>
                         But <strong><a href="https://www.w3schools.com/js/DEFAULT.asp">w3schools</a></strong> define JavaScript as the world's most popular programming language, the language of the web which is easy to learn. With that all said yes I do 
                         agree and also recommend you to try <i><strong>w3schools</strong></i> where you can practice and play with the code live.
                         <br/> Yes, just like <strong><a href="https://www.w3schools.com/js/DEFAULT.asp">w3schools</a></strong> they are many educational website for learning web technologies online. To name a few 
                         <a href='https://www.freecodecamp.org/'> Free Code Camp</a>, <a href='https://codepen.io/'>CodePen</a>, <a href='https://codesandbox.io/'>Code SandBox</a> do check them. </p> 
                     </div>
                     <div>
                     <h5>Contents</h5>
                     <ul>
                         <li>Basic</li>
                         <li>Advance</li>
                         <li>Core</li>
                     </ul>
                     </div>
                </Container>
            </Styles>
        )
        return <Layout Children={dataContent}/>
    }
}

export default JavaScript
