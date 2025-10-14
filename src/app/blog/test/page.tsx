// @ts-nocheck

const STRAPI_TOKEN =
    "98521cea9aecb41284cf72848554a941ad7e515228153a4b980ab69bd6bea6a77c5e84e1363d5cbf529d9aa95e7afd23f6b97f8cc81e352047b160e05a35eb39196dc9c5a5eb37ac31cd29f64f4463483d67f5b948d70c770a149175eda187fc9c1bdad4d0892401139178181b1eba2bb329873e30c1b2203e4f429bb2d4bf2f";

const BASE_URL = "http://localhost:1337/api";
const ENDPOINT = "/casessses"; // проверь правильность
const STRAPI_URL = `${BASE_URL}${ENDPOINT}?populate[Content][populate]=*`;

async function getRawJson() {
    const res = await fetch(STRAPI_URL, {
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        console.error(await res.text());
        throw new Error(`Failed to fetch data from Strapi: ${res.status}`);
    }

    const data = await res.json();
    return data;
}

export default async function BlogPage() {
    const jsonData = await getRawJson();

    return (
        <div>
            <h1>Raw JSON (Dynamic Zone populate)</h1>
            <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
        {JSON.stringify(jsonData, null, 2)}
      </pre>
        </div>
    );
}
