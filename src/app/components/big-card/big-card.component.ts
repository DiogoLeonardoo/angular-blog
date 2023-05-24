import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})

export class BigCardComponent  { 
  
  photoCover: string = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOfM8JE_Bh4oxeJWqFiH-p9yd5DBgsrV6G03E7AvyVJDCidwWykrm-0hL-oN4-rSBSgs95hv14Q4wHxwqe0a3e4_n-L7PlFmfAOcWM-9Iv645c74ggK6K8glPD5JvtrsBDOQ68-9T6TaiHJXssPS4Ugsc09jAyBbQAJofnwaeNhx0ev2u1wQ/s540/movies.jpg"
  cardTitle: string = "Marvel anuncia nova geração"
  cardDescription: string = "A marvel anunciou nova geração na suas histórias e séries da plataforma de streaming Disney +"
  

}
