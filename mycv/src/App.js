import './App.css';

function App() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className='h-screen col-start-2 col-end-4 bg-white grid-rows-4 border-slate-400 border-2'>
        <header className='row-span-1 h-32 m-4 grid grid-cols-4'>
          <img className='rounded w-11/12 ml-2' src='/retouch_2023110117222063.jpg' alt='' />
          <div className='col-span-3 ml-6'>
            <h1 className='text-2xl font-bold uppercase my-1'>Võ Thị Hưởng</h1>
            <h4 className='font-medium mb-1'>Intern Front-End Developer</h4>
            <p className='italic text-slate-600'>"I want to improve my skills in my current field and learn more about skills that I don't know. I believe that with my efforts I will become a fullstack developer."</p>
          </div>
        </header>

        <div className='infor relative row-span-1 grid grid-cols-4'>
          <div className='ml-3 mt-4 block'>
            <span className='text-sm font-bold uppercase'>Personal Information</span>
            <div className='mt-2'>
              <i className="text-slate-600 mr-2 fa-regular fa-calendar-days"></i>
              <span className='text-sm font-medium'>23/11/2001</span>
            </div>
            <div>
              <i class="mr-2 fa-solid fa-phone"></i>
              <span className='text-sm font-medium'>0862021583</span>
            </div>
            <div>
              <i className="text-slate-600 mr-2 fa-brands fa-github"></i>
              <a href='https://github.com/VTHuong231101' className='text-sm  underline'>https://github.com/VTH<br></br>uong231101</a>
            </div>
            <div>
              <i class="text-slate-600 mr-2 fa-brands fa-linkedin"></i>
              <a href='https://www.linkedin.com/in/vo-thi-huong/' className='text-sm  underline'>https://www.linkedin<br></br>.com/in/vo-thi-huong/</a>
            </div>
            <div>
              <i className="text-slate-600 mr-2 fa-solid fa-location-dot"></i>
              <span className='text-sm font-medium'>District 9, Ho Chi Minh City</span>
            </div>
            <div>
              <i class="text-slate-600 mr-2 fa-solid fa-envelope"></i>
              <span className='text-sm '>vothihuong231101@gm<br></br>ail.com</span>
            </div>
          </div>

          <div className='col-span-3 mt-4 ml-8'>
            <span className='text-lg font-bold uppercase underline'>Projects:</span>
            <div className='project leading-5 relative mt-2'>
              <span className='mb-3 font-bold uppercase'><i class="text-xs mr-1 fa-solid fa-share"></i>CV </span><br></br>
              <span className='font-medium text-sm italic'>Completed Within: <span className='font-normal'>4 hours</span></span><br></br>
              <span className='font-medium text-sm italic'>Use: <span className='font-normal'>HTML, CSS, React</span></span><br></br>
              <span className='font-medium text-sm italic'>Framework: <span className='font-normal'>Tailwind CSS</span></span>
              <a className='block underline text-sm text-blue-700' href='https://github.com/VTHuong231101/MyCV'>https://github.com/VTHuong231101/MyCV</a>
            </div>
            <div className='project leading-5 relative mt-2'>
              <span className=' font-bold uppercase'><i class="text-xs mr-1 fa-solid fa-share"></i>To Do App </span>
              <span className='text-sm italic'>(have Responsive for Tablet and Mobile)</span><br></br>
              <span className='font-medium text-sm italic'>Completed Within: <span className='font-normal'>5 days</span></span><br></br>
              <span className='font-medium text-sm italic'>Use: <span className='font-normal'>HTML, CSS, Javascript, React</span></span><br></br>
              <span className='font-medium text-sm italic'>Framework: <span className='font-normal'>Tailwind CSS</span></span>
              <a className='block underline text-sm text-blue-700' href='https://github.com/VTHuong231101/MyToDoApp'>https://github.com/VTHuong231101/MyToDoApp</a>
            </div>
            <div className='project leading-5 relative mt-2'>
              <span className='mb-3 font-bold uppercase'><i class="text-xs mr-1 fa-solid fa-share"></i>Anime Web Film </span><br></br>
              <span className='font-medium text-sm italic'>Completed Within: <span className='font-normal'>8 days</span></span><br></br>
              <span className='font-medium text-sm italic'>Use: <span className='font-normal'>HTML, CSS, Javascript, React</span></span><br></br>
              <span className='font-medium text-sm italic'>Framework: <span className='font-normal'>MDB</span></span>
              <a className='block underline text-sm text-blue-700' href='https://github.com/VTHuong231101/anime-web-film'>https://github.com/VTHuong231101/anime-web-film</a>

            </div>
          </div>
        </div>

        <div className='row-span-1 grid grid-cols-4 ml-4'>
          <div className='col-start-2 col-span-3 ml-5 mt-4'>
            <span className='text-lg font-bold uppercase underline'>Skills:</span>
            <div>
              <i class="text-xs mr-1 fa-solid fa-share"></i>
              <span>HTML, CSS, Javascript</span>
            </div>
            <div>
              <i class="text-xs mr-1 fa-solid fa-share"></i>
              <span>
                <span className='font-medium'>Library: </span>
                React (Route Dom, axiosClient), jQuery(AJAX), Lodash
              </span>
            </div>
            <div>
              <i class="text-xs mr-1 fa-solid fa-share"></i>
              <span>
                <span className='font-medium'>Framework: </span>
                Tailwind CSS, Bootstrap 5, MDB
              </span>
            </div>
            <div>
              <i class="text-xs mr-1 fa-solid fa-share"></i>
              <span>
                <span className='font-medium'>English: </span>
                Toeic 635 (Reading + Listening)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
