// script.js

// Fonction pour générer un mot de passe aléatoire en fonction des options
function generatePassword(length, includeLetters, includeNumbers, includeSymbols) {
    let characters = '';
    
    if (includeLetters) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    }
    if (includeNumbers) {
      characters += '0123456789';
    }
    if (includeSymbols) {
      characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }
  
    if (characters.length === 0) {
      alert('Veuillez sélectionner au moins un type de caractère.');
      return '';
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    return password;
  }
  
  // Écouter l'événement de clic du bouton
  document.getElementById('generate-btn').addEventListener('click', function() {
    // Récupérer la longueur du mot de passe spécifiée
    const length = parseInt(document.getElementById('length').value);
    
    // Récupérer les choix de caractères
    const includeLetters = document.getElementById('include-letters').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;
    
    // Vérifier si la longueur est valide
    if (length >= 12 && length <= 128) {
      const password = generatePassword(length, includeLetters, includeNumbers, includeSymbols);
      if (password) {
        document.getElementById('password').textContent = password;
      }
    } else {
      alert('La longueur doit être comprise entre 12 et 128 caractères.');
    }
  });