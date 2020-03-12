import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public formArqUsuario: FormGroup;

  public arquivoSelecionado: string;
  public receivedFile: File;
  public feedback: Object;

  public loading: boolean = false;
  public error: boolean = false;
  public changeTemplate: boolean = false;


  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formArqUsuario = this.fb.group({
      arquivo: [null, [Validators.required]]
    });
  }


  guardarArquivo(file: File){
    this.receivedFile = file;
  }

  enviarArquivo(){
    this.loading = true;
    const formData = new FormData();
    formData.append('file', this.receivedFile);
    this.usuariosService.insertIntermediario(formData)
    .subscribe(res => {
      this.changeTemplate = true;
      this.loading = false;
    }, err => {
      this.loading = false;
      this.error = true;
      setTimeout(() => {
        this.error = false
      }, 5000);
    })
  }

  confirmarArquivo(){
    this.loading = true;
    this.usuariosService.insert()
    .subscribe(res => {
      this.feedback = res;
      /*
      const jsonAux = JSON.stringify(res);
      window.localStorage.setItem('feedbackUsuario', jsonAux);
      */
      this.router.navigate(['feedback'], {state: this.feedback});
    }, err => {
      this.loading = false;
      this.error = true;
      setTimeout(() => {
        this.error = false
        this.changeTemplate = false;
      }, 5000);
    })
  }

  cancelar(){
    this.usuariosService.deleteIntermediario()
    .subscribe(res => {
      this.formArqUsuario.reset();
      this.arquivoSelecionado = '';
      this.changeTemplate = false;
    }, err => {
      alert(err.message);
    })
  }

}
