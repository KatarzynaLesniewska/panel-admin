/*
{
  // https://kodilla.com/pl/bootcamp-module/298/262/5212#132-mobilne-menu-sterowanie-menu
  // Show / hide menu function

  function toggleMenu(visible) {
    document.querySelector('.menu').classList.toggle('show', visible)
  }

  // po wywołaniu fn toggleMenu(true) do obiektu z kalsą menu + show
  // po wywołaniu fn toggleMenu(false) zostanie ona usunieta
  // jeśli użyjemy tej funkcji bez argumentu toggleMenu(), to w
  // zależności od tego, czy klasa show już istnieje czy nie, to
  // zostanie dodana lub usunieta

  // Później wystarczy ją podczepić do wybranych elementów za pomocą:

  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });
}
*/

/*
{
  function closeModal() {
    document.getElementById('overlay').classList.remove('show');
  }

  document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal();
    });
  });

  document.querySelector('#overlay').addEventListener('click', function(e) {
    if(e.target === this) {
      closeModal();
    }
  });

  document.addEventListener('keyup', function(e) {
    if(e.keyCode === 27) {
      closeModal();
    }
  });

  function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove('show');
    });
    document.querySelector('#overlay').classList.add('show');
    document.querySelector(modal).classList.add('show');
  }

  /*
  Powyższy kod możemy wywołać, kiedy tylko będziemy potrzebować pokazać konkretny modal, np. openModal('#myModal').

  const button = document.querySelector('#exitIcon');
  button.addEventListener('click', function() {
    openModal('#logOut');
  });
}
*/
