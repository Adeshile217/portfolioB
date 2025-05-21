

function setCircularProgress(containerId, percent) {
    if (!containerId) {
        return;
    }

    const container = document.querySelector(`#${containerId}`).parentElement;
    const circle = container.querySelector('.circle-progress');
    const percentage = container.querySelector('.percentage-text');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;



    percent = Math.min(Math.max(percent, 0), 100);
    circle.style.strokeDasharray = circumference;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    percentage.innerHTML = percent + '%';
}

document.querySelectorAll('.circle-progress').forEach(circle => {
    const radius = circle.r.baseVal.value;
    circle.style.strokeDasharray = 2 * Math.PI * radius;
    circle.style.strokeDashoffset = 2 * Math.PI * radius;
});

setTimeout(() => {
    setCircularProgress('frenchPercentage', 100);
    setCircularProgress('englishPercentage', 90);
    setCircularProgress('arabicPercentage', 30);
}, 100);



function setHorizontalProgress(barId, percent) {
    const container = document.getElementById(barId);

    if (!container) {
        return
    };
    const fill = container.querySelector('.progress-bar-fill');
    const percentageText = container.querySelector('.HorizontalProgressPercentage');

    percent = Math.min(Math.max(percent, 0), 100);
    fill.style.width = percent + '%';
    percentageText.innerHTML = percent + '%';
  }

  setHorizontalProgress('htmlProgressbar', 85);
  setHorizontalProgress('cssProgressbar', 85);
  setHorizontalProgress('jsProgressbar', 70);
  setHorizontalProgress('coreldrawProgressbar', 80);
  setHorizontalProgress('wordpressProgressbar', 85);
  setHorizontalProgress('primaveraProgressbar', 65);



const downloadButton = document.getElementById('downloadButton').addEventListener('click', (e)=>{
    e.preventDefault()

    const link = document.createElement('a')
    link.href = './Adeshile_Ibraheem_CV.docx'
    link.download = './Adeshile_Ibraheem_CV.docx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link);

    alert('File downloaded')
})



const form = document.getElementById('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent')
    form.reset();
  });