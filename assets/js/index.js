document.addEventListener("DOMContentLoaded", function () {
    function share() {
        this.classList.toggle('active');
        document.querySelector('.social').classList.toggle('active');
    }
    document.querySelector('.share').addEventListener('click', share);
});