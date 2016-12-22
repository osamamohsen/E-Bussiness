/**
 * Created by osamamohsen on 19/12/16.
 */
/*Email Validation*/
// alert("Done");
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

/*check if fields Empty*/
function is_Empty_Fields(myArray) {
    var errors = [];
    for (var key in myArray)
        if (myArray[key] == "")
            errors.push("field "+key+"is required");
    if(myArray['pass[pass1]']!=null)
        if(myArray['pass[pass1]'] != myArray['pass[pass2]'])
            errors.push("Both Password must Be Same");

    if(!errors)
        return false;
    return errors;
}
function print_errors(errors,div_id) {
    jQuery(div_id).show();
    jQuery(div_id).html("");
    for(var e=0;e<errors.length;e++)
        jQuery(div_id).html(jQuery(div_id).html()+"<li>"+errors[e]+"</li>");
}
jQuery(document).ready(function () {

    jQuery('#login-js-page').on('submit',function (e) {
        var that = jQuery(this),
            url = 'api/login_page',//that.attr('action'),
            type = that.attr('method'),
            data = [];
        var res = [jQuery('#edit-email'),jQuery('#edit-password')];
        for(var i=0;i<res.length;i++){
            var name = res[i].attr('name');
            var value = res[i].val();
            data[name] = value;
        }
        // console.log(data);
        errors = [];
        var errors = is_Empty_Fields(data);
        // console.log(errors);
        if(errors.length == 0) {
            if(isValidEmailAddress(data['email']) ){
                var formData = jQuery('#login-js-page').serialize();
                jQuery.ajax({
                    url: 'api/login_page',
                    type: "POST",
                    data: formData,
                    success: function (response) {
                        var data = JSON.parse(response);
                        if(data.user != null)
                            window.location.href = "http://localhost/drup/drupal-7.53/";
                        else{
                            errors.push("Email or Password is not Correct");
                            print_errors(errors,'#errors');
                        }
                    },
                    error: function (e) {
                        console.log(e);
                    }
                });
            }//check of email address
            else{
                errors.push("Field Email is not Valid");
            }
        }//check of fields not empty
        print_errors(errors,'#errors');
        return false;
    });


    jQuery('#register-page').on('submit',function (e){
        var that = jQuery(this),
            url = 'api/register',
            type = that.attr('method'),
            data = [];
        var res = [jQuery('#edit-name'),jQuery('#edit-mail'),jQuery('#edit-pass-pass1'),jQuery('#edit-pass-pass2')];
        for(var i=0;i<res.length;i++){
            var name = res[i].attr('name');
            var value = res[i].val();
            data[name] = value;
        }
        errors = [];
        var errors = is_Empty_Fields(data);
        if(errors.length == 0) {
            if(isValidEmailAddress(data['mail']) ){
                // console.log("Done");
                var formData2 = jQuery('#register-page').serialize();
                // console.log(formData2);
                jQuery.ajax({
                    url: 'api/register',
                    type: "POST",
                    data: formData2,
                    success: function (response) {
                        console.log(response);
                        var data = JSON.parse(response);
                        if(data.user != null)
                            // console.log(response);
                            window.location.href = "http://localhost/drup/drupal-7.53/";
                        else{
                            errors.push("Email Had Token Before");
                            print_errors(errors,'#register_errors');
                        }
                    },//end func resp
                    error: function (e) {
                        console.log(e);
                    }
                });
            }//check of email address
            else{
                errors.push("Field Email is not Valid");
            }
        }//check of fields not empty
        print_errors(errors,'#register_errors');
        return false;
    });
});
