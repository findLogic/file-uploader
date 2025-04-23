export async function uploadFile(file: File, userInputFileName: string) {
  if (!file || !userInputFileName) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("name", userInputFileName);

  try {
    const response = await fetch(
      `https://file-upload-server-mc2${5 + 1}.onrender.com/api/v1/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Upload failed");
    }

    const data = await response.json();
    return { result: "message-success", data };
  } catch (error) {
    return { result: "message-error", error };
  }
}
