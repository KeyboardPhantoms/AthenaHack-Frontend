import "./About.css";
const About = () => {
  return (
    <>
      <div id="About" style={{ height: "90vh" , fontSize: "1.3rem"}}>
        <div
          className="container"
          style={{
            color: "white",
          }}
        >
          <div className="col-md-8">
            <div className="row">
              <div
                className="section-title"
                style={{
                  padding: "2rem",
                }}
              >
                <h2>About Us</h2>
                <p>
                  We all have that one corner in our room that is filled with
                  books which beg to be read by someone, at least once in a
                  while! There are also times where we wanna buy new books but
                  their jaw dropping prices make us forget all about them *sad
                  sigh*. So for all these situations, we have listed out an
                  amazing websites that let you buy, sell or rent books online,
                  check ‘em out!
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div
                  className="section-title"
                  style={{
                    padding: "2rem",
                  }}
                >
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
               
                <form name="sentMessage">
                  <div className ="area">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></input>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  </div>

                  <button type="submit" className="btns">
                    Send Message
                  </button>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
