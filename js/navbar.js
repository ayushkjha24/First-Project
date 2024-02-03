        document.addEventListener('DOMContentLoaded', function () {
            const mobileMenu = document.getElementById('mobile-menu');
            const navList = document.querySelector('.nav-list');

            mobileMenu.addEventListener('click', function () {
                navList.classList.toggle('show');
                toggleBars();
            });

            function toggleBars() {
                const bars = document.querySelectorAll('.menu-toggle span');

                bars.forEach(bar => {
                    bar.classList.toggle('cross');
                });
            }
        });

