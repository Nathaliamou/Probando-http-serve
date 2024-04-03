document.addEventListener("DOMContentLoaded", function() {
   // Declaración de variables para manipular el header, body y footer
  // Accediendo a las variables HTML desde JavaScript
  const headerColor = document.getElementById('miHeader').dataset.headerColor;
  const bodyColor = document.getElementById('miMain').dataset.bodyColor;
  const footerColor = document.getElementById('miFooter').dataset.footerColor;

  // Modificando las variables CSS desde JavaScript
  document.documentElement.style.setProperty('--header-color', headerColor);
  document.documentElement.style.setProperty('--body-color', bodyColor);
  document.documentElement.style.setProperty('--footer-color', footerColor);


    // Evento en el header para mover el título de izquierda a derecha al cargar la página
    const header = document.getElementById('miHeader');
    header.addEventListener('mouseenter', function() {
      const navbarBrand = document.querySelector('.navbar-brand');
      navbarBrand.style.transition = 'transform 1s';
      navbarBrand.style.transform = 'translateX(640px)';
    });
  
    // Creación de la barra lateral con los meses del año
    const body = document.getElementById('miMain');
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
    const monthList = document.createElement('ul');
    months.forEach(month => {
      const monthItem = document.createElement('li');
      monthItem.textContent = month;
      monthItem.addEventListener('click', function() {
        // Aquí se puede implementar la lógica para mostrar un calendario para el mes seleccionado
        alert('Mostrar calendario para ' + month);
      });
      monthList.appendChild(monthItem);
    });
    sidebar.appendChild(monthList);
    body.appendChild(sidebar);
  
     // Evento en el footer para cambiar de color al hacer clic
  const footer = document.getElementById('miFooter');
  footer.addEventListener('click', function() {
    let footerColor = 'green'; // Asignamos el valor 'green' aquí
    if (footer.style.backgroundColor === 'green') {
      footer.style.backgroundColor = 'red';
      footerColor = 'red';
    } else {
      footer.style.backgroundColor = 'green';
      footerColor = 'green';
      }
    });
  });
  