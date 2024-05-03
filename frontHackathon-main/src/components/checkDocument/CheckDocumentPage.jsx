import React, { useRef, useState } from 'react';
import s from './CheckDocument.module.sass';
import axios from 'axios';

function CheckDocumentPage(props) {
    const udost = useRef(null);
    const license = useRef(null);
    const [loading, setLoading] = useState(false);


    const giveAccess = () => {
        props.setAccess(true)
    }

    const handleBtnClick = (ref) => {
        ref.current.click();
    };

    const handleFileChange = (event, type) => {
        const selectedFile = event.target.files[0];
        console.log(`Выбранный файл для ${type}:`, selectedFile);
        return selectedFile;
    };
    
    const handleUpload = async () => {
        try {
            setLoading(true); // Устанавливаем состояние загрузки в true

            const udostFile = udost.current.files[0];
            const licenseFile = license.current.files[0];
    
            if (udostFile && licenseFile) {
                const formData = new FormData();
                formData.append('documentImage1', udostFile); // Используйте правильные ключи
                formData.append('documentImage2', licenseFile); // Используйте правильные ключи
    
                const response = await axios.post('http://localhost:5000/process_document', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
    
                console.log(response.data);
                if(response.data.result == 'IIN is correct'){
                    giveAccess()
                }
            } else {
                console.error('One or both files not selected');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // После завершения запроса устанавливаем состояние загрузки в false
        }
    };

    return (
        <div className={s.container}>
            <img src="https://vz.ua/uploads/news/2018/12/14/720549943e97063c8eb4f9bab51ddf32354b97e6.jpg" alt="back" />
            <div className={s.innerContainer}>
                <h1>Пройти верификацию</h1>
                <p>Пройдите верификацию по документам, чтобы мы удостоверились, что у вас есть права для управления автомобилем и ваши документы подходят для аренды нашего автомобиля</p>
                <input 
                    type="file"
                    ref={udost}
                    style={{display: 'none'}}
                    onChange={(e) => handleFileChange(e, 'удостоверения')}
                />
                <button onClick={() => handleBtnClick(udost)}>Загрузить удостоверение личности</button>
                
                {/* <img className={s.document} src="/udos.png" alt="" /> */}
                <input 
                    type="file"
                    ref={license}
                    style={{display: 'none'}}
                    onChange={(e) => handleFileChange(e, 'водительских прав')}
                />
                <button onClick={() => handleBtnClick(license)}>Загрузить водительские права</button>
                {/* <img className={s.document} src="/faik.jpeg" alt="" /> */}

                <button onClick={handleUpload}>Upload</button>
                {loading && <div className={s.loader}><img className={s.loading} src="https://zornet.ru/CSS-ZORNET/Kodak_saita/asvetun/vesan-kigedsab/aiido-loading-Icon.gif" alt="" /></div>} {/* Отображаем бегущий ползунок загрузки только при активной загрузке */}
                {/* { 
                    <h3 className={s.access} >Одобрено</h3> 
                } */}
            </div>
        </div>
    );
}

export default CheckDocumentPage;
