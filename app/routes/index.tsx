import { useFetcher } from '@remix-run/react'
import type { ActionFunction } from '@remix-run/node'
import { roClient } from '~/server/index.server'

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData()
	const { _action, ...values } = Object.fromEntries(formData)
	let username = formData.get('username')
	const user = await roClient.v2.userByUsername(username)
	return user.data.id
}

export default function Index() {
	const fetcher = useFetcher()
	return (
		<div className='flex justify-center'>
			<div>
				<div className='my-3 text-3xl font-bold'>Twitter ID checker</div>
				<fetcher.Form method='post'>
					<div>
						<label>
							<input
								className='w-full focus:border-b-2 focus:outline-none focus:border-blue-500 text-lg md:text-2xl appearance-none border-b-2 border-black'
								type='text'
								name='username'
							/>
						</label>
						<div className='flex justify-end'>
							<button hidden type='submit' name='_action' value='add' />
						</div>
						<div className='text-2xl mt-3'>
							{fetcher.data && <div>ID: {fetcher.data}</div>}
						</div>
					</div>
				</fetcher.Form>
			</div>
		</div>
	)
}
