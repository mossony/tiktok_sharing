auto();
setScreenMetrics(1440, 3120); // Screen size of oneplus 7 pro
launchApp(""); // App name here
//console.show();
main();
function main(){
    let i = 100;  // Number of sharing
    while(i > 0){
        share_and_next();
        i = i - 1;
    }   
}
/**
 * share the video and swipe to the next
 * click position relative to size of oneplus 7 pro
 * test your own click position: Settings > Developers Options > Show pointer location
 */
function share_and_next(){
    customSleep(2);
    click(1330,2338);
    customSleep(2);
    click(1221,1748);
    customSleep(2);
    click(705,1042);
    customSleep(2);
    swipe(775, 2195, 775, 650,500);
}
/**
 * sleep for 'time' seconds
 */

function customSleep(time){
    sleep(time*1000);
}