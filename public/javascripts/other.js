function FormValidationi() {
    //First Name Validation
    var fni = document.getElementById('fni').value;
    var lni = document.getElementById('lni').value;
    var phi = document.getElementById('phi').value;
    var addi = document.getElementById('addi').value;
    var eqi = document.getElementById('eqi').value;
    var ai = document.getElementById('ai');
    var eti = document.getElementById('eti');
    var gi = document.getElementById('gi');
    var oi = "no other";
    other = document.getElementById('oi');
    if (other) {
        oi = document.getElementById('oi').value;
    }


    if (fni === "") {
        document.getElementById('fni').style.borderColor = "red";
        document.getElementById('fnis').style.display = "";
        return false;
    } else {
        document.getElementById('fni').style.borderColor = "green";
        document.getElementById('fnis').style.display = "none";

    }

    if (lni === "") {
        document.getElementById('lni').style.borderColor = "red";
        document.getElementById('lnis').style.display = "";
        return false;

    } else {
        document.getElementById('lni').style.borderColor = "green";
        document.getElementById('lnis').style.display = "none";

    }

    if (phi === ""|| isNaN(phi) || phi.length<10 || phi.length>11 ) {
        document.getElementById('phi').style.borderColor = "red";
        document.getElementById('phis').style.display = "";
        return false;

    } else {
        document.getElementById('phi').style.borderColor = "green";
        document.getElementById('phis').style.display = "none";

    }

    if (addi === "") {
        document.getElementById('addi').style.borderColor = "red";
        document.getElementById('addis').style.display = "";
        return false;
    } else {
        document.getElementById('addi').style.borderColor = "green";
        document.getElementById('addis').style.display = "none";

    }

    if (eqi === "" || parseInt(eqi,10)<=0) {
        document.getElementById('eqi').style.borderColor = "red";
        document.getElementById('eqis').style.display = "";
        return false;

    } else {
        document.getElementById('eqi').style.borderColor = "green";
        document.getElementById('eqis').style.display = "none";

    }

    if (ai.selectedIndex == 0) {
        document.getElementById('ais').style.display = "";
        return false;

    } else {
        document.getElementById('ais').style.display = "none";
    }

    if (gi.selectedIndex == 0) {
        document.getElementById('gis').style.display = "";
        return false;

    } else {
        document.getElementById('gis').style.display = "none";
    }

    if (eti.selectedIndex == 0) {
        document.getElementById('etis').style.display = "";
        return false;

    } else {
        document.getElementById('etis').style.display = "none";
    }
    if (other) {
        if (oi === "") {
            document.getElementById('oi').style.borderColor = "red";
            document.getElementById('ois').style.display = "";
            return false;

        } else {
            document.getElementById('oi').style.borderColor = "green";
            document.getElementById('ois').style.display = "none";

        }
    }


    var data;
    if (eti.value === "other") {
        data = {
            FirstName: fni,
            LastName: lni,
            PhoneNumber: phi,
            Address: addi,
            EWasteQuantity: eqi,
            AgeRange: ai.value,
            EWasteType: oi,
            Gender: gi.value
        }
    } else {
        data = {
            FirstName: fni,
            LastName: lni,
            PhoneNumber: phi,
            Address: addi,
            EWasteQuantity: eqi,
            AgeRange: ai.value,
            EWasteType: eti.value,
            Gender: gi.value
        }
    }
    $.ajax({
        type: 'POST',
        url: '/IndividualInfo',
        data: data,
        success: function (data) {
            //do something with the data via front-end framework
            if (data === 'done') {
                window.location.href = 'home'
            }
        }
    });
}


