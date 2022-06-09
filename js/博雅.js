var lileft = document.getElementsByClassName('ul-left')[0].querySelectorAll('li');
// console.log(ulleft);
var rightbox = document.querySelectorAll('.right-p');
for (var i = 0; i < rightbox.length; i++) {
    lileft[i].index = i;
    lileft[i].onclick = function () {
        for (var j = 0; j < rightbox.length; j++) {
            console.log(this.index)
            rightbox[j].className = 'right-p';
            console.log(rightbox)
            lileft[j].firstElementChild.className = '';
        }
        lileft[this.index].firstElementChild.className = 'on';
        rightbox[this.index].className = 'curtent';

    }
}