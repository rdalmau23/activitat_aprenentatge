class App {
    #tasques;
  
    constructor() {
      this.#tasques = [];
    }
  
    afegirTasca(tasca) {
      this.#tasques.push(tasca);
    }
  
    completarTasca(id) {
      const tasca = this.#tasques.find(t => t.id === id);
      if (tasca) {
        tasca.completada = true;
      }
    }
  
    eliminarTasca(id) {
      this.#tasques = this.#tasques.filter(t => t.id !== id);
    }
  
    modificaNomTasca(id, nom) {
      const tasca = this.#tasques.find(t => t.id === id);
      if (tasca) {
        tasca.nom = nom;
      }
    }
  
    actualitzarLlista() {
      console.log('Llista de Tasques Actualitzada:');
      this.#tasques.forEach(t => console.log(t.mostrarInfoTasca()));
    }
  
    mostrarTotalTasques() {
      console.log(`Total de tasques: ${this.#tasques.length}`);
    }
  }
  