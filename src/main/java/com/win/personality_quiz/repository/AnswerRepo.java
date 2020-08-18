package com.win.personality_quiz.repository;

import java.util.List;

import com.win.personality_quiz.model.Answer;

import org.springframework.data.repository.CrudRepository;

public interface AnswerRepo extends CrudRepository<Answer, Long> {
List<Answer> findByAnswers(Answer answers);
}