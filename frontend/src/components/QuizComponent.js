import React, { Component } from "react";
import { Link } from "react-router-dom";
import QuizService from "../services/QuizService";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from "@material-ui/core";

class QuizComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quiz: [],
      dataArray: []
    };
  }

  componentDidMount() {
    QuizService.getQuiz().then((response) => {
      this.setState({ quiz: response.data });
    });
  }

  handleChange = (event) => {
    let data = event.target.value.charAt(0);
    this.state.dataArray.push(data);
    console.log(this.state.dataArray);
  }

  calculate = () => {
    let aScore = 0;
    let bScore = 0;
    let cScore = 0;
    let dScore = 0;
    let eScore = 0;
    for(let i = 0; i < this.state.dataArray.length; i++) {
      if(this.state.dataArray[i] === 'A') {
        aScore++;
      } 
      if(this.state.dataArray[i] === 'B') {
        bScore++;
      } 
      if(this.state.dataArray[i] === 'C') {
        cScore++;
      } 
      if(this.state.dataArray[i] === 'D') {
        dScore++;
      } 
      if(this.state.dataArray[i] === 'E') {
        eScore++;
      } 
    }

    if(aScore > bScore && aScore > cScore && aScore > dScore && aScore > eScore) {
      alert("Zach");
    }
    if(bScore > aScore && bScore > cScore && bScore > dScore && bScore > eScore) {
      alert("Lionel");
    }
    if(cScore > aScore && cScore > cScore && bScore > dScore && cScore > eScore) {
      alert("George");
    }
    if(dScore > aScore && dScore > bScore && dScore > cScore && dScore > eScore) {
      alert("Kaley");
    }
    if(eScore > aScore && eScore > bScore && eScore > cScore && eScore > dScore) {
      alert("Pasha");
    }

    console.log(Math.max(aScore,bScore,cScore,dScore,eScore));
  }

  render() {
    return (
      <div>
        <h1>Questions List</h1>

        <div>
          {this.state.quiz.map((question) => (
            <div style={{ flexGrow: 1 }}>
              <FormControl component="fieldset">
                <FormLabel variant="h6" component="legend">
                  {question.question}
                </FormLabel>
                <RadioGroup
                  aria-label="answer"
                  name="answer"
                  //   value={value}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    value={question.answer1}
                    control={<Radio />}
                    label={question.answer1}
                  />
                  <FormControlLabel
                    value={question.answer2}
                    control={<Radio />}
                    label={question.answer2}
                  />
                  <FormControlLabel
                    value={question.answer3}
                    control={<Radio />}
                    label={question.answer3}
                  />
                  <FormControlLabel
                    value={question.answer4}
                    control={<Radio />}
                    label={question.answer4}
                  />
                  <FormControlLabel
                    value={question.answer5}
                    control={<Radio />}
                    label={question.answer5}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          ))}
          <Button
            variant="contained"
            color="primary"
            // component={Link}
            // to="/results"
            onClick={this.calculate}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
