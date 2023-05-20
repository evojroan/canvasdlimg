//Canvas 1
function drawCanvas1() {
  const canvas1 = document.getElementById('canvas1');
  const context1 = canvas1.getContext('2d');
  // 在 Canvas 上面作畫
  context1.beginPath(); //畫臉
  context1.arc(60, 60, 60, 0, 2 * Math.PI);
  context1.fillStyle = '#E8BEAC';
  context1.fill();
  context1.closePath();

  context1.beginPath(); //畫左眼
  context1.arc(30, 30, 6, 0, 2 * Math.PI);
  context1.fillStyle = '#000000';
  context1.fill();
  context1.closePath();

  context1.beginPath(); //畫右眼
  context1.arc(90, 30, 6, 0, 2 * Math.PI);
  context1.fillStyle = '#000000';
  context1.fill();
  context1.closePath();

  context1.beginPath(); //畫嘴巴
  context1.arc(60, 60, 24, 0, Math.PI, false);
  context1.closePath();
  context1.lineWidth = 5;
  context1.fillStyle = 'red';
  context1.fill();
  context1.strokeStyle = '#550000';
  context1.stroke();
}

//以下為 Download_1 程式碼
function handleClick() {
  const anchor = document.createElement('a');
  anchor.href = canvas1.toDataURL('image/png');
  anchor.download = 'image.png';
  anchor.click();
}

// Canvas 2
function drawCanvas2() {
  const canvas2 = document.getElementById('canvas2');
  if (canvas2.getContext) {
    const context2 = canvas2.getContext('2d');
    const face = document.getElementById('face');
    const mouth = document.getElementById('mouth');
    context2.drawImage(face, 0, 0, canvas2.width, canvas2.height);
    context2.drawImage(mouth, 0, 0, canvas2.width, canvas2.height);

    //以下為 Download_2 程式碼
    const dl2 = document.getElementById('dl2');
    const dataURL = canvas2.toDataURL('image/png');
    dl2.href = dataURL;
  }
}
