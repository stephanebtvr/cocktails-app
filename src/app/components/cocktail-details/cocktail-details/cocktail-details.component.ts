import { Component } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktails.interface';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent {
  cocktail: Cocktail = {
    name: 'Martini',
    img: 'https://www.saq.com/media/catalog/product/d/i/dirty-martini-ec-1_1610403642.png?optimize=high&fit=bounds&height=&width=&format=jpeg',
    description:
      "Le Dry martini ou Martini gin est un apéritif et un cocktail dry officiel de l'IBA, à base de gin et de vermouth blanc. Il peut être garni d’une écorce de citron jaune ou d’une olive verte selon la demande.",
  };
}
