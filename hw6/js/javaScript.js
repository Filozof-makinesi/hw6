let input = document.querySelector('.panel').textContent;
const container = document.querySelector('.container');
const divs = document.querySelectorAll('.container div');
const cursor = document.querySelector('span.cursor');
setInterval(() => {
  cursor.innerHTML = '|';
  cursor.classList.toggle('hareket');
}, 500);
divs.forEach(div => {
  div.addEventListener('click', e => {
    if (e.target.classList.contains('number')) {
      input += e.target.textContent;
      document.querySelector('.panel').textContent = input;
    }
    if (e.target.classList.contains('geritus')) {
      input = input.slice(0, -1);
      document.querySelector('.panel').textContent = input;
    }
    if (e.target.classList.contains('temizle')) {
      input = '';
      document.querySelector('.panel').textContent = input;
    }
    if (e.target.classList.contains('virgul')) {
      if (!input.includes('.')) {
        input += '.';
        document.querySelector('.panel').textContent = input;
      }
    }
    if (e.target.classList.contains('yuzde')) {
      input += '%';
      document.querySelector('.panel').textContent = input;
    }
    if (e.target.classList.contains('bol')) {
      input += '/';
      document.querySelector('.panel').textContent = input;
    }
    if (e.target.classList.contains('carp')) {
      input += '*';
      document.querySelector('.panel').textContent = input;
    }
    if (e.target.classList.contains('cıkart')) {
      input += '-';
      document.querySelector('.panel').textContent = input;
    }
    if (e.target.classList.contains('topla')) {
      input += '+';
      document.querySelector('.panel').textContent = input;
    }
    if (e.target.classList.contains('esittir')) {
      if (input.includes('/')) {
        const num1 = parseFloat(input.slice(0, input.indexOf('/')));
        const num2 = parseFloat(input.slice(input.indexOf('/') + 1));
        input = num1 / num2;
        document.querySelector('.panel').textContent = input;
      }
      if (input.includes('*')) {
        const num1 = parseFloat(input.slice(0, input.indexOf('*')));
        const num2 = parseFloat(input.slice(input.indexOf('*') + 1));
        input = num1 * num2;
        document.querySelector('.panel').textContent = input;
      }
      if (input.includes('-')) {
        const num1 = parseFloat(input.slice(0, input.indexOf('-')));
        const num2 = parseFloat(input.slice(input.indexOf('-') + 1));
        input = num1 - num2;
        document.querySelector('.panel').textContent = input;
      }
      if (input.includes('+')) {
        const num1 = parseFloat(input.slice(0, input.indexOf('+')));
        const num2 = parseFloat(input.slice(input.indexOf('+') + 1));
        input = num1 + num2;
        document.querySelector('.panel').textContent = input;
      }
      if (input.includes('%')) {
        const num = parseFloat(input.slice(0, input.indexOf('%')));
        input = num / 100;
        document.querySelector('.panel').textContent = input;
      }
    }
  });
});
