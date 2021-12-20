const scripts = document.getElementsByTagName("script");

function check(lns)
{
    const rx = /document.getElementById\("newImgE"\).src = "([^"]+)"/;
    for (const ln of lns) {
        const m = rx.exec(ln);
        if (m) {
            window.location = m[1];
            return true;
        }
    }
    return false;
}

for (const script of scripts) {
    if (check(script.innerHTML.split("\n")))
        break;
}
