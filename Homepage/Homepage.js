let images = [
    {
        bg_image: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSPdiWjVJ884_vu2rDhY1hZwipn198tdJ7q5-pdCx73M7PR-KbIvRmDXELlrQrMphz1wrW1ckC2IBOXISEZzEQs9oNbwwIMUsatL.webp?r=99e', 
        image_logo: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSvrGYl-ZMmrMehsllcWltC1eSKLpku272u_iQKSbwPnbzX5OH5RqjBiJ2QVHPIlxp5sI4AFooMkbu4RTyrwgC1M2jK9A642RUS4bIpX1Tn0TUy8wQRP-iYcH50xC3LNkc1-agKaf6JU4grBK8saQYFASpZbrVj9XOlIXEt8iVLSwkA3YtreQQ.webp?r=ef3'
    },
    {
        bg_image: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVapEzBib28Bumg42cssxZDpl_hAb9fe5lx-kPRPIK-WDE7cqw5SXu5T7Q13hYyMXrn3UTD4-pATKXS_afh75hyHyBsbJDJkpce6.webp?r=ce0', 
        image_logo: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZJlZ9euOFHRADZUDjRWvUkJMlfPjmuGTxAjaJMhg35vQDama_f7MY9hM7Tcw_zTW1jTW2QrrXQjhIeqUA6Ey0jphk8bzqquhi5gOfkr50kr.webp?r=e75'
    },
    {
        bg_image: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeHI0ehqmq51l8ZmdNfvoRHmyhP3DWGXEI2siP-SLbbbujJAdjQhqDGr0F-xkyIqGf3SYJz1h6msAAlW6dnLUHvWRTtdcIEVWFSJ.webp?r=fb7',
        image_logo: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbYMe9ASbZcozqqR-s7CDrhnR3wpppziug2Q42_2q0rUwm_e5gBGjllgG15u4FULE1SpUi3Io7PYMsLxlsEdWDb3EG9sC7A2XlSZ4QyZzxF_eFYlBIfW9Kc0HZ7UkUGz_9B-OmpM3dT5JpspEw-64Fp452N_aYryVdKtX6JCA3ypApU6AFELsQ.webp?r=278'
    },
    {
        bg_image: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABX-6hQEwXF9NfQ39SMNjS0ATvZIFnLNPPKzRNQKFWCDxjPK_gqE9-rmuMkqbYH9N0UCP69KgQbrZggLDv-QfkqGUrMB5GqfDb4gj.webp?r=d07',
        image_logo: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABW816cAAmtLO9yTfyeQBFUWwhKBDdEB3c9_xwPteWZAQSzHqay2dFsr0tfayhzs_FFzLVReRm1YvWHfVjJhfRvZm4Px74lvavefWjnh9xqiODrxXrOlH06sThgdQ089ieB3PXyoreLGuuiQCqPWOkaWk-iXzC15EyGMVZnWH5MEuFBEI93xEpQ.webp?r=dba'
    }
]

