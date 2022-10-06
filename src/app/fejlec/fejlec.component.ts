import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fejlec',
  templateUrl: './fejlec.component.html',
  styleUrls: ['./fejlec.component.css']
})
export class FejlecComponent implements OnInit {

  public nev:string = "Kovács János";
  public fejlecon: boolean = true;

  public szinek: string[] = [
    "blue",
    "red",
    "yellow",
  ];

  constructor() { 
    this.nev = "Kovács István";
  }

  ngOnInit(): void {
  }

  kattintas() {
    console.log(this.nev);
    this.fejlecon = !this.fejlecon;
    //this.nev = "Kovács Márton";
    
  }

}