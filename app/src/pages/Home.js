import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='card mt-2'>
            <div className='m-2 my-3 d-flex card-body'>
              <div>
              <img src="./assets/myphoto.png" alt="" height={'250px'} width={'auto'} className='boreder rounded'/>
              </div>
              <div className='m-2'>
              <h1>Prem Y</h1>
              <p>Student at Sahyadri College of Engineering & Management</p>
              <p>Learning</p>
              <ul className='list-group-sm'>
                <li className='list-group-items'>Designing and Analysis of Algorithms with Python</li>
                <li className='list-group-items'>Operating System</li>
                <li className='list-group-items'>Embedded System concepts with ARM</li>
                <li className='list-group-items'>MERN stack</li>
              </ul>
              </div>
            </div>
        </div>
        <div className='card mt-2'>
          <div className='card-body'>
          <h3>About</h3>
          <p>Hi, I'm Prem Rao, an adept orator, team leader, and a fast learner. I'm passionate about leveraging my communication and leadership skills to deliver high-quality results in any project I undertake.

As a diligent student, I am actively acquiring proficiency in HTML, CSS, and JavaScript, while also immersing myself in the intricacies of the MERN stack. This exciting journey allows me to effectively address a wide array of web development challenges. Moreover, I possess a strong foundation in C,C++,Java programming languages, which significantly enhances my problem-solving abilities.

In addition to my core skills, I am also developing expertise in working with APIs and utilizing Postman effectively. Understanding how to interact with APIs and employing Postman as a tool has broadened my horizons in web development and data exchange.

Throughout my academic pursuits, I have consistently maintained a good CGPA, showcasing my unwavering commitment to excellence in all aspects of my studies. As I continue to grow and learn, I eagerly anticipate applying my knowledge, skills, and passion to make a positive impact in the dynamic world of web development.

I enjoy collaborating with others and am always looking for new opportunities to expand my skills and knowledge. Whether it's leading a team to success or working on complex coding projects, I'm committed to delivering the best possible outcomes. Let's connect and see how we can work together!</p>
          </div>

        </div>
        
        
  
      </div>
    </div>
  )
}

export default Home
