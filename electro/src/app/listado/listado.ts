import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {
  productos = [
    { id: 1, nombre: 'Refrigeradora No Frost 350L', marca: 'LG', categoria: 'Línea blanca', precio: 2199, stock: 12 },
    { id: 2, nombre: 'Lavadora Automática 13kg', marca: 'Samsung', categoria: 'Línea blanca', precio: 1599, stock: 8 },
    { id: 3, nombre: 'Televisor Smart 55" 4K', marca: 'Sony', categoria: 'Televisores', precio: 2499, stock: 5 },
    { id: 4, nombre: 'Microondas 25L', marca: 'Oster', categoria: 'Cocina', precio: 329, stock: 20 },
    { id: 5, nombre: 'Licuadora 600W', marca: 'Philips', categoria: 'Cocina', precio: 189, stock: 0 },
    { id: 6, nombre: 'Aspiradora Robot', marca: 'Xiaomi', categoria: 'Limpieza', precio: 899, stock: 6 },
    { id: 7, nombre: 'Cocina a Gas 5 hornillas', marca: 'Mabe', categoria: 'Cocina', precio: 1299, stock: 3 },
    { id: 8, nombre: 'Ventilador de Pie', marca: 'Taurus', categoria: 'Climatización', precio: 149, stock: 15 },
  ];
}