import React from 'react';

const MeetOurTeam = () => {
    return (
        <section className="py-6 bg-gray-100 text-gray-800">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4">
			<h3 className="text-2xl font-bold leading-none sm:text-5xl">Meet our team</h3>
			<p className="max-w-2xl text-gray-600">A programming team is a team of people who develop or maintain computer software. They may be organised in numerous ways, but the egoless programming team and chief programmer team have been common structures. </p>
		</div>
		<div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src="https://images.gr-assets.com/authors/1456905354p8/15050617.jpg" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">Jhankar Mahabub</h4>
					<p className="text-sm text-gray-600">Teacher of millions of programmers</p>
					<div className="flex mt-2 space-x-2">
						
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src="https://wp.technologyreview.com/wp-content/uploads/2021/02/20210128_Keatley-Bill_Gates_0107_R.jpeg" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">Bill Gates</h4>
					<p className="text-sm text-gray-600">Web developer</p>
					<div className="flex mt-2 space-x-2">
						
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src="https://assets.bonappetit.com/photos/5c4a35b82b5a010ddc819a38/6:9/w_2221,h_3332,c_limit/mark-zuckerberg.jpg" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">Mark Zukarberg</h4>
					<p className="text-sm text-gray-600">Web developer</p>
					<div className="flex mt-2 space-x-2">
						
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/640px-Steve_Jobs_Headshot_2010-CROP2.jpg" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">Steve Jobes</h4>
					<p className="text-sm text-gray-600">CEO Of Apple</p>
					<div className="flex mt-2 space-x-2">
						
					</div>
				</div>
			</div>
			
		</div>
	</div>
</section>
    );
};

export default MeetOurTeam;