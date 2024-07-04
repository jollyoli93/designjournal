export default function HeroBar() {

    return(
        <div>
					<hr className="border-black border-1 py-4"/>
          <div className="text-sm md:text-base lg:text-lg inline-block px-2 border-solid border-2 rounded-2xl my-2">
            Design Journal
          </div>
					<div>
						<h1 className="py-2 font-black text-center lg:text-left text-xl md:text-2xl lg:text-4xl">This is the Hero bar at the top of my blog, big and loud</h1>
						<p className="py-2 text-center lg:text-left">Small bit of writing or description below the header</p>
					</div>
					<hr className="border-black border-1 my-6"/>
        </div>
    )
}