import { Injectable } from '@angular/core';


@Injectable()
export class HomeService{
    constructor(){}


    msgAlert():void{
        alert('Mensagem de alerta.');
    }
}