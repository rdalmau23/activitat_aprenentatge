# Gestor de Tasques en JavaScript

Aquesta aplicació permet gestionar diferents tipus de tasques: normals, urgents i crítiques. Ha estat desenvolupada en JavaScript utilitzant classes per a una estructura organitzada i escalable.

## Funcionalitats
- **Afegir Tasca:** L'usuari pot triar si la tasca és normal, urgent o crítica.
- **Completar Tasca:** Marcar una tasca com a completada a través del seu identificador.
- **Eliminar Tasca:** Esborrar una tasca de la llista per identificador.
- **Modificar Nom de Tasca:** Canviar el nom d'una tasca existent.
- **Actualitzar Llista:** Mostrar la informació actualitzada de totes les tasques.
- **Mostrar Total de Tasques:** Indica el nombre total de tasques en la llista.

## Classes

### Tasca
- `id`: Identificador de la tasca.
- `nom`: Nom de la tasca.
- `completada`: Estat de la tasca (true o false).
- `prioritat`: Prioritat de la tasca (número).
- `tipus`: Tipus de tasca (normal, urgent o crítica).
- `static totalTasques`: Nombre total de tasques creades.
- **Mètodes:**
  - `estaCompletada()`: Retorna si la tasca està completada.
  - `mostrarInfoTasca()`: Mostra la informació completa de la tasca.
  - `static obtenirTotalTasques()`: Retorna el total de tasques creades.

### Critica (Hereda de Tasca)
- `dataLimit`: Data límit per completar la tasca (format: "YYYY-MM-DD").
- `descripcio`: Descripció de la tasca crítica.
- `mostrarInfoTasca()`: Inclou informació específica de la data límit i la descripció.

### Urgent (Hereda de Tasca)
- `recordatori`: Missatge de recordatori per a la tasca urgent.
- `mostrarInfoTasca()`: Inclou el recordatori a la informació de la tasca.

### App
- `tasques`: Llista de tasques.
- **Mètodes:**
  - `afegirTasca()`: Afegeix una tasca a la llista.
  - `completarTasca()`: Marca una tasca com a completada.
  - `eliminarTasca()`: Esborra una tasca per identificador.
  - `modificaNomTasca()`: Modifica el nom d'una tasca.
  - `actualitzarLlista()`: Mostra la llista actualitzada de tasques.
  - `mostrarTotalTasques()`: Mostra el nombre total de tasques.

## Com executar l'aplicació

1. Assegura't de tenir [Node.js](https://nodejs.org) instal·lat al teu ordinador.
2. Descarrega o clona el repositori.
3. Navega fins al directori de l'aplicació en el terminal.
4. Executa la comanda:

```bash
node app.js
