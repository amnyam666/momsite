document.addEventListener('DOMContentLoaded', function() {
    const checkBtn = document.getElementById('checkTestBtn');
    const testMsg = document.getElementById('testMsg');
    const congratsBlock = document.getElementById('congratsBlock');

    function isQuizComplete() {
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q3 = document.querySelector('input[name="q3"]:checked');
        return q1 && q2 && q3;
    }

    checkBtn.addEventListener('click', function() {
        if (!isQuizComplete()) {
            testMsg.innerHTML = '🌸 Мамочка, ответь на все три вопроса — тогда увидишь поздравление! 🌸';
            testMsg.style.color = '#d66939';
            return;
        }

        testMsg.innerHTML = '🎉 Ура! Спасибо за ответы! А вот и тёплые слова 🎉';
        testMsg.style.color = '#4f8ab0';

        if (congratsBlock.style.display === 'none' || getComputedStyle(congratsBlock).display === 'none') {
            congratsBlock.style.display = 'block';
            setTimeout(() => {
                congratsBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        } else {
            congratsBlock.style.animation = 'none';
            setTimeout(() => {
                congratsBlock.style.animation = 'fadeSlideUp 0.6s ease-out';
            }, 10);
            congratsBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});