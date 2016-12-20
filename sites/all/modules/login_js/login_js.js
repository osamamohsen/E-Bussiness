/**
 * Created by osamamohsen on 19/12/16.
 */

jQuery(document).ready(function () {
    jQuery('#login-js-page').on('submit',function () {
        var that = jQuery(this),
            url = '/drup/drupal-7.53/?q=course/API/v1/question-data',//that.attr('action'),
            type = that.attr('method'),
            data = [];
        // alert(type);
        // alert(url);
        var res = [jQuery('#edit-name'),jQuery('#edit-password')];
        for(var i=0;i<res.length;i++){
            var name = res[i].attr('name');
            var value = res[i].val();
            data[name] = value;
        }
        console.log(data);
        jQuery.ajax({
            url : url,
            type : type,
            data : data,
            success: function (response) {
                console.log(response);
                jQuery('#errors').html("Done Data"+data);
            },
            error: function (e) {
                console.log(e);
                jQuery('#errors').html("Error Data");
            }
        });
        return false;
    });
});