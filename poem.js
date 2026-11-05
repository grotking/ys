(function(){
  var d=document.createElement('div');
  d.id='p';
  d.textContent='正在加载...';
  document.body.appendChild(d);
  fetch('https://v1.jinrishici.com/all.json')
    .then(function(r){return r.json()})
    .then(function(j){
      d.innerHTML='「'+j.content+'」<br><span style="font-size:9pt;color:#888">——'+j.origin+'·'+j.author+'</span>';
    })
    .catch(function(){d.textContent='诗词加载失败'});
})();
