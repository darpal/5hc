// *** SHIRT Monogram selection display NO EDIT
$(document).on('knack-view-render.view_137', function (event, view) {
  var initialValue = $('.field_315 .kn-detail-body span span').text();

  function highlightSelectedImage(value) {
    // Remove fading from all images first
    $('#view_137 .selectable-image').addClass('faded');

    // Highlight the image matching the value
    $('#view_137 .selectable-image').each(function () {
      console.log('Alt value: ' + value);
      if ($(this).attr('alt') === value) {
        $(this).removeClass('faded');
      }
    });
  }

  // Check if the initial value is set and highlight the corresponding image
  if (initialValue) {
    highlightSelectedImage(initialValue);
  }
});

// *** SHIRT Monogram selection EDIT popup
$(document).on('knack-view-render.view_160', function (event, view) {
  // Replace 'view_1' with your actual view ID

  // Get the initial value of the field (replace 'field_1' with the actual field ID)
  var initialValue = $('#field_315').val();

  // Function to highlight the selected image based on the field value
  function highlightSelectedImage(value) {
    // Remove fading from all images first
    $('#view_160 .selectable-image').addClass('faded');

    // Highlight the image matching the value
    $('#view_160 .selectable-image').each(function () {
      if ($(this).attr('alt') === value) {
        $(this).removeClass('faded');
      }
    });
  }

  // Check if the initial value is set and highlight the corresponding image
  if (initialValue) {
    highlightSelectedImage(initialValue);
  }

  // Add click event listener to each image
  $('#view_160 .selectable-image').on('click', function () {
    var selectedValue = $(this).attr('alt'); // Get the value from the alt attribute

    // Show an alert with the selected value
    //alert("You selected: " + selectedValue);

    // Set the value of the specific field in the form
    $('#field_315').val(selectedValue);

    // Optionally trigger any events you need to, such as form updates
    $('#field_315').trigger('change');

    // Highlight the selected image and fade others
    highlightSelectedImage(selectedValue);
  });
});
