interface Link {
    url: string;
    id?: number;
    description?: string;
}
interface TranslatedLink extends Link{
    language: string;
}

function filterByTerm(input: Array<Link>, searchTerm: string) {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!input.length) throw Error("input cannot be empty");
    const regex = new RegExp(searchTerm, "i");

    return input.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    });
}
const obj1: Link = { url: "string1" };
const obj2: Link = { url: "string2" };
const obj3: Link = { url: "string3" };
const arrOfLinks: Array<Link> = [obj1, obj2, obj3];
const term: string = "java";

const link1: TranslatedLink = {description: "Blablabla typescript tutorial is good for newbie like me",
    id: 1,
    url: "www.tvojemamaneumilyzovat.cz",
    language: "cz"
};

filterByTerm([{ url: "string1" }, { url: "string2" }, { url: "string3" }],
    "java"
);