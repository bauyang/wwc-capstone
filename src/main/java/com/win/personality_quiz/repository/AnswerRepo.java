package com.win.personality_quiz.repository;

import java.util.List;

import com.win.personality_quiz.model.Answer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface AnswerRepo extends JpaRepository<Answer, Long> {
//List<Answer> findByAnswers(Answer answers);
}