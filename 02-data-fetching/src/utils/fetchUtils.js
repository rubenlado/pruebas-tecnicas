
export async function fetchV2 (url){
    const res = await fetch(url);
    return await res.json();
}