import express, { Application, Request, Response } from "express";
import { Pokedex } from "../node-express-typescript-starter/weather-classes"
import { PokedexTmdb } from '../node-express-typescript-starter/tmdb-classes'
var cron = require('node-cron');
import axios, { AxiosResponse } from 'axios';
interface Post {
	userId: Number;
	id: Number;
	title: String;
	body: String;
}

const app: Application = express();
const port = 3000;
var task:any = undefined;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cron job

app.get(
	"/startTask",
	async (req: Request, res: Response): Promise<Response> => {
		task = cron.schedule('* * * * *', () => {
			console.log('Cron job is doing its job and running on server....');
		}, {
			scheduled: false
		});

		task.start();
		return res.status(200).send({
			message: "Task is started",
		});
	}
);

app.get(
	"/stopTask",
	async (req: Request, res: Response): Promise<Response> => {
		
		task.stop();
		return res.status(200).send({
			message: "Task is stopped",
		});
	}
);

app.get(
	"/destroyTask",
	async (req: Request, res: Response): Promise<Response> => {
		try {
			task.destroy;
			return res.status(200).send({
				message: "Task is destroyed",
			});

		} catch (error) {
			return res.status(200).send({
				message: error.message,
			});
		}
	}
);

app.get(
	"/ajaxRequest",
	async (req: Request, res: Response): Promise<Response> => {
		try {
			let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
			let posts: [Post] = result.data;
			return res.status(200).json({
				message: posts
			});
		} catch (error) {
			console.log(error.message);
			return res.status(400).json({
				message: "Sorry some error occured refer to logs for more information"
			});
		}

	}
);
app.get(
	"/getWeather",
	async (req: Request, res: Response): Promise<Response> => {
		try {
			let result: AxiosResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=9c6054f35cdd24a3739da049aa97de19`);
			let weather: Pokedex = result.data;
			return res.status(200).json({
				message: weather.coord
			});
		} catch (error) {
			console.log(error.message);
			return res.status(400).json({
				message: "Sorry some error occured refer to logs for more information"
			});
		}

	}
);
app.get(
	"/getMovies",
	async (req: Request, res: Response): Promise<Response> => {
		try {
			let result: AxiosResponse = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=0c6f4bd90f75e93d95d4c6fd9c806f4e&language=en-US`);
			let movies: PokedexTmdb = result.data;
			return res.status(200).json({
				message: movies.results[0].overview
			});
		} catch (error) {
			console.log(error.message);
			return res.status(400).json({
				message: "Sorry some error occured refer to logs for more information"
			});
		}

	}
);




try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${error.message}`);
}
