/**
 * Created by osamamohsen on 19/12/16.
 */

jQuery(document).ready(function () {
    // jQuery('#login-js-page').on('submit',function () {
    //     var that = jQuery(this),
    //         url = '/drup/drupal-7.53/api/login_page ',//that.attr('action'),
    //         type = that.attr('method'),
    //         data = [];
    //     // alert(type);
    //     // alert(url);
    //     var res = [jQuery('#edit-name'),jQuery('#edit-password')];
    //     for(var i=0;i<res.length;i++){
    //         var name = res[i].attr('name');
    //         var value = res[i].val();
    //         data[name] = value;
    //     }
    //     console.log(data);
    //     jQuery.ajax({
    //         url : url,
    //         type : type,
    //         data : data,
    //         success: function (response) {
    //             console.log(response);
    //             jQuery('#errors').html("Done Data"+data);
    //         },
    //         error: function (e) {
    //             console.log(e);
    //             jQuery('#errors').html("Error Data");
    //         }
    //     });
    //     return false;
    // });
    jQuery('#login-js-page').on('submit',function (e) {
        // e.preventDefault();
        var that = jQuery(this),
            url = 'api/login_page',//that.attr('action'),
            type = that.attr('method'),
            data = [];
        // alert(type);
        // alert(url);
        // that
        console.log();
        var res = [jQuery('#edit-name'),jQuery('#edit-password')];
        for(var i=0;i<res.length;i++){
            var name = res[i].attr('name');
            var value = res[i].val();
            data[name] = value;
        }

        var formData = jQuery('#login-js-page').serialize();
        console.log(type);
        jQuery.ajax({
            url : 'api/login_page',
            type : "POST",
            data : formData,
            success: function (response) {
                // alert(response);
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
