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
    qpdate,
    qpslug,
    qpunit
}

export default qpfilters;
