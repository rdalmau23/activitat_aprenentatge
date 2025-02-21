// Classe Tasca
class Tasca {
    static totalTasques = 0;
    #id;
    #nom;
    #completada;
  
    constructor(nom, prioritat, tipus) {
      this.#id = ++Tasca.totalTasques;
      this.#nom = nom;
      this.#completada = false;
      this.prioritat = prioritat;
      this.tipus = tipus;
    }
  
    get id() {
      return this.#id;
    }
  
    get nom() {
      return this.#nom;
    }
  
    set nom(nouNom) {
      this.#nom = nouNom;
    }
  
    set completada(estaCompletada) {
      this.#completada = estaCompletada;
    }
  
    estaCompletada() {
      return this.#completada;
    }
  
    mostrarInfoTasca() {
      return `Nom: ${this.#nom}, Tipus: ${this.tipus}, Prioritat: ${this.prioritat}, Completada: ${this.estaCompletada()}`;
    }
  
    static obtenirTotalTasques() {
      return Tasca.totalTasques;
    }
  }
  
  // Classe Critica (hereta de Tasca)
  class Critica extends Tasca {
    #dataLimit;
    #descripcio;
  
    constructor(nom, prioritat, dataLimit, descripcio) {
      super(nom, prioritat, 'Crítica');
      this.#dataLimit = dataLimit;
      this.#descripcio = descripcio;
    }
  
    get dataLimit() {
      return this.#dataLimit;
    }
  
    set dataLimit(novaData) {
      this.#dataLimit = novaData;
    }
  
    mostrarInfoTasca() {
      return `${super.mostrarInfoTasca()}, Data Limit: ${this.#dataLimit}, Descripció: ${this.#descripcio}`;
    }
  }
  
  // Classe Urgent (hereta de Tasca)
  class Urgent extends Tasca {
    #recordatori;
  
    constructor(nom, prioritat, recordatori) {
      super(nom, prioritat, 'Urgent');
      this.#recordatori = recordatori;
    }
  
    mostrarInfoTasca() {
      return `${super.mostrarInfoTasca()}, Recordatori: ${this.#recordatori}`;
    }
  }
  
  // Classe App (Gestor de Tasques)
  class App {
    #tasques = [];
  
    afegirTasca(tasca) {
      this.#tasques.push(tasca);
      this.actualitzarLlista();
    }
  
    completarTasca(id) {
      const tasca = this.#tasques.find(t => t.id === id);
      if (tasca) {
        tasca.completada = true;
        console.log(`Tasca amb id ${id} marcada com completada.`);
      } else {
        console.log(`Tasca amb id ${id} no trobada.`);
      }
      this.actualitzarLlista();
    }
  
    eliminarTasca(id) {
      this.#tasques = this.#tasques.filter(t => t.id !== id);
      console.log(`Tasca amb id ${id} eliminada.`);
      this.actualitzarLlista();
    }
  
    modificaNomTasca(id, nouNom) {
      const tasca = this.#tasques.find(t => t.id === id);
      if (tasca) {
        tasca.nom = nouNom;
        console.log(`Tasca amb id ${id} i amb nom ${nouNom} modificada.`);
      } else {
        console.log(`Tasca amb id ${id} i amb nom ${nouNom} no trobada.`);
      }
      this.actualitzarLlista();
    }
  
    actualitzarLlista() {
      console.log("\nLlista de Tasques:");
      this.#tasques.forEach(t => {
        console.log(t.mostrarInfoTasca());
      });
    }
  
    mostrarTotalTasques() {
      console.log(`Total de Tasques: ${this.#tasques.length}`);
    }
  }
  
  // TEST
  const app = new App();
  
  // Inicialment
  console.log("\nInici:");
  app.actualitzarLlista();
  app.mostrarTotalTasques();
  
  // Afegir Tasques
  console.log("\nAfegint tasques:");
  app.afegirTasca(new Tasca('Tasca Normal 1', 2, 'Normal'));
  app.afegirTasca(new Tasca('Tasca Normal 2', 1, 'Normal'));
  app.afegirTasca(new Urgent('Tasca Urgent 1', 3, 'Recordatori 1'));
  app.afegirTasca(new Urgent('Tasca Urgent 2', 4, 'Recordatori 2'));
  app.afegirTasca(new Critica('Tasca Crítica 1', 5, '2024-12-01', 'Descripció Crítica'));
  
  app.actualitzarLlista();
  app.mostrarTotalTasques();
  
  // Modificar Tasca
  console.log("\nModificant una tasca:");
  app.modificaNomTasca(2, 'Tasca Normal Modificada');
  
  // Completar Tasques
  console.log("\nCompletant tasques:");
  app.completarTasca(1);
  app.completarTasca(3);
  
  // Afegir Tasca Nova
  console.log("\nAfegint una tasca nova:");
  app.afegirTasca(new Tasca('Tasca Normal 3', 3, 'Normal'));
  
  app.actualitzarLlista();
  app.mostrarTotalTasques();
  
  // Eliminar Tasques
  console.log("\nEliminant tasques:");
  app.eliminarTasca(2);
  app.eliminarTasca(4);
  
  app.actualitzarLlista();
  app.mostrarTotalTasques();
  