
  // the elements are cloned in order for the carousel to move infinitely
  $(function () {
    var $first=$('#partners>:first-child');
    $('#partners').width($first.outerWidth(true));
    $first.clone(true).appendTo('#partners');
    $('#partners').addClass('ready');
  })
