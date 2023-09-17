import { Component } from '@angular/core';
import { PaisItem } from 'src/shared/models/paisItem';

@Component({
  selector: 'app-ex08',
  templateUrl: './ex08.component.html',
  styleUrls: ['./ex08.component.css']
})
export class Ex08Component {
  paises: PaisItem[] = [
    new PaisItem('Brasil', 'https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png'),
    new PaisItem('Argentina', 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-7-2048x1283.jpg'),
    new PaisItem('Uruguai', 'https://www.countryflags.com/wp-content/uploads/uruguay-flag-png-large.png'),
    new PaisItem('Paraguai', 'https://www.countryflags.com/wp-content/uploads/paraguay-flag-png-large.png'),
    new PaisItem('Chile', 'https://www.countryflags.com/wp-content/uploads/chile-flag-png-large.png'),
    new PaisItem('Peru', 'https://www.countryflags.com/wp-content/uploads/peru-flag-png-large.png')
  ];

  paisPesquisa: string = '';

  filtrarPaises(): any[] {
    return this.paises.filter(pais => pais.name.toLowerCase().includes(this.paisPesquisa.toLowerCase()));
  }
}
