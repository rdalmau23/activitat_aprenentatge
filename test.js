const app = new App();

app.actualitzarLlista();
app.mostrarTotalTasques();

const tasca1 = new Tasca('Comprar pa', 1, 'Normal');
const tasca2 = new Tasca('Estudiar JavaScript', 2, 'Normal');
const urgent1 = new Urgent('Enviar email urgent', 1, 'Abans de les 12:00');
const urgent2 = new Urgent('Preparar presentació', 2, 'Demà al matí');
const critica1 = new Critica('Finalitzar projecte', 3, '2024-12-15', 'Projecte final de curs');

app.afegirTasca(tasca1);
app.afegirTasca(tasca2);
app.afegirTasca(urgent1);
app.afegirTasca(urgent2);
app.afegirTasca(critica1);

app.actualitzarLlista();
app.mostrarTotalTasques();

app.modificaNomTasca(2, 'Estudiar React');
app.completarTasca(1);
app.completarTasca(3);

const tasca3 = new Tasca('Anar al gimnàs', 1, 'Normal');
app.afegirTasca(tasca3);

app.actualitzarLlista();
app.mostrarTotalTasques();

app.eliminarTasca(2);
app.eliminarTasca(4);

app.actualitzarLlista();
app.mostrarTotalTasques();
