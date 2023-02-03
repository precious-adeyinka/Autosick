import Head from 'next/head';
import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const Profile = () => {
	const { isLoading, user, error } = useUser();
	if (isLoading) return <div>Loading...</div>;
	const [showPopup, setShowPopup] = useState(false);
	return (
		user && (
			<>
				<table className='table w-full'>
					<tbody>
						<tr>
							<td>Id</td>
							<td>{user.sub}</td>
						</tr>
						<tr>
							<td>Name</td>
							<td>{user.name}</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>{user.email}</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<button
									onClick={() => {
										setShowPopup(true);
									}}
									className='hover:underline'
								>
									Become and expertise
								</button>
							</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<a href='/api/auth/logout'>Log out</a>
							</td>
						</tr>
					</tbody>
				</table>
				{showPopup && (
					<section className='absolute top-0 left-0 bg-black bg-opacity-20 w-full h-full'>
						<div className='h-[60vh] w-[50%] bg-white left-[50%] top-[50%] translate-x-[50%] translate-y-[50%]'>
							<div>
								Confirm the following properties before apply as
								an expert
							</div>

							<button className='bg-sky-400 p-[5px]'>Done</button>
						</div>
					</section>
				)}
			</>
		)
	);
};

export default Profile;
