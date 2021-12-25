
//дожидаемся полной загрузки страницы
window.onload = function () {
    let content=["menu1", "menu2", "menu3", "menu4", "menu5", "menu6"];//название вкладок, которые будут создаваться на лету
    const tabs=document.querySelector('#tabs');
    createTab ();
    tabs.addEventListener ("click", function (e) {
        if(!e.target.classList.contains('tab')) return; //нажаты только tab, если нет на выход.
    selectTab(e);    
     });

// createTab ()-создает вкладки с классом tab название и количество вкладок берет из массива
// content- массив с именами вкладок
// tabs- div контейнер в который добавляются вкладки
    function createTab () {
        for(var i=0; i<content.length;i++){
            var tab= document.createElement('button');
            tab.className='tab';
            tab.innerText=content[i];
            tabs.appendChild (tab);
        }
    };
//
    function selectTab (e) {
        for(var i=0; i<content.length; i++){
            if(content[i]===resetTab) continue;
            document.querySelectorAll('.tab')[i].style.color="";
            document.querySelectorAll('.tab')[i].style.backgroundColor="";   
        }
        console.log(e.target.innerText);
        if(e.target.style.color=='black'){
            e.target.style.color="";
            e.target.style.backgroundColor="";
        }else{
            var resetTab=e.target.innerText;
            e.target.style.backgroundColor='rgb(213, 216, 35)';
            e.target.style.color='black';
        }
        switch(e.target.innerText){
            case 'MENU1':
                document.querySelector(".canvas").style.cssText='font-size: 90px; color: black; text-align: center';
                document.querySelector(".canvas").innerText="экран 1";
                break;
            case 'MENU2':
                document.querySelector(".canvas").style.cssText='font-size: 90px; color: black; text-align: center';
                document.querySelector(".canvas").innerText="экран 2";
                    break;
             case 'MENU3':
                document.querySelector(".canvas").style.cssText='font-size: 90px; color: black; text-align: center';
                document.querySelector(".canvas").innerText="экран 3";
                    break;
            case 'MENU4':
                document.querySelector(".canvas").style.cssText='font-size: 90px; color: black; text-align: center';
                document.querySelector(".canvas").innerText="экран 4";
                    break;
            case 'MENU5':
                document.querySelector(".canvas").style.cssText='font-size: 90px; color: black; text-align: center';
                document.querySelector(".canvas").innerText="экран 5";
                    break;
            case 'MENU6':
                document.querySelector(".canvas").style.cssText='font-size: 90px; color: black; text-align: center';
                document.querySelector(".canvas").innerText="экран 6";
                    break;
        }
    };
}