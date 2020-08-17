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
      dataArray: [],
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
  };

  calculate = () => {
    let aScore = 0;
    let bScore = 0;
    let cScore = 0;
    let dScore = 0;
    let eScore = 0;
    for (let i = 0; i < this.state.dataArray.length; i++) {
      if (this.state.dataArray[i] === "A") {
        aScore++;
      }
      if (this.state.dataArray[i] === "B") {
        bScore++;
      }
      if (this.state.dataArray[i] === "C") {
        cScore++;
      }
      if (this.state.dataArray[i] === "D") {
        dScore++;
      }
      if (this.state.dataArray[i] === "E") {
        eScore++;
      }
    }
    //---------starts here -------------
    let personality = ["Zach", "Lionel", "George", "Kaley", "Pasha"];
    let score = [aScore, bScore, cScore, dScore, eScore];
    let index = 0; //index of highest score. e.g. 0=>A, 1=>B, 2=>C, 3=>D, 4=>E
    let highScore = score[0];
    let tieIndex = -1; //indicates if there is a tie. -1 => no tie, >-1 => tie

    for (let i = 1; i < score.length; i++) {
      if (highScore < score[i]) {
        index = i;
        highScore = score[i];
        tieIndex = -1;
      } else if (highScore === score[i]) {
        tieIndex = index;
        index = i;
        highScore = score[i];
      }
    }
    if (tieIndex > -1) {
      document.location.href = personality[tieIndex] + personality[index];
    } else {
      document.location.href = personality[index];
    }
    // ----- ends here ---

    //     if(aScore > bScore && aScore > cScore && aScore > dScore && aScore > eScore) {
    //       document.location.href = "Zach";
    //     }else if(bScore > aScore && bScore > cScore && bScore > dScore && bScore > eScore) {
    //       document.location.href = "Lionel";
    //     }else if(cScore > aScore && cScore > bScore && cScore > dScore && cScore > eScore) {
    //       document.location.href = "George";
    //     }else if(dScore > aScore && dScore > bScore && dScore > cScore && dScore > eScore) {
    //       document.location.href = "Kaley";
    //       //alert("Kaley");
    //     }else if(eScore > aScore && eScore > bScore && eScore > cScore && eScore > dScore) {
    //       document.location.href = "Pasha";
    //     }else if((aScore==bScore)>cScore && (aScore==bScore)>dScore &&(aScore==bScore)>eScore){
    //       alert("You are 50% like Zach and 50% like Lionel");
    //     }else if(aScore==cScore){
    //       alert("You are 50% like Zach and 50% like George");
    //     }else if(aScore==dScore){
    //       alert("You are 50% like Zach and 50% like Kaley");
    //     }else if(aScore==eScore){
    //       alert("You are 50% like Zach and 50% like Pasha");
    //     }else if(bScore==cScore){
    //       alert("You are 50% like Lionel and 50% like George");
    //     }else if(bScore==dScore){
    //       alert("You are 50% like Lionel and 50% like Kaley");
    //     }else if(bScore==eScore){
    //       alert("You are 50% like Lionel and 50% like Pasha");
    //     }else if(cScore==dScore){
    //       alert("You are 50% like George and 50% like Kaley");
    //     }else if(cScore==eScore){
    //       alert("You are 50% like George and 50% like Pasha");
    //     }else if(dScore==eScore){
    //       alert("You are 50% like Kaley and 50% like Pasha");
    //     }
    // // if(aScore==bScore || aScore==cScore ||aScore==dScore ||aScore==eScore ||bScore==cScore||bScore==dScore||bScore==eScore||cScore==dScore||cScore==eScore||dScore==eScore){
    // //   document.location.href = "resultTie.js";
    // // }
    console.log(Math.max(aScore, bScore, cScore, dScore, eScore));
  };

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
