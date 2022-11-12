export const qpdate = (value: string, lang: string="fr", tz: string="America/Toronto", show: string="full") => {
    let date_value = new Date(value)
    let options: Intl.DateTimeFormatOptions = {
        timeZone: tz,
        hour12: false,
        year: (["full","date"].includes(show) ? "numeric" : undefined),
        month: (["full","date"].includes(show) ? "long" : undefined),
        day: (["full","date"].includes(show) ? "numeric" : undefined),
        hour: (["full","time"].includes(show) ? "2-digit" : undefined),
        minute: (["full","time"].includes(show) ? "2-digit" : undefined)
    }
    return date_value.toLocaleString(lang, options)
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

const qpfilters = {
    qpdate,
    qpslug
}

export default qpfilters;