function setBackgroundImage (images) {
    let idx = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url(${images[idx].bg_image}`;

    let img = document.getElementsByClassName('title-logo')[0];
    img.src = images[idx].image_logo;
}

window.onload = () => {
    setBackgroundImage(images);
};

let movies = [
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZozzIT6Q0pVlthNws4VrbZeIKWGfV6eWcP4YVbwVVEMzeuY2bSeoB6nKamHfWzvrJp1drx1qIEdvSbBTLUN0n3veIE2IPUG5q4.webp?r=bd5' 
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeycYmVLbnLDo_fOuEtBHW9pGvyfy_Tr9ABOkwMxpwAMtqyOfFSR0RwA31dcb-XuJ9S2HqjSfVDc1B_krYiebB970WJYVScyVFGcSFPqHXo-P4donVUFECevfFH9lagP1VX5qW9uqWiOGJq0w5Ud8MtoIWa1OuRtK1QhBVYNruSTbdsaHfNx7tT3LfBy0RavVLIDZNqXxV-B2fZ4Ld3qrClukJvcbNQ5tvqJ4Oo.webp?r=766'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYstWSrea_lL8g7-wOCuu2Knms2Gjf0LTvZhkWq__5Lec5JnoohcKvRTXHXN0dfj7PccZ7U9pcQ2AOJH6dx-GydOx1dX38QcmmM.webp?r=75b'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc3ZUPL2cxo93rMRTGFd2EH9P7QK0OhAm-7MXfhKpj4dG8qxR0wMfVGsi7ExL9KwrJ1DT-u4HqruNKeJVCvSXrzT5GCIASX9wMRTRHOFS7yS2qDp4dpHNFQZGee5IDmP7X3m.jpg?r=ea5'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf4-rqh0HjYjtYfSyyxNEm__T5a24uaOnuYLUd13YyyMEPXb6coOkgCwsgjgg9eR1d2V2b6nUUDyIlVjgIYE03UPqmqSOMN_KDI.webp?r=62e'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRUZ1jra68gzcRXLNDYWq1rfHjIDJy3TKUabHHs7OdIomxGO2mns2o3IoygDj_0bfsvyRoc_J8AyJg46XrDg2G-r9NxUoujisiKg12gHM3Y5XAm6pcldLW8pxWtIJNy-LbZG.jpg?r=d80'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfuBxwODJWGpnxkkB_o4u6261-94UU3qXviCR10RUPHt_t2aUmLdxZSf9Ya1QPVE-RSGPIFap0ktl5E9IzJCdmOleGJlBtkgbJ9w5m7dY_HIg34-vtCLyJn7oD0YolAl8jOJ.jpg?r=8a4'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfnDY5KDRd8U2-6R_gxWCn1_LGGuvDg6H1FHUBjDnMFe52_zvYoDj1H7Z4teYdX-y_kTOn7dGULQ7xw7sahKReG3mWHtEJl5jC8.webp?r=558'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb5yy1B5Edcr4shYbptYX7tqKp6zUADMYcT68nvjpdZC0gcS1nLdLGd1SigHjzyHw-bJNtAzhkdmG8O_E7ntkpu4lFnzvJkR5XkMUODGtdNCfYgS8gL-TEe4uZyUht4Mw8g_.jpg?r=929'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYcVLkQWsY22ese5PYWtwFm2YqWTQ0AYxVLCxFmzlc8YehBald1aqbTKsUALj97PaeiE0XPxHJpvmIoWKJCWz1kKXHePOqGV4fyy0NnemV5AA_efC33_zaOr1M4IyFkA5K3W.jpg?r=f15'
    }
]

function AddMovies (div, movies) {
    movies.forEach(function (movie) {
        div.className = "boredom-buster";
        let movieDiv = document.createElement("div");
        movieDiv.className = "movie-image";

        let img = document.createElement('img');
        img.className = 'boxart-image boxart-image-in-padded-container';
        img.src = movie.movies_url;

        movieDiv.append(img);
        div.append(movieDiv);
    })
}

function AddPreview(div, movies) {
    div.addEventListener("click", function (e) {
        const img = e.target.closest("img");
        if (!img) return;

        const modal = document.createElement("div");
        modal.className = "modal";
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "800px";
        modal.style.height = "730px";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        modal.style.zIndex = 999;

        const enlarged = document.createElement("img");
        enlarged.src = img.src;
        // enlarged.style.maxWidth = "90%";
        // enlarged.style.maxHeight = "90%";
        enlarged.style.width = "100%";
        enlarged.style.height = "60%";
        enlarged.style.zIndex = "3";
        enlarged.style.borderRadius = "10px"

        // const icon = document.createElement("div");
        // icon.setAttribute("class", "icon");

        // icon.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;

        modal.append(enlarged);
        document.body.appendChild(modal);

        modal.addEventListener("click", () => {
            modal.remove();
        });
    });
}

let moviesDiv = document.getElementsByClassName("boredom-buster")[0];
AddMovies(moviesDiv, movies);
AddPreview(moviesDiv, movies)

// moviesDiv.addEventListener("mouseover", function (e) {
//     const movieImg = e.target.closest(".movie-image img");
//     const movieDiv = e.target.closest(".movie-image");

//     if (movieImg) {
//         movieDiv.style.transform = "scale(1.2)";
//         movieDiv.style.transition = "transform 0.3s ease-in-out";
//         movieDiv.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; 
//         movieDiv.style.borderRadius = "10px"; 
//         movieImg.style.zIndex = "10";
//     }
// });

// moviesDiv.addEventListener("mouseout", function (e) {
//     const movieImg = e.target.closest(".movie-image img");
//     const movieDiv = e.target.closest(".movie-image");

//     if (movieImg) {
//         movieDiv.style.transform = "scale(1)";
//         movieDiv.style.transition = "transform 0.3s ease-in-out";

//         movieImg.style.zIndex = "1";
//     };
// });

let movies2 = [
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY2LgwEkapg9wpaSDNWB4u_cO33aPaZK38OI-ejuICdE3oliUAuz65k81XIkofkT-1EfYMXepqjEctHkE1i51QJOS-poA5_KOssEvMYEo9NXMqYcNdMjv_OKy7UtLtGHh18LUlVm4qNouLGyEu_b6xb8s_3RZ2PvB7PhvWG1EFPsZFIVk9Z9uqdVSkNkFJP1U93PYBmB.jpg?r=11e'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfshWMCam92l99pUXAPU2pR0IOQJxfeMZPXaVMIbP-hW6Z3ORofKlC6Br13Ys4xWn8GfCw47X2OJsLfB1D3uwWan8rBSI-9cSuPfQGwo3rk6Z17HzSXF8VR-oX7bGProCvyB.jpg?r=e37'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRUZ1jra68gzcRXLNDYWq1rfHjIDJy3TKUabHHs7OdIomxGO2mns2o3IoygDj_0bfsvyRoc_J8AyJg46XrDg2G-r9NxUoujisiKg12gHM3Y5XAm6pcldLW8pxWtIJNy-LbZG.jpg?r=d80'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-4jJilduCcsIIDevRexIjBqthJ9fkrJd6RY_Q9xw8xtyMotGyPQlW24AC7g-zOpcgT5mUjV5SKRLlDA-s5MUwunHJtmrYehgg.webp?r=84d'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYPfMbjdlE8ZoNBAapVe-gaB27fqwvjk8zR26iPWrh-jB2RIjVbWZ8iW9ZOmPQieMr0Njh9KJGGNNRGg7Cnb9Wi7uXPor4uqpDA.webp?r=09f'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABToBxHtShNOnu1xY_5xagADmatpEBcg34CbM_1LHH-tVsJ92NiiTZckSyAzZF8B-88hmtyNdOYAAuZfs-EnoPs3rlGRkDA-Nz6M.webp?r=c27'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSTum2ujXr6IzEmyE7fzYBmySups_1HTwFydIEnh9d8HGmBc1BqhOaMIAU6cv2MDT4u9Ze_r1iXhs_vVNgnR6uubnuGv8EkTlro.webp?r=18d'
    }
]

let moviesDiv2 = document.getElementsByClassName("us-tv-shows")[0];
AddMovies(moviesDiv2, movies2);
AddPreview(moviesDiv2, movies2)

let movies3 = [
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeHy_StkRHd3jDGAHqe2z582JX_eQ-0JAoTIFvGf7fMj8BsISUX23Y0ZJ8lm1oBB6re9kxBDJrhkKwePLt8eEG9b4eh_68-dUtfnBOWq9kDA-kkX92I0EbtpBjCYCO1tUCJQVrYqS9XRuYllI5ovK0NSMyB5K2f86g_CV2_ZkDdnJutONr1sdBBdJ1uyXxAIxgikaePvLN7YxJxZCkgOjGYWiSjg9ME6Li0Hibs.webp?r=838'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSs0VJ-Uc4DMw6FWVZdKZ0udENcCNfu6fxkxt3I0t6jgi3CelBy_idLLAnBGaVH1LA116Az9rsa-37Z2DZ4JSuTSUHs0AdOSi1Q.webp?r=abf'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdXQ6zIcTamlrXVQNNmh0uk6qZL7ZJEcZN39tEavsDM1tePha9wecQ_ESsfeQ3whe9ypoDzTJ09152ASHl0Gr0r_DWqJdxLtGv9qbreTpDIPISk2bC_7qvtBA1_HfT6xbZ9tvL_TRbAxYcGx-1TEaHUDcSKGKYMfUxMf6kbYh3aMboNF_fZ7ZVZP-yqq5adc-OC84jhwAdys6w0r_ZAhUgB32x__9qWeVM_XaOM.webp?r=300'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfKHvgbCRprrNirEY_ho_EudgYi_KLyPIRtHoZ1oJXB_CyayF6ewIwZ6vcQuk6vjsFYb7wb4WUL936-d7o_kPm-HwnQUluIs0KM.webp?r=5e9'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR24J41XchJfAUEKhNPBZApy8tb15L7RfstzeJbK9l36OYbwPpd3YYYXL4Dx2hOlHEJm4yKxTbmeRSY7UXnFqJletAQSEXoof6mVcf6eKYYcCZsujrOFBjD0Ix3qhWkB3XIuFHCP247hCnu5Z4_ATlvWIBa8O3y78xU.webp?r=4a1'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZDb4r2wSFjBLpLebwYGK630Qvxqjj5-S_h1O9yHvIaYepJYZyJxmXgIzZqDchKQ5yK35uNoFpXJpRquTBO1YzdMvChrp7gER68.webp?r=7a1'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc0Tbj9hWMYBfRPJ4uZ74Cd9so9AjoVjD-ruG7QOywI-9AOAL5xD_sZf6Gj9BKTwBhyZOJOMWBDQZP_2jSC41BM_cUfGSab6w_av2nn_JmNSrbLXw7GyvJgE35hPSHETw2hcph3KcZR3hq-SCntbEuasGtpUVxu24CE.webp?r=af5'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQx-T6inhM57bCoLxBOBfKHjcmrc38sNABIPNLUn2X6DGWuLDlTqz0a0nOp3UAuu3mHGzqoCmill-cfYwDfLFMH0SimzvXEE5hc.webp?r=18d'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ4h0XqMWG4rjc2yftdzOHYM6fJPWqkOnFt5rXU-7kzXZNbH_P_s9T7t1DAk0NUK1QX0YFRiD8p1MUdaidQ0rSwV391hhywBi2k.webp?r=818'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfmHfxdOotpoN5tg2b1HGyMUb3Dhd2DWWeAGayUwYmItDcaf37J7nszLsVZnhWTp2V4qC-m5e_defd08-JF-TGM-awk04_YwOKE.webp?r=44e'
    }
]

let moviesDiv3 = document.getElementsByClassName("skip-queues")[0];
AddMovies(moviesDiv3, movies3);
AddPreview(moviesDiv3, movies3)


let movies4 = [
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXevT4yNoJRLmwYhOwFh6u1OIi6ybJnJf2i1-jRbWVJxgu59XdiTHI7vAImDXXkJhtguW1B03xPV28CwsO-gKeAsQnYIrQDlQMc.webp?r=227'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUox2M5wS9k7ekiRgcc3-RLMDzLwDjTHso5tyhLg2tu0UktV32iVTqfFd3oDBYnnjpmW5vEivbjOAIevGyVpHVFCy9L8wQEWJM-N68eaMwUo0TTI4vT08PNKOY97j58Y5JgH3kmiiOWoLsfAY9Yndb_qOluhpDONvjeFTjkX-Eg5_pa1-Wp2VTt3ybuLaa38K1O5wS5kIsZpF8lc02zq4SF6E8LuwxuAjTYuB6A.webp?r=739'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTEnnaYHB5C4FKlLdp5oX6nSCROMiN41KSCkVzdapX4PR-CKrHj-DXiGw36wjaIwcKQPINXdZGJPXwNNlCFA_xEjbYJGbMr1Jus.webp?r=073'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRiXlvjUkycl59SmMuwYv50Xb2paFBQqf7YLKC_AWfKn2Q-yRL-FKm7LFEIR74UAynQofCsSXTaTXHZUnbvhmItz3PFausML0N8.webp?r=c53'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdAXL-zg7EeHFQJf7BFvHQhP7_ernN7rtd0Q9WiwvOQ3lV834NtS-IXGGRtG9jJ-mMsl6YBX46itXjguWj56rH8ZiP1gGMM4Mv8.webp?r=831'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdHDdoMidVAxuy9ZBUAIXH4662RAwZxBkc5_x6cM89bE5ivXISBq7FTmP5JvgR3e7YYkyelitXcudGiEPow-2A-IML2AJNq0Uvk.webp?r=793'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS4ffod4DhCgj8hoAWYadsxuSOyxzgS-qiSvQ2d_bOZDhv_jvqlfQPIjZyXd44NlmoLIGXQUNjPUfQrcxCnaaTzStL2SrCGhfHo.webp?r=adc'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXbib31dwK8ngGDFodruI0x8tRT28MuxdBzoV7XrkzpiKKYwAkfpkRMe3FDVTb6yfm0T2bfty6wLHboLBMZuuqVJ06K631d6Lew.webp?r=93e'
    }
]

let moviesDiv4 = document.getElementsByClassName("blockbuster-movies")[0];
AddMovies(moviesDiv4, movies4);
AddPreview(moviesDiv4, movies4)

let movies5 = [
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaC11NcrqjO48XMMMA67Fq1aITy3ju3Z8ABDL8V8McWQgEzKNu1WE7tkmyxA644WuRrajUgHxFkHpnzpldHLaoE474y2WJLgvUJwja0oi8HJDxkd2K_1o-hLM2Q-p1hj9U2RwbMlUJlHZr0FanGuuXeNbuvMs574Vbebr1AMEfGWPhL1ia64yKY3w5dcF0PeEy5M0Rz1nLPzHQIRcfX8f8mcfXRoeFTAySyqB6hNpu4oCvjThwqT47tYoAIlc0ws_xy_qRMBUVjEEJlIkmtnh0_0q-YMWH1glZBrfL7wfkviWfWchQ.jpg?r=a76'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbw4krY_SZCtH4BVL31SvJVRlvhcUm9O8hcTLJH3om0fBBu8CyAjBXNlDJgD2WPA7sFthjmd3YYFWw-tlxRXpxvqlz6r3jKRTEWIp7sh7ESSYOwEnljFGVhFlk9HxyqrQ_06-2urmwqY7LAaaqKOoHM7Fxmq6z26KgYYrT06U0pW8LFF97EKavLjfFuJ973dt8UHIHVgJR7oNOVTZBcAQZu4OZeXQTt8Mg.jpg?r=f52'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSEyMnulk8o9lR1tKh1NIvHemt7SH-nV-_I0jq7FrfEIbCOc_QJr-9XPteaFlwcfNIOnxIDlhkeYQ5c9esle4z2TT42_HCRFqceUw-7P9m3pUwocJRQlkM8xMDZ2kY9C78Ji.jpg?r=6a8'
    },
    {
        movies_url: 'https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABec_Z56sgFa4ILLOpxtlnxZU-g5NKrlXakC3snQEEPhgseX6IJoQx5Dxyh5etbxirU7eJccihvqbY23X5unYrR13dAxMbQxwq5c.webp?r=c25'
    }
]

let moviesDiv5 = document.getElementsByClassName("continue")[0];
AddMovies(moviesDiv5, movies5);
AddPreview(moviesDiv5, movies5);

let movies6 = [
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeU5wzzki9YD96CoYSMbXrBzqd-upf6H-hS3vt46LH1RaPZX9nPPevCi0H48w3T6pLVejsK4o2RUxWHDNRZ5hw_g_GwkytUsXYh6VPhEOczRiRNrD3TNMagvLqFYdSGs4SLc.jpg?r=6cb'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWx0SZNyYslPVz76qD_Kkfduv_RbOKCYB_6HagEYFeUnTPm3dd9MYmh0DISENnNUYhsaEE18D_mJpkMCMGUo-MG4f-qgY3lNxxo.webp?r=9da'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY2ur51dy0jgkdQDXRTVtBuTQk-wEYngRRwgQLv-pKiJ1WUbQ4rpI1xngdGZ2dx2aPKnKAGh_T9gc1npP4vhKTalqJjj3hlMnEk.webp?r=783'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYmZ1f0FPsmIbskKkDDscDLLoAJvxIQiZ5FI1AWPcIc-ziOTIlZsyusJ0A82eJq0c9hCx7L6oObJlZxc_5AvehSQGDTeZguButcvZGUHHy4CxbR2cfwIE_Z77Emk9jq9XzGG.jpg?r=231'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZewu02vnwQLUpTKrcEzaF5T1GgfeCjkKwXVn_W_nhyG5esNut2QI0Ox3C4QU04XXYHzooxIpdctE-Oe8n_RLkd7eFXf5SFWXqs.webp?r=ddf'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABehZM2_g_zPrcrnD4e-6SFOyheKjYpcH221zoKqPa-tS2DsGiH3Z2ABJ77Ydb9z-5wPVdceyjufvcmjZWjUL8B4Pr0B4pKvsHuy8DhizziipHt9SKdKtGPpOGBWVg7BbzxxL.jpg?r=23e'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABemRAkbhnqLiLVPbj3k15EyU8moM2FT9ww9kg-cbnuXBZkzekFmtL7NvBvtJihoOQsAivCKUTXjUcRtmvrARbjZILnptEfMHKxc.webp?r=ff6'
    },
    {
        movies_url: 'https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZozzIT6Q0pVlthNws4VrbZeIKWGfV6eWcP4YVbwVVEMzeuY2bSeoB6nKamHfWzvrJp1drx1qIEdvSbBTLUN0n3veIE2IPUG5q4.webp?r=bd5'
    }
]

let moviesDiv6 = document.getElementsByClassName("watch-again")[0];
AddMovies(moviesDiv6, movies6);
AddPreview(moviesDiv6, movies6);

let search = document.getElementById("search");

search.addEventListener("click", function () {
    window.location.href = "../API/test2.html";
})