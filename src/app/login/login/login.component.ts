import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;


  //inyectamos en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) 
  {
    //creamos el grupo de controles para el formulario login
    this.form=this.formBuilder.group(
    {
      contraseña:['',[Validators.required, Validators.minLength(8)]],
      mail:['', [Validators.required, Validators.email]]
    })

  }

  ngOnInit(): void {  
  }

  get Contraseña(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get ContraseñaValid(){
    return this.Contraseña?.touched && !this.Contraseña?.valid;
  }

  get MailValid() {
    return false
  }
 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }

}
