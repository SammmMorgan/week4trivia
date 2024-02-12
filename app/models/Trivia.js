import { AppState } from "../AppState.js";
import { generateId } from "../utils/GenerateId.js";

export class Trivia {
    constructor(data) {
        this.id = generateId()
        this.type = data.type
        this.category = data.category
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.wrongAnswer = data.incorrect_answers
    }

    get questionHTML() {

        return `
    <section class="row justify-content-center">
    <div class="col-8 d-flex justify-content-center">
      <div class="card text-white bg-info">
        <div class="card-body">
          <h4 class="card-title"> Category- ${this.category} </h4>
          <p class="card-text">${this.question}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="row p-5">
          <div class="col-6 p-4">
            <div class="card text-white bg-info">
              <div class="card-body">
                <p class="card-text">${this.answers[0]}</p>
              </div>
            </div>
          </div>
          <div class="col-6 p-4">
            <div class="card text-white bg-info">
              <div class="card-body">
                <p class="card-text">${this.answers[1]}</p>
              </div>
            </div>

          </div>
          <div class="col-6 p-4">

            <div class="card text-white bg-info">
              <div class="card-body">
                <p class="card-text">${this.answers[2]}</p>
              </div>
            </div>
          </div>
          <div class="col-6 p-4 ">
            <div class="card text-white bg-info">
              <div class="card-body">
                <p class="card-text">${this.answers[3]}</p>
              </div>
            </div>

          </div>
      </div>

    </section>
    `
    }

    get answers() {
        let allAnswers = [...this.wrongAnswer]
        allAnswers.splice(Math.floor(Math.random() * allAnswers.length), -1, this.correctAnswer)
        console.log(allAnswers);

        let answersHTML = ''
        allAnswers.forEach(answer => answer.answersHTML =
            `<div class="col-6 p-4 ">
        <div class="card text-white bg-info">
          <div class="card-body">
            <p class="card-text">${this.answers[0]}</p>
          </div>
        </div>

      </div>`)
        return answersHTML
    }

}