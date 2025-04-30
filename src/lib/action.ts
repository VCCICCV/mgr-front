export async function createPost(formData: FormData) {
  "use server";
  const title = formData.get("title");
  const content = formData.get("content");

  // Update data
  // Revalidate cache
}

export async function deletePost(formData: FormData) {
  "use server";
  const id = formData.get("id");

  // Update data
  // Revalidate cache
}
