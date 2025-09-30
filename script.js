document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('click', function () {
            alert('You clicked on ' + this.alt + '!');
        });
    });
});