import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";


export default function Home() {
  return (
    <Layout>
       <Head>
      {/* Primary Meta Tags */}
      <title>Welcome to Sajjad Ali Noor’s Portfolio | Full Stack Developer & AI Enthusiast(new) </title>
      <meta name="description" content="Explore the work of Sajjad Ali Noor, a skilled Python Developer specializing in AI, chatbot development, automation, and data-driven AI solutions." />
      <meta name="keywords" content="Python developer, AI enthusiast, chatbot development, automation, machine learning, data analysis, web scraping, NLP" />
      <meta name="author" content="Sajjad Ali Noor" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://sajjadalinoor.vercel.app/" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap"
        rel="stylesheet"
      />

      {/* Theme Color */}
      <meta name="theme-color" content="#b22222" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sajjadalinoor.vercel.app/" />
      <meta property="og:title" content="Welcome to Sajjad Ali Noor’s Portfolio | Full Stack Developer & AI Enthusiast" />
      <meta property="og:description" content="Discover Python development, AI solutions, and more in Sajjad Ali Noor’s portfolio, showcasing projects in automation, AI, and chatbot development." />
      <meta property="og:image" content="https://sajjadalinoor.vercel.app/og-image.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://sajjadalinoor.vercel.app/" />
      <meta name="twitter:title" content="Sajjad Ali Noor’s Portfolio" />
      <meta name="twitter:description" content="Full Stack Developer & AI enthusiast—check out my projects in Python, automation, and chatbots." />
      <meta name="twitter:image" content="https://sajjadalinoor.vercel.app/twitter-image.png" />

      {/* Internal Styles */}
      <style jsx>{`
        :global(html, body) {
          margin: 0;
          padding: 0;
          font-family: 'Open Sans', sans-serif;
          background-color: #ffffff;
          color: #333;
        }
        h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: 3rem;
          text-align: center;
          margin: 1rem 0;
          color: #b22222;
          letter-spacing: 1px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }
        .subtitle {
          display: block;
          text-align: center;
          font-size: 1.25rem;
          font-weight: 300;
          color: #555;
          margin-bottom: 2rem;
        }
        .container {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 1rem;
        }
      `}</style>
    </Head>

      <div
        style={{
         background: "white",
          minHeight: "100vh",
        }}
      >
        {/* Hero Section */}
        <header className="container text-center pt-5" role="banner">
          <h1>
            <span>Sajjad Ali Noor</span>
            <br />
            <span className="subtitle">Full Stack Developer & AI Enthusiast</span>
          </h1>
        </header>


        {/* Introduction Section */}
        <div className="container text-center mt-3">
          <h2 className="fw-bold">
            Transforming Ideas into Functional, Impactful Code with Python & React
          </h2>
          <p className="mt-4">
            Hi, I’m <strong>Sajjad Ali Noor</strong>, a passionate and skilled software engineer with a deep proficiency in Python programming and React. My journey into coding began with a thirst for automating everyday tasks and solving real-world problems. Through books like <em>Automate the Boring Stuff with Python</em> and <em>Master Python for Data Science</em>, I honed my skills by building various projects that not only strengthened my technical expertise but also fueled my love for problem-solving.
          </p>
          <p>
            In addition to my Python knowledge, I’ve developed a strong command of React by working on client projects that span across dynamic web applications. Whether it’s creating seamless user interfaces or developing powerful backend solutions, I’m committed to delivering innovative and efficient solutions that help businesses thrive.
          </p>
          <p>
            When I’m not coding, I’m constantly exploring new ways to push the boundaries of what’s possible in technology. I thrive on challenges and am always eager to learn and grow in this ever-evolving field.
          </p>
          <p><strong>Let’s build something great together!</strong></p>
        </div>

        {/* Skills & Technologies Section */}
        <div className="container mt-5">
          <h2 className="h3 text-center fw-bold">Skills & Technologies</h2>
          <div className="row mt-4">
            <div className="col-md-6">
              <h4 className="fw-bold">Programming Languages</h4>
              <ul className="list-unstyled">
                <li>
                  <strong>Python:</strong> Expert-level proficiency in Python, including automation, data science, AI, and web development.
                </li>
                <li>
                  <strong>JavaScript:</strong> Advanced experience with JavaScript, especially in web applications and dynamic content.
                </li>
                <li>
                  <strong>HTML/CSS:</strong> Strong foundation in HTML5 and CSS3 for creating responsive, accessible web interfaces.
                </li>
                <li>
                  <strong>SQL:</strong> Proficient in writing optimized SQL queries for database management and analysis.
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4 className="fw-bold">Frameworks & Libraries</h4>
              <ul className="list-unstyled">
                <li>
                  <strong>React:</strong> Expert in building dynamic, user-friendly front-end applications with React.js, using hooks, context API, and state management.
                </li>
                <li>
                  <strong>Django/Flask:</strong> Strong backend experience with Python frameworks Django and Flask, focusing on RESTful APIs and rapid development.
                </li>
                <li>
                  <strong>TensorFlow/Keras:</strong> Experience in building AI and machine learning models for various applications, including predictive analytics.
                </li>
                <li>
                  <strong>Node.js:</strong> Proficient in creating full-stack web applications using Node.js for backend development.
                </li>
                <li>
                  <strong>Pandas/NumPy:</strong> Expertise in data analysis and manipulation, using Pandas for data wrangling and NumPy for numerical computations.
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <h4 className="fw-bold">Other Skills</h4>
              <ul className="list-unstyled">
                <li>
                  <strong>AI & Machine Learning:</strong> Building intelligent models and systems using machine learning algorithms and neural networks for predictive analytics, NLP, and computer vision.
                </li>
                <li>
                  <strong>Web Scraping:</strong> Extracting data from websites using tools like BeautifulSoup, Selenium, and Scrapy.
                </li>
                <li>
                  <strong>Automation:</strong> Automating repetitive tasks with Python scripts and integrating APIs for data processing and reporting.
                </li>
                <li>
                  <strong>Data Science:</strong> Skilled in statistical analysis, data visualization, and working with large datasets using tools like Matplotlib, Seaborn, and Jupyter notebooks.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="container mt-5">
          <h2 className="h3 text-center fw-bold">Featured Projects</h2>
          <div className="row mt-4 g-4"> {/* Ensure both columns are inside this row */}
            {/* Left Column - AI-Powered PDF Chatbot */}
            <div className="col-md-6">
              <div className="card shadow-lg border-0 rounded-4 p-4 h-100">
                <h3 className="h5 fw-bold">AI-Powered PDF Chatbot with OpenAI</h3>
                <p className="text-muted">
                  Tired of manually searching through countless PDFs for relevant information? Our AI-Powered PDF Chatbot transforms documents into an interactive knowledge base, providing instant answers with real-time AI-driven insights.
                   <br /><br />
                  To enhance efficiency, our system leverages OpenAI’s NLP models to train on PDF content, allowing users to ask questions and receive precise responses without sifting through pages of text. Whether for research, business, or legal use, this smart assistant streamlines document search and eliminates time-consuming inquiries.
                   <br /><br />
                  With our AI-Powered PDF Chatbot, businesses and professionals can boost productivity, reduce workload, and access key information effortlessly—creating a seamless and intelligent document experience.
                  <br /><br /> 
                  The PDF chatbot is currently non-functional due to Heroku's ephemeral storage system, which prevents saving PDFs on the server and training the model on their text.
                </p>
                <div className="d-flex gap-2 mt-2">
                  <Link href="/PdfQuery" className="btn btn-outline-primary">
                    Go to PdfQuery Chatbot
                  </Link>
                  <a 
                    href="https://www.youtube.com/embed/Yd4SH-8hx0c" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-primary"
                  >
                    Demo Video
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Client Management System */}
            <div className="col-md-6">
              <div className="card shadow-lg border-0 rounded-4 p-4 h-100">
                <h3 className="h5 fw-bold">Client Management System</h3>
                <p className="text-muted">
                  Tired of endless inquiries about wait times? Our Client Management System keeps clients informed with real-time wait time updates through a live dashboard, eliminating uncertainty and reducing unnecessary back-and-forth.
                  <br /><br />
                  To further enhance efficiency, our system includes an AI-powered chatbot that acts as a virtual assistant, managing client inquiries on behalf of your team. This smart chatbot can be trained to answer FAQs, providing accurate and instant responses to ensure smooth operations.
                  <br /><br />
                  With our Client Management System, businesses can improve customer experience, reduce workload, and streamline communication—creating a seamless experience for both clients and teams.<br />
                  Username:Sarfraz5037. Password:123. (use these credentials to test Client Management System)
                  <br /><br /><br />
              
                </p>
                <div className="d-flex gap-2 mt-2">
                  <a
                    href="https://clinic-management-system-27d11.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    Client Management System Website
                  </a>
                  <a
                    href="https://www.youtube.com/embed/HZMLzdJDnZk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    Demo Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

          
        </div>
      
    </Layout>
  );
}