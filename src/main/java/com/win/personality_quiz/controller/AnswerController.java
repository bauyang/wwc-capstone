package com.win.personality_quiz.controller;

import com.win.personality_quiz.model.Answer;
import com.win.personality_quiz.model.User;
import com.win.personality_quiz.repository.AnswerRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
//@RequestMapping("quiz/")
@CrossOrigin(origins = "http://localhost:3000")
public class AnswerController {

    @Autowired
    private AnswerRepo answerRepo;

    // save answers into database
  //  @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value="quiz",method=RequestMethod.POST)
    public String addAnswer(@ModelAttribute("questions") Answer answer) {
        answerRepo.save(answer);
        return "QuizComponent";
    }
}
