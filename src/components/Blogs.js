import React from 'react'
import {Container, Row ,Col} from "react-bootstrap";
import girlimage from "../img/girl.jpg";
import girlpic from "../img/2.jpeg";
import pic from "../img/3.jpeg";
import {Link} from "react-router-dom";
export default function Blogs() {
    return (
        <div>
            <Container>
                <Row className="blog-section mt-5">
                    <Col md={4}>
                        <img src={girlimage} className="image"/>



                    </Col>
                    <Col md={8}>
                         <Link to="/blog/:id">
                            <div className="title">Where does it come from?</div>
                            </Link>
                            <div className="about">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.  </div>


                    </Col>

                </Row>
                <Row className="blog-section mt-5">
                    <Col md={4}>
                        <img src={girlpic} className="image"/>



                    </Col>
                    <Col md={8}>
                         <Link to="/blog/:id">
                            <div className="title">Why do we use it?</div>
                            </Link>
                            <div className="about">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>


                    </Col>

                </Row>
                <Row className="blog-section mt-5">
                    <Col md={4}>
                        <img src={pic} className="image"/>



                    </Col>
                    <Col md={8}>
                         <Link to="/blog/:id">
                            <div className="title">What is Lorem Ipsum?</div>
                            </Link>
                            <div className="about">"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. 



</div>


                    </Col>

                </Row>
                <div className="page">
                <Link to="/blog/:id">
                <h5>1</h5>
                </Link>
                <Link to="/blog/:id">
                <h5>2</h5>
                </Link>
                <Link to="/blog/:id">
                <h5>3</h5>
                </Link>
                </div>
                


            </Container>
        </div>
    )
}
