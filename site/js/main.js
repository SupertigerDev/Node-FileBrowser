var selectedStyle = "blur";
var selectedColor = 'light';

function changeTheme(style) {

    if (style === "plain" && style !== selectedStyle && selectedColor === "dark"){
        $('.plainThemeBox').addClass("selectedThemeBox");
        $('.blurThemeBox').removeClass("selectedThemeBox");
        $('body').css('background-color', '#383838');
        $('.blurLeftEG').css('background-color', 'rgba(0, 0, 0, 0.10)');
        selectedStyle = "plain";
    }else if (style=== "blur" && style !== selectedStyle && selectedColor === "dark"){
        $('.blurThemeBox').addClass("selectedThemeBox");
        $('.plainThemeBox').removeClass("selectedThemeBox");
        $('body').css('background-color', 'rgba(0,0,0,0.31)');
        $('.blurLeftEG').css('background-color', 'rgba(255,255,255,0.4)');
        selectedStyle = "blur";
    }

    if (style === "plain" && style !== selectedStyle ){
        $('.plainThemeBox').addClass("selectedThemeBox");
        $('.blurThemeBox').removeClass("selectedThemeBox");
        $('body').css('background-color', 'white');
        $('.blurLeftEG').css('background-color', 'rgba(0, 0, 0, 0.10)');
        selectedStyle = "plain";
    }else if (style=== "blur" && style !== selectedStyle ){
        $('.blurThemeBox').addClass("selectedThemeBox");
        $('.plainThemeBox').removeClass("selectedThemeBox");
        $('body').css('background-color', 'rgba(255,255,255,0.31)');
        $('.blurLeftEG').css('background-color', 'rgba(255,255,255,0.4)');
        selectedStyle = "blur";
    }
}

function changeColour(color) {

    if (color === 'dark' && color !== selectedColor && selectedStyle === "blur"){
        $('body').css('background-color', 'rgba(0,0,0,0.31)');
        selectedColor = "dark"
    }else if (color === 'light' && color !== selectedColor && selectedStyle === "blur"){
        $('body').css('background-color', 'rgba(255,255,255,0.31)');
        selectedColor = "light"
    }else if (color === 'dark' && color !== selectedColor){
        $('body').css('background-color', '#383838');
        selectedColor = "dark"
    }else if (color === 'light' && color !== selectedColor){
        $('body').css('background-color', 'white');
        selectedColor = "light"
    }
    if (selectedColor === "dark"){
        $('.darkThemeBox').addClass("selectedThemeBox");
        $('.lightThemeBox').removeClass("selectedThemeBox");
    }else if (selectedColor === "light"){
        $('.lightThemeBox').addClass("selectedThemeBox");
        $('.darkThemeBox').removeClass("selectedThemeBox");
    }

}



function startButton() {
    // Emit selectedStyle to main server.

    $('.intro').fadeOut('slow', function () {

        if (selectedColor === "dark" && selectedStyle === "blur"){
            $('.browseFiles').css('background-color', '#383838');
            $('body').css('background-color', 'rgba(0,0,0,0.31)');
        }else if (selectedColor === "light" && selectedStyle === "blur"){
            $('.browseFiles').css('background-color', 'white');
        }

        $('.mainFileBrowser').fadeIn();
    });
}
