javascript:(function (){ var footY=0;var footCount=0;function footer(){if (footCount >= 20) return;now=document.body.scrollHeight;window.scrollTo( 0, now ) ; if ( footY != now ){ footY = now; footCount=0; setTimeout(footer, 200);}else{footCount++;setTimeout(footer, 1000);}}footer();})();
