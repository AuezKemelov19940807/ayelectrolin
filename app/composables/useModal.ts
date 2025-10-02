export const useModal = () => {
  const show = useState<boolean>("modal-show", () => false);

  const open = () => {
    show.value = true;
  };
  const close = () => {
    show.value = false;
  };
  const toggle = () => {
    show.value = !show.value;
  };

  return {
    show,
    open,
    close,
    toggle,
  };
};
