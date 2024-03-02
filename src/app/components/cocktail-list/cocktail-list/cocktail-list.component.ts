import { Component } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktails.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent {
  title: string = 'Liste des Cocktails';
  cocktails: Cocktail[] = [
    {
      name: 'Martini',
      img: 'https://www.saq.com/media/catalog/product/d/i/dirty-martini-ec-1_1610403642.png?optimize=high&fit=bounds&height=&width=&format=jpeg',
      description:
        "Le Dry martini ou Martini gin est un apéritif et un cocktail dry officiel de l'IBA, à base de gin et de vermouth blanc. Il peut être garni d’une écorce de citron jaune ou d’une olive verte selon la demande.",
    },
    {
      name: 'Spritz',
      img: 'https://www.courvoisier.com/sites/default/files/styles/original/public/2021-12/12_Border_Spritz.png.webp?itok=1ij9qQaS',
      description:
        "Le spritz est un long drink alcoolisé à base de vin blanc, souvent du prosecco, d’un amer et d’eau de Seltz, largement consommé en apéritif dans les grandes villes de la Vénétie et du Frioul-Vénétie Julienne, et également répandu dans toute l'Italie.",
    },
    {
      name: 'Mojito',
      img: 'https://banner2.cleanpng.com/20180605/fhc/kisspng-mojito-cocktail-fizzy-drinks-light-rum-caipirinha-shot-drink-5b163d3b5759d0.4850044715281841233578.jpg',
      description:
        'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche',
    },
    {
      name: 'Americano',
      img: 'https://w7.pngwing.com/pngs/246/585/png-transparent-negroni-cocktail-martini-americano-campari-cocktail-recipe-orange-cocktail.png',
      description:
        "L'americano est un cocktail à base de Campari, de vermouth rouge doux et de club soda. Il est servi, avec des glaçons, décoré d'une tranche d'orange.",
    },
    {
      name: 'Punch',
      img: 'https://e7.pngegg.com/pngimages/256/87/png-clipart-cocktail-hurricane-juice-planter-s-punch-rum-recetas-de-de-hotel.png',
      description:
        'Le punch ou ponch est un cocktail-apéritif exotique traditionnel festif, préparé et servi dans un grand bol à punch, à base de mélange de rhum, jus de fruits, morceaux de fruits, sucre de canne, et épices.',
    },
  ];
}
