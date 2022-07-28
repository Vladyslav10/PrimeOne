///////////////////Header////////////////////////////////////////////////////////////////
(function () {
    window.addEventListener('resize', adaptive_function);
    
    function adaptive_header(w, h) {
        const headerTop = document.querySelector('.header__top');
        const headerMenu = document.querySelector('.header__menu-new');
        const headerLang = document.querySelector('.header__languages');
        const headerBottomMenuLeft = document.querySelector('.header__menu-left');
        const headerBottomMenuRight = document.querySelector('.header__menu-right');
        if (w < 767) {
            if(!headerLang.classList.contains('done')) {
                headerLang.classList.add('done');
                headerMenu.append(headerLang);
            }
        } else {
            if(headerLang.classList.contains('done')) {
                headerLang.classList.remove('done');
                headerTop.prepend(headerLang);
            }
        }

        
        if (w < 767) {
            if(!headerBottomMenuLeft.classList.contains('done')) {
                headerBottomMenuLeft.classList.add('done');
                headerMenu.append(headerBottomMenuLeft);
            }
        } else {
            if(headerBottomMenuLeft.classList.contains('done')) {
                headerBottomMenuLeft.classList.remove('done');
                document.querySelector('.header__column-first').prepend(headerBottomMenuLeft);
            }  
        }


        if (w < 767) {
            if(!headerBottomMenuRight.classList.contains('done')) {
                headerBottomMenuRight.classList.add('done');
                headerMenu.append(headerBottomMenuRight);
            }
        } else {
            if(headerBottomMenuRight.classList.contains('done')) {
                headerBottomMenuRight.classList.remove('done');
                document.querySelector('.header__column-third').prepend(headerBottomMenuRight);
            }
        }

    };

    function adaptive_function() {
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientWidth;
        console.log(w);
        adaptive_header(w, h);
    };

    adaptive_function();
})();
  

//////////////////////BURGER////////////////////////////////////////////////////////////
(function () {
    const burger = document.querySelector('.header__menu-icon');

    document.addEventListener('click', menu)

    function menu (event) {
        if(event.target.closest('.header__menu-icon')) {
            burger.classList.toggle('active');
        }
        if(!event.target.closest('.header__menu-icon')) {
            burger.classList.remove('active');
        }
    };
})();
//////////////////////////////////////////////////////////////////////////////////