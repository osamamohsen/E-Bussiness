/**
 * Created by osamamohsen on 20/12/16.
 */
jQuery(document).ready(function () {
    // alert("asd");
    Drupal.behaviors.eurekaAjax = {
        attach: function (context, settings) {
            // Bind an AJAX callback to our link
            var eurekaAjaxLink = jQuery('#eureka-ajax');

            eurekaAjaxLink.click(function(event) {
                // Prevent the default link action
                event.preventDefault();

                // Get the request URL without the query string
                var ajaxUrl = eurekaAjaxLink.attr('href').split('?');

                alert(ajaxUrl[0]);
                jQuery.ajax({
                    type: "POST",
                    url: ajaxUrl[0],
                    data: {
                        // For server checking
                        'from_js': true
                    },
                    dataType: "json",
                    success: function (data) {
                        // Display the time from successful response
                        if (data.message) {
                            jQuery(".messages").remove();
                            jQuery("#content").prepend('<div class="messages status">' + data.message + '</div>');
                        }
                    },
                    error: function (xmlhttp) {
                        // Error alert for failure
                        alert('An error occured: ' + xmlhttp.status);
                    }
                });
            });
        }
    };
});