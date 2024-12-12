export function useModal(
  closeModal: () => void
) {
  
  const modalContent = ref<HTMLElement | null>(null);

  // Обработчик нажатия клавиши Escape
  const handleKeyEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  // Обработчик нажатия вне модального окна
  const handleOutClick = (event: MouseEvent) => {
    if (modalContent.value && !modalContent.value.contains(event.target as Node)) {
      closeModal();
    }
  };

  onMounted(() => {
    document.body.classList.add("hidden");
    document.addEventListener("keyup", handleKeyEscape);
  });

  onUnmounted(() => {
    document.body.classList.remove("hidden");
    document.removeEventListener("keyup", handleKeyEscape);
  });

  return {
    modalContent,
    handleOutClick,
    handleKeyEscape,
  };
}