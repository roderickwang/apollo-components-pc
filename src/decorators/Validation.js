export default DecoratedComponent => {
    DecoratedComponent.prototype.onlyNumber = function (event) {
        var keyCode = event.keyCode;
        if (((keyCode > 57&&keyCode<96)||keyCode>105||event.shiftKey)&&keyCode!=110&&keyCode!=190) {
            event.preventDefault();
        }
    }
}