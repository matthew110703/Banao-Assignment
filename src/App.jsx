import { useContext } from "react";
import { AppContext } from "./lib/Context";

// Bootsrap imports
import { Image, Col, Container, Row } from "react-bootstrap";

// Custom UI Imports
import {
  Filters,
  Header,
  Hero,
  PostCard,
  Recommended,
  SignUpForm,
  CustomModal,
  LoginForm,
} from "./components";
import { posts } from "./lib/constants";
import { editLight } from "./assets";

const App = () => {
  const { modal, isMobile } = useContext(AppContext);

  return (
    <>
      <Header />
      <Hero />
      <CustomModal show={modal.signup || modal.login}>
        {modal.signup && <SignUpForm />}
        {modal.login && <LoginForm />}
      </CustomModal>
      <Container>
        <Filters />
        <Row className="mt-3 mb-5">
          {/* Post Feed */}
          <Col lg={8} className="d-flex flex-column gap-3 post-feed">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.description}
                category={post.category}
                date={post.date}
                location={post.location}
                image={post.image}
                org={post.org}
                splBtn={post.splBtn}
                btnText={post.btnText}
                btnType={post.btnType}
                user={post.user}
                views={post.views}
              />
            ))}
          </Col>

          <Col xl={{ span: 3, offset: 1 }} lg={4}>
            <Recommended />
          </Col>
        </Row>
        {/* Floating Button */}
        {isMobile && (
          <button className="floating-btn p-3 rounded-pill border-0">
            <Image src={editLight} width={24} height={24} />
          </button>
        )}
      </Container>
    </>
  );
};

export default App;