function FormValidationc() {
    //First Name Validation
    var cnc = document.getElementById('cnc').value;
    var enc = document.getElementById('enc').value;
    var addc = document.getElementById('addc').value;
    var cphc = document.getElementById('cphc').value;
    var ephc = document.getElementById('ephc').value;
    var ctc = document.getElementById('ctc');
    var etc = document.getElementById('etc');
    var eqc = document.getElementById('eqc').value;
    var oc = "no other";
    other = document.getElementById('oc');
    if (other) {
        oc = document.getElementById('oc').value;
    }


    if (cnc === "") {
        document.getElementById('cnc').style.borderColor = "red";
        document.getElementById('cncs').style.display = "";
        return false;
    } else {
        document.getElementById('cnc').style.borderColor = "green";
        document.getElementById('cncs').style.display = "none";

    }

    if (enc === "") {
        document.getElementById('enc').style.borderColor = "red";
        document.getElementById('encs').style.display = "";
        return false;

    } else {
        document.getElementById('enc').style.borderColor = "green";
        document.getElementById('encs').style.display = "none";

    }

    if (addc === "") {
        document.getElementById('addc').style.borderColor = "red";
        document.getElementById('addcs').style.display = "";
        return false;

    } else {
        document.getElementById('addc').style.borderColor = "green";
        document.getElementById('addcs').style.display = "none";

    }

    if (cphc === "" || isNaN(cphc) || cphc.length<10 || cphc.length>11) {
        document.getElementById('cphc').style.borderColor = "red";
        document.getElementById('cphcs').style.display = "";
        return false;
    } else {
        document.getElementById('cphc').style.borderColor = "green";
        document.getElementById('cphcs').style.display = "none";

    }

    if (ephc === "" || isNaN(ephc) || ephc.length<10 || ephc.length>11) {
        document.getElementById('ephc').style.borderColor = "red";
        document.getElementById('ephcs').style.display = "";
        return false;

    } else {
        document.getElementById('ephc').style.borderColor = "green";
        document.getElementById('ephcs').style.display = "none";

    }

    if (eqc === "" || parseInt(eqc,10)<=0) {
        document.getElementById('eqc').style.borderColor = "red";
        document.getElementById('eqcs').style.display = "";
        return false;

    } else {
        document.getElementById('eqc').style.borderColor = "green";
        document.getElementById('eqcs').style.display = "none";

    }

    if (etc.selectedIndex == 0) {
        document.getElementById('etcs').style.display = "";
        return false;

    } else {
        document.getElementById('etcs').style.display = "none";
    }

    if (ctc.selectedIndex == 0) {
        document.getElementById('ctcs').style.display = "";
        return false;

    } else {
        document.getElementById('ctcs').style.display = "none";
    }

    if (other) {
        if (oc === "") {
            document.getElementById('oc').style.borderColor = "red";
            document.getElementById('ocs').style.display = "";
            return false;

        } else {
            document.getElementById('oc').style.borderColor = "green";
            document.getElementById('ocs').style.display = "none";

        }
    }

    var data2;
    if (etc.value === "other") {
        data2 = {
            CName: cnc,
            EName: enc,
            Address: addc,
            CPhoneNumber: cphc,
            EPhoneNumber: ephc,
            CompanyType: ctc.value,
            EWasteType: oc,
            EWasteQuantity: eqc
        }
    } else {
        data2 = {
            CName: cnc,
            EName: enc,
            Address: addc,
            CPhoneNumber: cphc,
            EPhoneNumber: ephc,
            CompanyType: ctc.value,
            EWasteType:etc.value ,
            EWasteQuantity: eqc
        }
    }

    $.ajax({
        type: 'POST',
        url: '/companyInfo',
        data: data2,
        success: function (data) {
            if (data === 'done') {
                window.location.href = './home'
            }
        }
    });
}

$("#eti").on('change', function () {
    if ($(this).val() == 'other') {
        $(".otheri").append($("<input type=\"text\" id=\"oi\" class=\"form-control\" placeholder=\"enter ewaste type *\" value=\"\" />"));
        $(".otheri").append($("<span id='ois' style=\"display:none;color: red\">please enter ewaste type</span>\n"));

    } else {
        $("#oi").remove();
        $("#ois").remove();
    }
});

$("#etc").on('change', function () {
    if ($(this).val() == 'other') {
        $(".otherc").append($("<input type=\"text\" id=\"oc\" class=\"form-control\" placeholder=\"enter ewaste type *\" value=\"\" />"));
        $(".otherc").append($("<span id='ocs' style=\"display:none;color: red\">please enter ewaste type</span>\n"));

    } else {
        $("#oc").remove();
        $("#ocs").remove();

    }
});