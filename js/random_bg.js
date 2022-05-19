function change() {
    var bodyBgs = [];
    bodyBgs[1] = "https://files-upyun.ricken.cn/icon/dog_ci/1.jpg";
    bodyBgs[2] = "https://files-upyun.ricken.cn/icon/dog_ci/2.jpg";
    bodyBgs[3] = "https://files-upyun.ricken.cn/icon/dog_ci/3.jpg";
    bodyBgs[4] = "https://files-upyun.ricken.cn/icon/dog_ci/4.jpg";
    bodyBgs[5] = "https://files-upyun.ricken.cn/icon/dog_ci/5.jpg";
    bodyBgs[6] = "https://files-upyun.ricken.cn/icon/dog_ci/6.jpg";
    bodyBgs[7] = "https://files-upyun.ricken.cn/icon/dog_ci/7.jpg";
    bodyBgs[8] = "https://files-upyun.ricken.cn/icon/dog_ci/8.jpg";
    bodyBgs[9] = "https://files-upyun.ricken.cn/icon/dog_ci/9.png";
    bodyBgs[10] = "https://files-upyun.ricken.cn/icon/dog_ci/10.jpg"; 
    bodyBgs[11] = "https://files-upyun.ricken.cn/icon/dog_ci/8.jpg";
    bodyBgs[12] = "https://files-upyun.ricken.cn/icon/dog_ci/8.jpg";
    var randomBgIndex = Math.round(Math.random() * 12);
    var img1 = document.getElementById('bgimg');
    // img1.style.backgroundImage = 'url(' + bodyBgs[randomBgIndex] + ')';
    // img1.style.backgroundImage = 'url(' + bodyBgs[3] + ')';
    img1.style.backgroundImage = 'linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%)';
    // window.setTimeout(function () { change() }, 10000);
}
change();