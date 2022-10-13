function browserRedirect() {
           var sUserAgent = navigator.userAgent.toLowerCase();
           if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
               //跳转移动端页面
               var eyeLeftPosition = {
  start: [70, 78],
  end: [100, 110]
};

var eyeRightPosition = {
  start: [150, 78],
  end: [190, 110]
};

var eyeLeftCenterPosition = {
  x: (eyeLeftPosition.end[0] - eyeLeftPosition.start[0]) / 2 + eyeLeftPosition.start[0],
  y: (eyeLeftPosition.end[1] - eyeLeftPosition.start[1]) / 2 + eyeLeftPosition.start[1]
};

var eyeRightCenterPosition = {
  x: (eyeRightPosition.end[0] - eyeRightPosition.start[0]) / 2 + eyeRightPosition.start[0],
  y: (eyeRightPosition.end[1] - eyeRightPosition.start[1]) / 2 + eyeRightPosition.start[1]
};

var r = 30;

var eyeLeft = document.querySelector('#eyeLeft');
var eyeRight = document.querySelector('#eyeRight');

if (window.DeviceOrientationEvent) {

  window.addEventListener('deviceorientation', function (event) {

    let {alpha, beta, gamma} = event;

    eyeLeft.style.left = eyeLeftCenterPosition.x + gamma / 90 * r + 'px';
    eyeRight.style.left = eyeRightCenterPosition.x + gamma / 90 * r + 'px';
    eyeLeft.style.top = eyeRight.style.top 
                      = eyeLeftCenterPosition.y + beta / 180 * r + 'px';

    eyeRight.style.transform = eyeLeft.style.transform 
                         = eyeRight.style.WebkitTransform 
                         = eyeLeft.style.WebkitTransform 
                         = 'rotate(' + beta + 'deg)';
  }, false);
} else {
  document.querySelector('body').innerHTML = '浏览器不支持DeviceOrientationEvent';
}
           } else {
            var eyel = document.querySelectorAll('#eyeLeft');
		var eyerde = document.querySelectorAll('#eyeRight');
        window.addEventListener('mousemove',function(event){
         
            eyel.forEach(function(eyel){
            let angle = Math.atan2(event.clientX-eyel.getBoundingClientRect()
            .left-eyel.clientLeft/2,event.clientY-eyel.getBoundingClientRect().top
            -eyel.clientTop/2);
            let rot = angle * 180 / Math.PI * -1 - 90 ;
            eyel.style.transform = `rotate(${rot}deg)`;
               });
			eyerde.forEach(function(eyerde){
            let angle = Math.atan2(event.clientX-eyerde.getBoundingClientRect()
            .left-eyerde.clientLeft/2,event.clientY-eyerde.getBoundingClientRect().top
            -eyerde.clientTop/2);
            let rot = angle * 180 / Math.PI * -1 - 90 ;
            eyerde.style.transform = `rotate(${rot}deg)`;
               })
        })
           }
 }
	browserRedirect(); 