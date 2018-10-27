let html2 = '<a class="nope" href="/yep">Yep</a>';
html2 = html2.replace(/<a .*?(href=".*?").*?>/, '<a $1>');

console.log(html2);