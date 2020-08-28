import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
        


        checkNumInputs('input[name="user_phone"]');
       

        const message = {
            lodaing: 'Загрузка...',
            succes: 'Cпасибо! ',
            failure: 'Что то пошло не так'
        };

        const postData = async (url, data) => {
            document.querySelector('.status').textContent = message.lodaing;
            let res = await fetch(url, {
                method: "POST",
                body: data
            });

           return await res.text();
        };

        const cleanInputs = () => {
            inputs.forEach(item => {
                item.value = '';
            });
        };
       
        form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();
                
                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.appendChild(statusMessage);

                const formData = new FormData(item);
                if(item.getAttribute('data-calc') === 'end'){
                    for(let key in state){
                        formData.append(key, state[key]);
                    }
                    state = {};
                    console.log(state);
                }

                postData('assets/server.php', formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = message.succes;
                    })
                    .catch(() => statusMessage.textContent = message.failure)
                    .finally(() => {
                        cleanInputs();
                        setTimeout(() => {
                           statusMessage.remove(); 
                        }, 5000);
                    });


            });
        });
};

export default forms;