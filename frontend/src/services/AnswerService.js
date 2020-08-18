import axios from "axios";

const QUIZ_REST_API_URL = "http://localhost:8080/quiz/questions";

class AnswerService {
  getQuiz() {
    return axios.get(QUIZ_REST_API_URL);
  }
}

export default new AnswerService();
