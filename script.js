// Store emojis in an array
const emojiCodes = [
    { code: 128046, emoji: '&#128046;' },  
    { code: 128047, emoji: '&#128047;' },  
    { code: 128054, emoji: '&#128054;' },  
    { code: 128021, emoji: '&#128021;' },  
    { code: 128048, emoji: '&#128048;' },  
    { code: 128045, emoji: '&#128045;' },  
    { code: 128059, emoji: '&#128059;' },  
    { code: 128060, emoji: '&#128060;' },  
    { code: 128052, emoji: '&#128052;' },  
    { code: 128024, emoji: '&#128024;' },  
    { code: 128039, emoji: '&#128039;' },  
    { code: 128013, emoji: '&#128013;' },  
    { code: 128063, emoji: '&#128063;' },  
    { code: 128043, emoji: '&#128043;' }   
  ];
  
  
  
  const gallery = document.querySelector('#emoji-gallery');
  
  // Dynamically generate and insert emoji elements
  emojiCodes.forEach(item => {
    const emojiElement = `
      <div class="emoji-item">
        <span class="emoji">${item.emoji}</span>
        <span class="code">${item.code}</span>
      </div>
    `;
    gallery.innerHTML += emojiElement;
  });
  