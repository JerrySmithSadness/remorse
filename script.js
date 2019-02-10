(function() {
  var move = function(){
    if (count < 20) count++;
    else {
      modal.show();
      count = 0;
    }
  };

  var count = 0;
  var max = 20;

  var modal = {
    show: function(){
      this.nodeClose.innerText = 'Закрыть';
      if (!this.isShow())
           this.node.classList.add('show');
    },
    hide: function(){
      this.nodeClose.innerText = 'Раскрыть';
      if (this.isShow())
           this.node.classList.remove('show');
    },
    isShow: function(){
      return this.node.classList.contains('show');
    },
    node: document.getElementById('modal'),
    nodeClose: document.querySelector('.modal .close')
  };

  modal.nodeClose.addEventListener('mouseup', function(){
    if (modal.isShow()) {
      modal.hide();
    }
    else {
      modal.show();
    }
  });

  window.onmousedown = function(){
    window.addEventListener('mousemove', move);
  };

  window.onmouseup = function(){
    window.removeEventListener('mousemove', move);
  };
}());
