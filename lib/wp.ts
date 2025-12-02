const BASE_URL ="https://creative-associates.jp/wp-jspn/wpv2";
export async function getWorks() {
  const res = await fetch(`${BASE_URL}/works?per_page=100`, {
    cache: "no-store",       // ← これが決定打！
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    console.error("WP API Fetch Error: /works");
    return [];
  }
  return res.json();
}

export async function getComics() {
  const res = await fetch(`${BASE_URL}/comics?per_page=100`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    console.error("WP API Fetch Error: /comics");
    return [];
  }
  return res.json();
}

export async function getPhotos() {
  const res = await fetch(`${BASE_URL}/photos?per_page=100`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    console.error("WP API Fetch Error: /photos");
    return [];
  }
  return res.json();
}
