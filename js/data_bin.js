// JavaScript Document

Parse.initialize("0MJW9p71s1OXaqG4tJdFx7s1vwujM6M9aHDZHhMk",
                   "W2QWiaW5BvN1mT6I7JSX0MLbV5ZnyjhhjfIsVPJt");
				   


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }


};				   


function fix_phone_number(phone)
{

    // var str="0922-273387";
    str=phone.replace(/\(|\)|\+|\-/gi,"");
    if(str.length==10)
    {
      str=str.replace(/09/i,"8869")

    }
    return str;
}
    // if( isMobile.any() ) alert('Mobile');
    // if( isMobile.iOS() ) alert('iOS');