document.addEventListener('DOMContentLoaded', function() {
    // Элементы
    const checkBtn = document.getElementById('checkTestBtn');
    const testMsgDiv = document.getElementById('testMsg');
    const angelContainer = document.getElementById('angelContainer');
    const angelPhoto = document.getElementById('angelMomPhoto');
    const momStaticPhoto = document.getElementById('momStaticPhoto');

    // Определяем путь к фото мамы
    let momPhotoUrl = '../images/mom.jpg'; // путь по умолчанию
    
    // Если на странице есть тег <img> с фото мамы, берём его src
    if (momStaticPhoto) {
        momPhotoUrl = momStaticPhoto.src;
    } else {
        // Если вдруг элемента нет, пробуем использовать изображение из папки images
        momPhotoUrl = '../images/mom.jpg';
    }

    // Функция проверки, что все три вопроса отмечены
    function isQuizCompleted() {
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q3 = document.querySelector('input[name="q3"]:checked');
        return q1 && q2 && q3;
    }

    // Обработчик кнопки
    checkBtn.addEventListener('click', function() {
        // Проверяем, все ли вопросы answered
        if (!isQuizCompleted()) {
            testMsgDiv.innerHTML = '🌸 Мамочка, ответь на все три вопроса — тогда ангел прилетит! 🌸';
            testMsgDiv.style.color = '#d66939';
            return;
        }

        // Устанавливаем фото для ангела (то же, что и в preview)
        angelPhoto.src = momPhotoUrl;

        // Показываем приятное сообщение
        testMsgDiv.innerHTML = '🎉 Ура! Ты справилась! Смотри, ангел летит к тебе с любовью! 🎉';
        testMsgDiv.style.color = '#4f8ab0';

        // Показываем блок ангела, если он скрыт
        if (angelContainer.style.display === 'none') {
            angelContainer.style.display = 'block';
            // Небольшая задержка, чтобы анимация успела сработать
            setTimeout(() => {
                angelContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        } else {
            // Если уже виден — перезапускаем анимацию
            angelContainer.style.animation = 'none';
            setTimeout(() => {
                angelContainer.style.animation = 'flyAngel 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
            }, 10);
            angelContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Оживляем сердечки
        const hearts = document.querySelectorAll('.birthday-hearts i');
        hearts.forEach(heart => {
            heart.style.animation = 'none';
            setTimeout(() => {
                heart.style.animation = 'heartBeat 1.2s infinite';
            }, 20);
        });
    });
});