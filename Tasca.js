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
      return `${super.mostrarInfoTasca()}, Data Límit: ${this.#dataLimit}, Descripció: ${this.#descripcio}`;
    }
  }
  
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
  