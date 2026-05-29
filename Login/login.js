$(document).ready (function () {
    // Email Input Box
    $(`#emailIn`).focus(function () {
        $(`.placeholder`).css('top', '9px');
        $(`.placeholder`).css('left', '17px');
        $(`.placeholder`).css('font-size', '13px');
        $(`.placeholder`).css('color', 'rgb(209, 209, 209)');
        $(this).css('padding-left', '20px');
        $(this).css('font-size', '17px');
        $(this).css('color', 'rgb(209, 209, 209)');
    })

    $(`#emailIn`).blur(function () {
        $(this).css('font-size', '18px');

        let value = $(this).val();
        let div = document.getElementById("alert-required");
        
        if (value == '') {
            $(`.placeholder`).css('transition', '0.3s');
            $(`.placeholder`).css('top', '21px');
            $(`.placeholder`).css('left', '15px');
            $(`.placeholder`).css('font-size', '20px');

            $(`#emailIn`).css('border', '1px solid red');
            div.style.color = "red";
            div.style.fontSize = "15px";
            div.style.fontFamily = "Arial";
            div.style.fontWeight = "100";
            div.style.marginTop = "12px";
            div.style.marginLeft = "3px"; 
            div.innerHTML = `<span> <i class="fa-regular fa-circle-xmark"></i> Please enter a valid email or phone number. </span>`;
        }
        else {
            $(`.placeholder`).css({
                top: '9px',
                left: '17px',
                fontSize: '13px',
                color: 'rgb(209, 209, 209)',
            });
    
            $(`#emailIn`).css({
                border: '1px solid #ccc', 
                color: 'rgb(209, 209, 209)', 
            });
    
            div.innerHTML = '';
        }
        // $(`.placeholder`).css('transition', '0.3s');
        // $(`.placeholder`).css('top', '21px');
        // $(`.placeholder`).css('left', '15px');
        // $(`.placeholder`).css('font-size', '18px');
    })

    // Password Input Box
    $(`#passIn`).focus(function () {
        $(`#password-input .placeholder2`).css({
            top: '9px',
            left: '17px',
            fontSize: '13px',
            color: 'rgb(209, 209, 209)',
        });
        $(this).css({
            'padding-left': '20px',
            'font-size': '17px',
            'color': 'rgb(209, 209, 209)'
        });
    });

    $(`#passIn`).blur(function () {
        $(this).css('font-size', '18px');

        let value = $(this).val();
        let passDiv = document.getElementById("alert-pass");

        if (value === '') {
            $(`#password-input .placeholder2`).css({
                transition: '0.3s',
                top: '21px',
                left: '15px',
                fontSize: '20px',
            });

            $(`#passIn`).css('border', '1px solid red');
            passDiv.style.color = "red";
            passDiv.style.fontSize = "15px";
            passDiv.style.fontFamily = "Arial";
            passDiv.style.fontWeight = "100";
            passDiv.style.marginTop = "12px";
            passDiv.style.marginLeft = "3px"; 
            passDiv.innerHTML = `<span> <i class="fa-regular fa-circle-xmark"></i> Your password is required. </span>`;
        } 
        else {
            $(`#password-input .placeholder2`).css({
                top: '9px',
                left: '17px',
                fontSize: '13px',
                color: 'rgb(209, 209, 209)',
            });

            $(`#passIn`).css({
                border: '1px solid #ccc',
                color: 'rgb(209, 209, 209)',
            });

            passDiv.innerHTML = '';
        }
    });

    $(`.sign-in-btn`).mouseover(function () {
        $(this).css('background-color', 'rgba(231, 1, 1, 0.891)');
    })

    $(`.sign-in-btn`).mouseleave(function () {
        $(this).css('background-color', 'rgba(231, 1, 1)');
    })

    $(`#check-box-icon`).click(function () {
        $(this).html(`<i class="fa-solid fa-square-check"></i>`);
    })

    $(`.learn-more-a`).click (function () {
        $(`#learn-more`).html(`The information collected by Google reCAPTCHA is subject 
            to the Google <a>Privacy Policy </a> and <a>Terms of Service </a>, and is used for
            providing, maintaining, and improving the reCAPTCHA service and for 
            general security purposes (it is not used for personalised advertising by 
            Google).`);
        
        $(this).remove();
        
        $(`#learn-more`).css('font-size', '14px');
        $(`#learn-more`).css('color', '#bbbbbb');
        $(`#learn-more`).css('font-weight', '100');
        $(`#learn-more`).css('padding-top', '15px');
    })
})


let Password = [
    {
        email: 'priyanshppatel23@gnu.ac.in',
        passwd: 'Priyansh'
    },
    {
        email: 'rushippatel23@gnu.ac.in',
        passwd: 'Rushi'
    },
    {
        email: 'dhyeygajjar23@gnu.ac.in',
        passwd: 'Dhyey'
    },
    {
        email: 'admin',
        passwd: 'admin'
    }
]

let btn = document.getElementsByClassName("sign-in-btn")[0];
btn.addEventListener("click", function () {
    let emailIn = document.getElementById("emailIn").value;
    let passwd = document.getElementById("passIn").value;

    Password.forEach( function (p) {
        if (p.email == emailIn && p.passwd == passwd) {
            window.location.href = "../SelectUser/SelectUser.html";
        }
    }) 
})