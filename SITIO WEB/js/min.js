let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(500)
  .typeString('La Capital de la morcilla mas rica de Colombia')
  .pauseFor(200)
  .deleteChars(10)
  .start();