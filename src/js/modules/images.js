const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');


        imgPopup.classList.add('popup');
        workSection.appendChild(imgPopup);

        imgPopup.style.justifyContent = 'center';
        imgPopup.style.alignItems = 'center';
        imgPopup.style.display ='none';


        const width = document.body.clientWidth / 3;
        const height= document.body.clientWidth / 3;
        bigImage.style.height = `${height}px`;
        bigImage.style.widht = `${width}px`;
        
        imgPopup.appendChild(bigImage);

        workSection.addEventListener('click', (e) => {
            e.preventDefault();

            let target = e.target;
            if(target &&  target.classList.contains('preview')){
                imgPopup.style.display = 'flex';
                const path = target.parentNode.getAttribute('href');
                bigImage.setAttribute('src', path);
                document.body.style.overflow = 'hidden';
            }


            if(target && target.matches('div.popup')){
                imgPopup.style.display ='none';
                document.body.style.overflow = '';
            }
        });

};

export default images;