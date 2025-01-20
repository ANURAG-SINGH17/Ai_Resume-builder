import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profilePanel , setProfilePanel] = useState(false);

    useEffect(()=>{

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".intro-2 video",{
            width:"96%",
            duration: 1,
            scrollTrigger:{
              trigger:".intro-2",
              start:"top 50%",
              end:"top 5%",
              scrub: true,
            }
        })

        const checkLoginStatus = () => {
            const token = localStorage.getItem('token'); // Example of checking user data in local storage
            if (token) {
              setIsLoggedIn(true);
            }
          };
      
        checkLoginStatus();

    },[])

    useEffect(()=> {
        if(profilePanel){
          gsap.to('.profileTogel',{
            duration: 0.5,
            height:'80px'
          })
        }
        if(!profilePanel){
          gsap.to('.profileTogel',{
            duration: 0.5,
            height:'0px'
            })
        }
      }, [profilePanel])
    
      const LogoutHandler = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
              });
              localStorage.removeItem('token');
              navigate('/');
              window.location.reload()
              } catch (error) {
                console.error('Error logging out:', error);
              }
      }

  return (
       <>
       <div className='overflow-x-hidden'>
       <div className='hero-section'>
            <nav>
                <div className="logo flex gap-3 items-center">
                    <div className='bg-white w-4 h-4 rounded-full'></div>
                    <h1>Resume.Ai</h1>
                </div>
                <div className="nav-link">
                    <Link to="/"><h2>Home</h2></Link>
                    <Link to='/document'>Document</Link>
                    <Link to="/template-selection"><h2>Resume</h2></Link>
                    <h2>Contact</h2>
                </div>
                {isLoggedIn ? (
              <img
              onClick={()=> {
                setProfilePanel(!profilePanel);
              }}
                className="w-[4vw] rounded-full cursor-pointer"
                src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
                alt="User"
              />
            ) : (
              <div>
                <Link
                  to="/login"
                  className="sign-in-btn font-semibold text-black bg-white px-4 py-2 rounded-md"
                >
                  Sign In
                </Link>
              </div>
            )}
            </nav>
            <div className='profileTogel h-0 overflow-hidden absolute w-[15vw] bg-zinc-800 rounded-md z-50 right-20 top-16'>
          <button onClick={()=>{
            LogoutHandler();
          }} className='bg-white text-black ml-4 px-2 py-1 font-semibold mx-5 my-5  rounded-md'>Logout</button>
          </div>
            <div className='Hero-Content'>
                <h1 className=' font-medium'> Create a professional resume in minutes with the <span className='text-[#483ed6]'> power of AI.</span></h1>
            </div>
            <div className='w-full flex justify-center'>
                <p className='w-[40vw] text-center'>Say goodbye to boring resumes! AI Resume Maker generates professional resumes in minutes.. improve your writing & highlight your strengths.</p>
            </div>

            <div className='w-full flex justify-center pt-10'>
                <Link to='/template-selection'><button className='sign-in-btn font-semibold text-black bg-white px-4 py-2 rounded-md'>Get Started for Free</button></Link>
            </div>

        </div>
        <div className='intro-AI relative'>
                <h1 className='text-[4.5vw] font-semibold text-white'>AI resume writer, <span className=' text-[#5b80e8]'>powered by</span> <span className='text-[#8b75d2]'>G</span><span className='text-[#9e71c7]'>e</span><span className='text-[#c5698e]'>mini</span></h1>
                <p className='w-[55vw] text-white text-center'>Resume.AI the power of Gemini in a quick interface that ensures you can focus on creating a resume, rather than switching between tools. Fine-tuned to deliver professional suggestions, the Resume.AI Gemini AI assistant takes you one step closer to the next step in your career.</p>
                <div className='flex w-full justify-center'>
                <img className=' w-[10vw] mt-8' src="/images/Gemini-logo-removebg-preview.png" alt="logo" /> 
                </div>
                <img className='absolute bottom-[5vw] right-[33vw]' src="/images/down-Arrow-removebg-preview.png" alt="logo" />
        </div>
        <div className='intro-2'>
        <video autoPlay muted loop src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_videos/RNDR_KaleidoscopeSparkle_016_16-9.mp4"></video>
        </div>
        <div className='ai-chat w-full h-screen flex bg-[#0a0a0a] px-[14vw] text-white'>
        <div className='h-screen w-[50vw] flex justify-center items-center'><img className='w-[28vw]' src="https://enhancv.com/_next/static/images/featureTailoredImage-299a4298495747a7501ab285573db1a6.svg" alt="" /></div>
        <div className='w-[50vw] h-screen flex flex-col items-center px-[4vw] gap-3 pt-[8vw] relative'>
            <h1 className='font-semibold text-[4vw] leading-[4vw]'><span className='text-[#5b80e8]'>AI base</span> <span className='text-[#8b75d2]'>chat </span> <span className='text-[#c5698e]'>Application</span></h1>
            <p className='text-[1.3vw]'>An AI-powered resume maker with an integrated chat application that provides career guidance, builds professional resumes, and generates concise summaries to enhance job applications.</p>
            <img className=' w-[13vw] absolute  rotate-90 bottom-[7vw] left-[7vw]' src="images/down-Arrow-removebg-preview.png" alt="arrow" />
        </div>
        </div>
        <div className='w-screen h-screen flex gap-4 bg-[#0a0a0a] px-[14vw] text-white overflow-hidden'>
         <div className='w-[50vw] h-screen flex flex-col items-center px-[4vw] gap-3 pt-[8vw] relative'>
            <h1 className='font-semibold text-[4vw] leading-[4vw]'><span className='text-[#5b80e8]'>ATS -</span> <span className='text-[#8b75d2]'>Friendly</span> <span className='text-[#c5698e]'>Resume</span></h1>
            <p className='text-[1.3vw]'>We optimized these resumes for applicant tracking systems (ATS) using the capabilities of Gemini AI.
            Pick your favorite template and use it as a starting point for your application.</p>
        </div>
        <div className='h-screen w-[50vw] flex justify-center items-center'><img className='w-[28vw] rounded-md' src="/images/resume-3_page-0001.jpg" alt="" /></div>
        </div>
        <div className='min-h-screen w-screen bg-[#0a0a0a] text-white px-[4vw] pt-[5vw]'>
            <div className='w-[60vw] pb-[4vw]'>
                <h1 className='text-[4vw] leading-none'><span className='text-[#5b80e8]'>Let's create Resume thats helps you</span> <span className='text-[#8b75d2]'>get hired at</span> <span className='text-[#c5698e]'>top companies</span></h1>
            </div>
            <div className='w-full h-[62vh] border-t-[1px] border-gray-400 flex '>
                <div className='w-1/2 flex items-end p-5'>
                <p>&copy; 2025 Resume.Ai. All rights reserved.</p>
                </div>
                <div className='w-1/2 flex items-end p-5 justify-end'>
                <div className='flex gap-[1vw]'>
                    <a href="https://www.instagram.com/anurag_aswal_306/"><img className='w-[5vw] rounded-full cursor-pointer' src="https://img.freepik.com/free-vector/instagram-logo_1199-122.jpg?semt=ais_hybrid" alt="insta" /></a>
                    <a href="https://github.com/ANURAG-SINGH17">
                    <img className='w-[5vw] rounded-full cursor-pointer' src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="logo" />
                    </a>
                   <a href="https://www.linkedin.com/in/anurag-singh-200001315/">
                   <img className='w-[5vw] rounded-full cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="" />
                   </a>
                </div>
                </div>
            </div>
        </div>
       </div>
       </>
  )
}

export default Home
