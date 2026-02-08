// Copy to clipboard functionality
document.querySelectorAll('.copy-btn').forEach(btn => {
btn.addEventListener('click', () => {
    const code = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(code).then(() => {
    const originalText = btn.innerText;
    btn.innerText = 'Copied!';
    setTimeout(() => btn.innerText = originalText, 2000);
    }).catch(err => {
    console.error('Failed to copy: ', err);
    });
  });
});