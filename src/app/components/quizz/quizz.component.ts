import { Component } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"
@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  title:string = ""
  questions:any 
  questSelect:any 
  answers:string[] = []
  answerSelect:string = ""
  questionIndex:number = 0
  questionMaxIndex:number = 0
  finished:boolean = false

  constructor(){}

  ngOnInit():void{
    if(quizz_questions){
      this.finished = false
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.questSelect = this.questions[this.questionIndex]
      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length
    }
  }

}
