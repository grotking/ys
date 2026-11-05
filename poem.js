(function(){
  fetch('https://v1.jinrishici.com/all.json')
    .then(function(r){return r.json()})
    .then(function(j){
      var d=document.createElement('div');
      d.id='p';
      d.innerHTML='「'+j.content+'」<br><span style="font-size:9pt;color:#888">——'+j.origin+'·'+j.author+'</span>';
      document.body.appendChild(d);
    })
    .catch(function(){});
})();
