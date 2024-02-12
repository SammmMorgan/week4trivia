import { AppState } from "../AppState.js";
import { triviaService } from "../services/TriviaServices.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class TriviaController {

    constructor() {
    }

    async startButton() {
        await this.getTriviaQuestions()
        const activeQuestion = AppState.triviaQuestions[0]

        let htmlString = ''

        htmlString += activeQuestion.questionHTML

        setHTML('questionHTML', htmlString)


    }
    async getTriviaQuestions() {
        try {
            await triviaService.getTriviaQuestions()
            Pop.success
        } catch (error) {
            Pop.error
        }

    }

}