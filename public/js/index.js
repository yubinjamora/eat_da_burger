/**
 * Executes when you click the submit button.
 */
$('#text-enter-button').on("click", function(event) {
    
      var inputData = $('#input_box').val();
    
      $.ajax("/burgers/create", {
        type: "POST",
        dataType: "json",
        data: {
          'val1': inputData
        }
      }).then(
        function () {
          location.reload();
        });
    
    });
    /**
     * Executes when you click on any of the devour button.
     */
    $('.bDivs').on('click', '.devourBtn', function () {
    
      var bClicked = $(this).attr('id');
    
      $.ajax("/devourBurger", {
        type: "PUT",
        dataType: "json",
        data: {
          'btnID': bClicked
        }
      }).then(
        function () {
          location.reload();
        });
    });