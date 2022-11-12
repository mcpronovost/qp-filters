export const qpcode = (text: string) => {
    let result = text
    result = result
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/\n/g, "<br />")
        .replace(/\[g\]/g, '<span style="font-weight:bold;">')
        .replace(/\[\/g\]/g, "</span>")
        .replace(/\[i\]/g, '<span style="font-style:italic;">')
        .replace(/\[\/i\]/g, "</span>")
        .replace(/\[s\]/g, '<span style="text-decoration:underline;">')
        .replace(/\[\/s\]/g, "</span>")
        .replace(/\[b\]/g, '<span style="text-decoration:line-through;">')
        .replace(/\[\/b\]/g, "</span>")
        .replace(/\[gauche\]/g, '<div style="text-align:left;">')
        .replace(/\[\/gauche\]/g, "</div>")
        .replace(/\[centre\]/g, '<div style="text-align:center;">')
        .replace(/\[\/centre\]/g, "</div>")
        .replace(/\[droite\]/g, '<div style="text-align:right;">')
        .replace(/\[\/droite\]/g, "</div>")
        .replace(/\[c=#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\]/g, '<span style="color:#$1;">')
        .replace(/\[c=([a-zA-Z0-9_]+)\]/g, '<span style="color:var(--c-$1);">')
        .replace(/\[\/c\]/g, "</span>")
        .replace(/\[url=([^<>[\]]+)\]/g, '<a href="$1">')
        .replace(/\[\/url\]/g, "</a>")
        .replace(/\[urlo=([^<>[\]]+)\]/g, '<a href="$1" target="_blank">')
        .replace(/\[\/urlo\]/g, "</a>")
        .replace(/\[img=([^<>[\]]+)\]/g, '<img src="$1" alt="" />')
        .replace(/\[ico=([a-z- ]+)\]/g, '<i class="mdi $1"></i>')
    return result
}

export const qpdate = (value: string|null=null, lang: string="fr", tz: string="America/Toronto", show: string="full") => {
    let date_value = !!value ? new Date(value) : new Date(new Date().toString());
    let options: Intl.DateTimeFormatOptions = {
        timeZone: tz,
        hour12: false,
        year: (["full","date"].includes(show) ? "numeric" : undefined),
        month: (["full","date"].includes(show) ? "long" : undefined),
        day: (["full","date"].includes(show) ? "numeric" : undefined),
        hour: (["full","time"].includes(show) ? "2-digit" : undefined),
        minute: (["full","time"].includes(show) ? "2-digit" : undefined)
    }
    return date_value.toLocaleString(lang, options);
}

export const qpslug = (value: string|number) => {
    return value.toString()
    .normalize("NFD")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/ð/g, "d")
    .replace(/ß/g, "ss")
    .replace(/§/g, "ss")
    .replace(/ł/g, "l")
    .replace(/ø/g, "o")
    .replace(/æ/g, "ae")
    .replace(/œ/g, "oe")
    .replace(/ĸ/g, "k")
    .replace(/µ/g, "u")
    .replace(/[^\w\-]+/g, "")
    .replace(/\_/g, "-")
    .replace(/\-\-+/g, "-")
    .replace(/\-$/g, "");
}

export const qpunit = (num: number, digits: number = 2) => {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

const qpfilters = {
    qpcode,
    qpdate,
    qpslug,
    qpunit
}

export default qpfilters;
