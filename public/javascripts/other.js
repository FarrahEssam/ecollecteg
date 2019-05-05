 function FormValidationi(){
     //First Name Validation
     var fni=document.getElementById('fni').value;
     var lni=document.getElementById('lni').value;
     var phi=document.getElementById('phi').value;
     var addi=document.getElementById('addi').value;
     var eqi=document.getElementById('eqi').value;
     var ai=document.getElementById('ai');
     var eti=document.getElementById('eti');
     var gi=document.getElementById('gi');
     var oi="no other";
     other = document.getElementById('oi');
     if(other)
     {
         oi = document.getElementById('oi').value;
     }



     if(fni == ""){
         document.getElementById('fni').style.borderColor = "red";
         document.getElementById('fnis').style.display = "";
         return false;
     }else{
         document.getElementById('fni').style.borderColor = "green";
         document.getElementById('fnis').style.display = "none";

     }

     if(lni == ""){
         document.getElementById('lni').style.borderColor = "red";
         document.getElementById('lnis').style.display = "";
         return false;

     }else{
         document.getElementById('lni').style.borderColor = "green";
         document.getElementById('lnis').style.display = "none";

     }

     if(phi == ""){
         document.getElementById('phi').style.borderColor = "red";
         document.getElementById('phis').style.display = "";
         return false;

     }else{
         document.getElementById('phi').style.borderColor = "green";
         document.getElementById('phis').style.display = "none";

     }

     if(addi == ""){
         document.getElementById('addi').style.borderColor = "red";
         document.getElementById('addis').style.display = "";
         return false;
     }else{
         document.getElementById('addi').style.borderColor = "green";
         document.getElementById('addis').style.display = "none";

     }

     if(eqi == ""){
         document.getElementById('eqi').style.borderColor = "red";
         document.getElementById('eqis').style.display = "";
         return false;

     }else{
         document.getElementById('eqi').style.borderColor = "green";
         document.getElementById('eqis').style.display = "none";

     }

     if(ai.selectedIndex==0){
         document.getElementById('ais').style.display = "";
         return false;

     }else{
         document.getElementById('ais').style.display = "none";
     }

     if(gi.selectedIndex==0){
         document.getElementById('gis').style.display = "";
         return false;

     }else{
         document.getElementById('gis').style.display = "none";
     }

     if(eti.selectedIndex==0){
         document.getElementById('etis').style.display = "";
         return false;

     }else{
         document.getElementById('etis').style.display = "none";
     }
    if(other){
        if(oi == ""){
            document.getElementById('oi').style.borderColor = "red";
            document.getElementById('ois').style.display = "";
            return false;

        }else{
            document.getElementById('oi').style.borderColor = "green";
            document.getElementById('ois').style.display = "none";

        }
    }


     var data = {
         fni: fni,
         lni: lni,
         phi: phi,
         addi: addi,
         eqi: eqi,
         ai: ai.value,
         eti: eti.value,
         oi: oi,
         gi: gi.value
     }
     $.ajax({
         type: 'POST',
         url: '/request',
         data: data,
         success: function (data) {
             //do something with the data via front-end framework
             if(data === 'done'){
                 window.location.href='home'
             }
         }
     });
 }


 function FormValidationc(){
     //First Name Validation
     var fni=document.getElementById('fni').value;
     var lni=document.getElementById('lni').value;
     var phi=document.getElementById('phi').value;
     var addi=document.getElementById('addi').value;
     var eqi=document.getElementById('eqi').value;
     var ai=document.getElementById('ai');
     var eti=document.getElementById('eti');
     var gi=document.getElementById('gi');
     var oi="no other";
     other = document.getElementById('oi');
     if(other)
     {
         oi = document.getElementById('oi').value;
     }



     if(fni == ""){
         document.getElementById('fni').style.borderColor = "red";
         document.getElementById('fnis').style.display = "";
         return false;
     }else{
         document.getElementById('fni').style.borderColor = "green";
         document.getElementById('fnis').style.display = "none";

     }

     if(lni == ""){
         document.getElementById('lni').style.borderColor = "red";
         document.getElementById('lnis').style.display = "";
         return false;

     }else{
         document.getElementById('lni').style.borderColor = "green";
         document.getElementById('lnis').style.display = "none";

     }

     if(phi == ""){
         document.getElementById('phi').style.borderColor = "red";
         document.getElementById('phis').style.display = "";
         return false;

     }else{
         document.getElementById('phi').style.borderColor = "green";
         document.getElementById('phis').style.display = "none";

     }

     if(addi == ""){
         document.getElementById('addi').style.borderColor = "red";
         document.getElementById('addis').style.display = "";
         return false;
     }else{
         document.getElementById('addi').style.borderColor = "green";
         document.getElementById('addis').style.display = "none";

     }

     if(eqi == ""){
         document.getElementById('eqi').style.borderColor = "red";
         document.getElementById('eqis').style.display = "";
         return false;

     }else{
         document.getElementById('eqi').style.borderColor = "green";
         document.getElementById('eqis').style.display = "none";

     }

     if(ai.selectedIndex==0){
         document.getElementById('ais').style.display = "";
         return false;

     }else{
         document.getElementById('ais').style.display = "none";
     }

     if(gi.selectedIndex==0){
         document.getElementById('gis').style.display = "";
         return false;

     }else{
         document.getElementById('gis').style.display = "none";
     }

     if(eti.selectedIndex==0){
         document.getElementById('etis').style.display = "";
         return false;

     }else{
         document.getElementById('etis').style.display = "none";
     }
     if(other){
         if(oi == ""){
             document.getElementById('oi').style.borderColor = "red";
             document.getElementById('ois').style.display = "";
             return false;

         }else{
             document.getElementById('oi').style.borderColor = "green";
             document.getElementById('ois').style.display = "none";

         }
     }


     var data = {
         fni: fni,
         lni: lni,
         phi: phi,
         addi: addi,
         eqi: eqi,
         ai: ai.value,
         eti: eti.value,
         oi: oi,
         gi: gi.value
     }
     $.ajax({
         type: 'POST',
         url: '/user/request',
         data: data,
         success: function (data) {
             //do something with the data via front-end framework
             if(data === 'done'){
                 window.location.href='./home'
             }
         }
     });
 }

 $("#eti").on('change', function() {
     if ($(this).val() == 'other'){
         $( ".otheri" ).append( $( "<input type=\"text\" id=\"oi\" class=\"form-control\" placeholder=\"enter ewaste type *\" value=\"\" />" ) );
         $( ".otheri" ).append( $( "<span id='ois' style=\"display:none;color: red\">please enter ewaste type</span>\n" ) );

     } else {
         $( "#oi" ).remove();
         $("#ois").remove();
     }
 });

 $("#etc").on('change', function() {
     if ($(this).val() == 'other'){
         $( ".otherc" ).append( $( "<input type=\"text\" id=\"oc\" class=\"form-control\" placeholder=\"enter ewaste type *\" value=\"\" />" ) );
     } else {
         $( "#oc" ).remove();
     }
 });