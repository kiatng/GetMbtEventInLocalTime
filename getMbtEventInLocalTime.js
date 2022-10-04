const spans = [... document.querySelectorAll('span')].filter(el => el.textContent.includes('event will start'));
const mbtDates = [... document.body.innerHTML.matchAll(/20\d\d\-\d\d\-\d\dT\d\d:\d\d:\d\d/g)] ;
for (let [i, span] of spans.entries()) {
  if (mbtDates[i]) {
    let gmtOffset = span.innerHTML.indexOf('Central Daylight Time') ? ' GMT-05:00' : ' GMT-06:00';
    let d1 = new Date(mbtDates[i]);
    let d2 = new Date(d1.toDateString() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds() + gmtOffset)
    let divX = document.createElement('div');
    let contentLocalDt = document.createTextNode(d2.toString());
    divX.className = 'x-el-textarea';
    divX.style.border = 'thick dashed red';
    divX.appendChild(contentLocalDt);
    span.after(divX);
  }
}