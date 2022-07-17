import dotenv from 'dotenv'
dotenv.config({ path: '../../.env' })
import { TwitterApi } from 'twitter-api-v2'

const twitterClient = new TwitterApi({
	appKey: process.env.CONSUMER_KEY,
	appSecret: process.env.CONSUMER_SECRET,
	accessToken: process.env.ACCESS_KEY,
	accessSecret: process.env.ACCESS_SECRET
})

const roClient = twitterClient.readOnly

export { roClient }
