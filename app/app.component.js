"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.verAlerta = function () {
        dialogs.alert("Mensaje para el usuario").then(function () {
            console.log("Dialogo cerrado.");
        });
    };
    /**
     * verAlertaOpciones
     */
    AppComponent.prototype.verAlertaOpciones = function () {
        dialogs.alert({
            title: "Titulo Dialogo",
            message: "Mensaje para el usuario.",
            okButtonText: "OK"
        }).then(function () {
            console.log("Dialogo cerrado");
        });
    };
    /**
     * verConfirmar
     */
    AppComponent.prototype.verConfirmar = function () {
        dialogs.confirm({
            title: "Confirmacion Dialogo",
            message: "mensaje para el usuario",
            okButtonText: "Boton OK",
            cancelButtonText: "Boton Cancelar",
            neutralButtonText: "Boton Neutral"
        }).then(function (result) {
            // result argument is boolean
            console.log("Dialogo resultado: " + result);
        });
    };
    /**
     * verInput
     */
    AppComponent.prototype.verInput = function () {
        dialogs.login({
            title: "Input Dialogo",
            message: "mensaje para el usuario",
            okButtonText: "Boton OK",
            cancelButtonText: "Boton Cancelar",
            neutralButtonText: "Boton Neutral",
            userName: "Usuario texto",
            password: "clave texto"
        }).then(function (r) {
            console.log("Dialogo resultado: " + r.result + ", usuario: " + r.userName + ", clave: " + r.password);
        });
    };
    /**
     * verAccion
     */
    AppComponent.prototype.verAccion = function () {
        dialogs.action({
            title: "Input Dialogo",
            message: "mensaje para el usuario",
            cancelButtonText: "Boton Cancelar",
            actions: ["Opcion1", "Opcion2"]
        }).then(function (result) {
            console.log("Dialogo resultado: " + result);
            if (result == "Opcion1") {
                //Do action1
            }
            else if (result == "Opcion2") {
                //Do action2
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./app.component.html"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsb0NBQXNDO0FBTXRDO0lBQUE7SUE0RUEsQ0FBQztJQTFFUSxnQ0FBUyxHQUFoQjtRQUNFLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksd0NBQWlCLEdBQXhCO1FBQ0UsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNaLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUNBQVksR0FBbkI7UUFDRSxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2QsS0FBSyxFQUFFLHNCQUFzQjtZQUM3QixPQUFPLEVBQUUseUJBQXlCO1lBQ2xDLFlBQVksRUFBRSxVQUFVO1lBQ3hCLGdCQUFnQixFQUFFLGdCQUFnQjtZQUNsQyxpQkFBaUIsRUFBRSxlQUFlO1NBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1osNkJBQTZCO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSwrQkFBUSxHQUFmO1FBQ0UsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNaLEtBQUssRUFBRSxlQUFlO1lBQ3RCLE9BQU8sRUFBRSx5QkFBeUI7WUFDbEMsWUFBWSxFQUFFLFVBQVU7WUFDeEIsZ0JBQWdCLEVBQUUsZ0JBQWdCO1lBQ2xDLGlCQUFpQixFQUFFLGVBQWU7WUFDbEMsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLGFBQWE7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLGdDQUFTLEdBQWhCO1FBQ0UsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNiLEtBQUssRUFBRSxlQUFlO1lBQ3RCLE9BQU8sRUFBRSx5QkFBeUI7WUFDbEMsZ0JBQWdCLEVBQUUsZ0JBQWdCO1lBQ2xDLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7U0FDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixZQUFZO1lBQ2QsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsWUFBWTtZQUNkLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF2RVUsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDO09BQ1csWUFBWSxDQTRFeEI7SUFBRCxtQkFBQztDQUFBLEFBNUVELElBNEVDO0FBNUVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgcHVibGljIHZlckFsZXJ0YSgpIHtcbiAgICBkaWFsb2dzLmFsZXJ0KFwiTWVuc2FqZSBwYXJhIGVsIHVzdWFyaW9cIikudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZ28gY2VycmFkby5cIik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogdmVyQWxlcnRhT3BjaW9uZXNcbiAgICovXG4gIHB1YmxpYyB2ZXJBbGVydGFPcGNpb25lcygpIHtcbiAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgIHRpdGxlOiBcIlRpdHVsbyBEaWFsb2dvXCIsXG4gICAgICBtZXNzYWdlOiBcIk1lbnNhamUgcGFyYSBlbCB1c3VhcmlvLlwiLFxuICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nbyBjZXJyYWRvXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHZlckNvbmZpcm1hclxuICAgKi9cbiAgcHVibGljIHZlckNvbmZpcm1hcigpIHtcbiAgICBkaWFsb2dzLmNvbmZpcm0oe1xuICAgICAgdGl0bGU6IFwiQ29uZmlybWFjaW9uIERpYWxvZ29cIixcbiAgICAgIG1lc3NhZ2U6IFwibWVuc2FqZSBwYXJhIGVsIHVzdWFyaW9cIixcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJCb3RvbiBPS1wiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJCb3RvbiBDYW5jZWxhclwiLFxuICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiQm90b24gTmV1dHJhbFwiXG4gICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cbiAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nbyByZXN1bHRhZG86IFwiICsgcmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiB2ZXJJbnB1dFxuICAgKi9cbiAgcHVibGljIHZlcklucHV0KCkge1xuICAgIGRpYWxvZ3MubG9naW4oe1xuICAgICAgdGl0bGU6IFwiSW5wdXQgRGlhbG9nb1wiLFxuICAgICAgbWVzc2FnZTogXCJtZW5zYWplIHBhcmEgZWwgdXN1YXJpb1wiLFxuICAgICAgb2tCdXR0b25UZXh0OiBcIkJvdG9uIE9LXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkJvdG9uIENhbmNlbGFyXCIsXG4gICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJCb3RvbiBOZXV0cmFsXCIsXG4gICAgICB1c2VyTmFtZTogXCJVc3VhcmlvIHRleHRvXCIsXG4gICAgICBwYXNzd29yZDogXCJjbGF2ZSB0ZXh0b1wiXG4gICAgfSkudGhlbihyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nbyByZXN1bHRhZG86IFwiICsgci5yZXN1bHQgKyBcIiwgdXN1YXJpbzogXCIgKyByLnVzZXJOYW1lICsgXCIsIGNsYXZlOiBcIiArIHIucGFzc3dvcmQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHZlckFjY2lvblxuICAgKi9cbiAgcHVibGljIHZlckFjY2lvbigpIHtcbiAgICBkaWFsb2dzLmFjdGlvbih7XG4gICAgICB0aXRsZTogXCJJbnB1dCBEaWFsb2dvXCIsXG4gICAgICBtZXNzYWdlOiBcIm1lbnNhamUgcGFyYSBlbCB1c3VhcmlvXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkJvdG9uIENhbmNlbGFyXCIsXG4gICAgICBhY3Rpb25zOiBbXCJPcGNpb24xXCIsIFwiT3BjaW9uMlwiXVxuICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nbyByZXN1bHRhZG86IFwiICsgcmVzdWx0KTtcbiAgICAgIGlmIChyZXN1bHQgPT0gXCJPcGNpb24xXCIpIHtcbiAgICAgICAgLy9EbyBhY3Rpb24xXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSBcIk9wY2lvbjJcIikge1xuICAgICAgICAvL0RvIGFjdGlvbjJcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cblxuXG59XG4iXX0=