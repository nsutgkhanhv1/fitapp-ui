import { ReactElement, useRef, useState } from "react";

const readAsBase64 = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        resolve(e.target.result.toString());
      }
    };
    reader.readAsDataURL(file);
  });
};

export interface FileChooserProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onFileSelected?: (file: File) => void;
  onBase64Selected?: (base64: string) => void;
  onFilesSelected?: (files: FileList) => void;
  onBase64FilesSelected?: (base64Files: string[]) => void;
  addon?: ReactElement;
}

export const FileChooser = ({
  onFileSelected,
  onBase64Selected,
  onFilesSelected,
  onBase64FilesSelected,
  addon,
  className,
  ...props
}: FileChooserProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [processing, setProcessing] = useState<boolean>(false);

  return (
    <div
      className={["cursor-pointer outline-none active:opacity-70", className].filter(Boolean).join(" ").trim()}
      onClick={() => {
        ref.current?.click();
      }}
    >
      {processing ? (
        <div className="animate-spin size-5 border-2 border-gray-300 border-t-gray-600 rounded-full" />
      ) : (
        addon
      )}
      <input
        {...props}
        ref={ref}
        className="hidden"
        type="file"
        onChange={(e) => {
          if (props.multiple) {
            const files = e.target.files;
            if (files) {
              onFilesSelected?.(files);
              if (onBase64FilesSelected) {
                setProcessing(true);
                Promise.all(Array.from(files).map((file) => readAsBase64(file))).then((base64Files) => {
                  onBase64FilesSelected(base64Files);
                  setTimeout(() => {
                    setProcessing(false);
                  }, 500);
                });
              }
            }
            return;
          }
          const file = e.target.files?.[0];
          if (file) {
            const start = Date.now();
            onFileSelected?.(file);
            if (onBase64Selected) {
              setProcessing(true);
              readAsBase64(file).then((base64) => {
                onBase64Selected(base64);
                setTimeout(
                  () => {
                    setProcessing(false);
                  },
                  Math.max(0, 500 - (Date.now() - start)),
                );
              });
            }
          }
        }}
      />
    </div>
  );
};
