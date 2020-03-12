import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  public loading: boolean = true;

  public feedback: Object;

  public isNotEmpty: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getFeedback();
    setTimeout(() => {
      if(!this.isNotEmpty)
        this.router.navigate(['home']);
    }, 3000);
  }

  getFeedback() {
    /*
    const jsonAux = window.localStorage.getItem('feedbackUsuario');
    this.feedback = JSON.parse(jsonAux);
    */
   this.activatedRoute.paramMap
   .pipe(
     map(() => window.history.state
     ))
      .subscribe(res => {
        this.feedback = res;
        this.loading = false;
        this.isNotEmpty = this.feedback !== null && Object.getOwnPropertyNames(this.feedback).length > 1;
      }, err => {
        this.loading = false;
        this.isNotEmpty = false;
      })
    }
}
