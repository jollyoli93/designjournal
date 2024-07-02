export default function HeroBar() {

    return(
        <div className="border-black border-2">
					<hr className="border-black my-2"/>
          <div className="inline-block px-2 border-solid border-2 rounded-2xl my-2">
            Design Journal
          </div>
					<div>
						<h1 className="font-black md:text-2xl lg:text-4xl">This is the Hero bar at the top of my blog, big and loud</h1>
						<p>Small bit of writing or description below the header</p>
					</div>
					<hr className="border-black my-2"/>
        </div>
    )
}