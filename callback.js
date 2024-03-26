function showInfo(callback)
{
    console.log('');
    setTimeout(function(){
        callback;
    }),3000;
}
showInfo(function()
{
    console.log("callback");
})