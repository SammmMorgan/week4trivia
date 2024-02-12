import { AppState } from "../AppState.js";
import { Trivia } from "../models/Trivia.js";
import { questionAPI } from "./axiosService.js";

class TriviaService {
    async getTriviaQuestions() {
        const response = await questionAPI.get()




        const newQuestions = response.data.results.map(pojoQuestions => new Trivia(pojoQuestions))

        console.log('newQuestions', newQuestions);
        AppState.triviaQuestions = newQuestions
    }


}


export const triviaService = new TriviaService()