import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  titulo = 'Laboratorio PWA';

  nuevaTarea = '';

  tareas: string[] = [];

  agregarTarea() {

    if (this.nuevaTarea.trim() !== '') {

      this.tareas.push(this.nuevaTarea);

      this.nuevaTarea = '';

    }

  }

}