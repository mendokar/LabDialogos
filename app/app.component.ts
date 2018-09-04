import { Component } from "@angular/core";
import * as dialogs from "ui/dialogs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {

  public verAlerta() {
    dialogs.alert("Mensaje para el usuario").then(() => {
      console.log("Dialogo cerrado.");
    });
  }

  /**
   * verAlertaOpciones
   */
  public verAlertaOpciones() {
    dialogs.alert({
      title: "Titulo Dialogo",
      message: "Mensaje para el usuario.",
      okButtonText: "OK"
    }).then(() => {
      console.log("Dialogo cerrado");
    });
  }

  /**
   * verConfirmar
   */
  public verConfirmar() {
    dialogs.confirm({
      title: "Confirmacion Dialogo",
      message: "mensaje para el usuario",
      okButtonText: "Boton OK",
      cancelButtonText: "Boton Cancelar",
      neutralButtonText: "Boton Neutral"
    }).then(result => {
      // result argument is boolean
      console.log("Dialogo resultado: " + result);
    });
  }

  /**
   * verInput
   */
  public verInput() {
    dialogs.login({
      title: "Input Dialogo",
      message: "mensaje para el usuario",
      okButtonText: "Boton OK",
      cancelButtonText: "Boton Cancelar",
      neutralButtonText: "Boton Neutral",
      userName: "Usuario texto",
      password: "clave texto"
    }).then(r => {
      console.log("Dialogo resultado: " + r.result + ", usuario: " + r.userName + ", clave: " + r.password);
    });
  }

  /**
   * verAccion
   */
  public verAccion() {
    dialogs.action({
      title: "Input Dialogo",
      message: "mensaje para el usuario",
      cancelButtonText: "Boton Cancelar",
      actions: ["Opcion1", "Opcion2"]
    }).then(result => {
      console.log("Dialogo resultado: " + result);
      if (result == "Opcion1") {
        //Do action1
      } else if (result == "Opcion2") {
        //Do action2
      }
    });
  }




}
