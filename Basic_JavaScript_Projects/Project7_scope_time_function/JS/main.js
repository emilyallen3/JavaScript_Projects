

x = "Global Variable"
function Local_fun() {
    y = "Local Variable";
    document.getElementById("global_local").style.color = "orange";
    document.getElementById("global_local").innerHTML = x + y;
}
document.write(x);
document.write(y);

