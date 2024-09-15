export const useFileHandler = (fileRef: Ref<HTMLInputElement | undefined>) => {
  const file = ref<File | { name: string }>();

  const addFile = () => {
    if (!fileRef.value) return;

    fileRef.value.click();
  };

  const removeFile = () => {
    if (!fileRef.value) return;

    file.value = undefined;

    fileRef.value.files = null;
    fileRef.value.value = "";
  };

  const handleFileChange = (event: Event) => {
    const { files } = event.target as HTMLInputElement;
    file.value = files?.[0];
  };

  const handleDragOver = (event: DragEvent) => {
    if (!event.dataTransfer) return;
    event.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (event: DragEvent) => {
    const newFile = event.dataTransfer?.files[0];
    if (newFile?.type !== "application/pdf") return;

    file.value = newFile;
  };

  return {
    file,
    handleDragOver,
    handleFileChange,
    handleDrop,
    addFile,
    removeFile,
  };
};
