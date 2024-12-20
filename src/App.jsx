
function App() {

  return (
    <>
      <div className="min-h-screen w-full bg-Neutral-White grid place-items-center">
        <div className="w-full max-w-[1200px] min-h-[700px] py-8 px-4 grid gap-12 md:gap-7 grid-cols-1 md:grid-cols-4 auto-rows-[65px]">
          <div className="bg-Purple-500 w-full p-10 md:col-start-2 md:col-end-4 row-span-4 rounded-xl grid place-items-center text-center overflow-hidden shadow-md gap-5 md:gap-2">
            <p className="text-Neutral-White font-semibold text-5xl md:text-6xl leading-10">Social Media <span className="text-Yellow-500 ">10x</span> <em>Faster</em> with AI</p>
            <div>
              <img src="/assets/images/illustration-five-stars.webp" alt="Five golden stars" className="w-1/2 object-contain mx-auto" />
              <p className="text-Neutral-White/80">Over 4,000 5-star reviews</p>
            </div>
          </div>

          <div className="bg-white shadow-md md:col-span-1 md:row-start-5 row-span-3 rounded-xl grid place-items-center gap-6 px-8 py-4 text-pretty overflow-hidden">
            <img src="/assets/images/illustration-multiple-platforms.webp" alt="Illustration of social media followers count" className="w-full md:scale-150 md:ml-24" />
            <p className="text-3xl font-medium leading-7">Manage multiple accounts and platforms.</p>
          </div>

          <div className="bg-Yellow-500 md:col-span-1 md:row-start-5 row-span-3 rounded-xl grid md:place-items-center gap-4 py-3 px-6 overflow-hidden shadow-md">
            <p className="text-3xl font-medium leading-7">Maintain a consistent posting schedule.</p>
            <img src="/assets/images/illustration-consistent-schedule.webp" alt="Illustration of a calendar" className="w-3/4 md:w-full"/>
          </div>

          <div className="bg-Purple-100 row-span-5 md:row-span-7 rounded-xl grid gap-5 md:gap-20 p-8 overflow-hidden shadow-md">
            <p className="text-3xl font-medium leading-7">Schedule to social media.</p>
            <img src="/assets/images/illustration-schedule-posts.webp" alt="Illustration of a post schedule chart" className="md:scale-[2] md:ml-24" />
            <p className="text-sm">Optimize post timings to publish content at the perfect time for your audience.</p>
          </div>

          <div className="bg-Purple-500 md:col-start-3 md:col-span-2 row-span-4 md:row-span-3 rounded-xl flex flex-col md:flex-row gap-4 items-center p-6 text-Neutral-White overflow-hidden text-center md:text-left shadow-md">
            <img src="/assets/images/illustration-grow-followers.webp" alt="Illustration of followers growth statistics" className="w-3/4 md:w-1/2 object-contain" />
            <p className="font-medium text-3xl px-5 md:px-0 md:pr-5 leading-8">Grow followers with non-stop content.</p>
          </div>

          <div className="bg-white shadow-md md:row-start-8 row-span-3 rounded-xl grid gap-4 items-center px-8 py-4 overflow-hidden">
            <p className="text-6xl font-medium">&gt;56%</p>
            <p className="text-sm font-medium">faster audience growth</p>
            <img src="/assets/images/illustration-audience-growth.webp" alt="Illustration of social avatars" className="w-full"/>
          </div>
          
          <div className="bg-Yellow-100 md:col-start-1 md:row-start-1 row-span-4 md:row-span-5 rounded-xl p-8 grid place-items-center overflow-hidden shadow-md">
            <div>
              <p className=" text-4xl mb-8 font-medium leading-8">Create and schedule content <span className="text-Purple-500"><em>quicker.</em></span></p>
              <img src="./assets/images/illustration-create-post.webp" alt="Illustration of a create post button" />
            </div>
          </div>

          <div className="bg-Yellow-500 md:col-start-1 md:row-start-6 row-span-4 md:row-span-5 rounded-xl grid gap-5 md:gap-12 md:place-items-center p-6 overflow-hidden shadow-md">
            <p className="text-4xl font-medium leading-8 md:pr-5">Writing your content using AI.</p>
            <img src="/assets/images/illustration-ai-content.webp" alt="Illustration of a human to AI chat box" className="w-3/5 md:w-full object-contain" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App