import { showToast } from "../ui/components/shared/toastProvider";

export const copyTextHelper = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showToast("success", "تم نسخ النص");
    })
    .catch(() => {
      showToast("error", "فشل نسخ النص");
    });
};
