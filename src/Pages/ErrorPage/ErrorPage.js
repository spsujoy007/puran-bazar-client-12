import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className="flex bg-white items-center h-full sm:p-16  text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		<img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=2000" alt="" />
		<p className="text-3xl">Cannot this find this page</p>
		<Link to='/' rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded bg-orange-600 text-gray-50">Back to homepage</Link>
	</div>
</section>
    );
};

export default ErrorPage;